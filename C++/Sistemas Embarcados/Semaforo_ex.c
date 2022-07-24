/**
 * @file Semaforo.c
 * @author Matheus Lima (matheuslimasof.eng@gmail.com)
 * @version 0.1
 * @date 2022-04-04
 * 
 * @copyright Copyright (c) 2022
 * 
 */
/*Implemente um sistema de controle semafótico com sincronização por comunicação serial
    Considere o cenário com um par sincronizados de semáforos, cada um com seu botão de pedestres,
    que permite o controle adaptativo do fluxo de pessoas e veículos em um cruzamento de duas vias 
    com temporização padrão de 5 segundos para Amarelo e 15 segundos para verde e vermelho.
        Quando o pedestre pressiona o botão, é feito o envio de 'B'(botão) e ocorre a mudança do sinal verde
        para amarelo ou prorrogação do vermelho por 15 segundos.
        A transição de estado envia 'R'(vermelho), 'G'(verde),'Y'(amarelo) ou 'S'(sincronização).
        No processo de sincronização, o sinal fica piscando em amarelo até receber uma mensagem com estado
        válido do outro semáforo.
        É enviado a contagem de tempo restante em segundos para cada estado, exceto quando estiver em sincronização.*/
#include <avr/io.h>
#include <util/delay.h>
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
//Definição dos registradores de GPIO A/C
#define GPIOA_CRL (*(volatile unsigned long *)0x40010800)
#define GPIOA_CRH (*(volatile unsigned long *)0x40010804)
#define GPIOA_ODR (*(volatile unsigned long *)0x4001080C)
#define GPIOC_CRH (*(volatile unsigned long *)0x40011004)
#define GPIOC_ODR (*(volatile unsigned long *)0x4001100C)
//Definição de campos GPIO A/C
#define PA0_CNF (2)
#define PA0_MODE (0)
#define PA9_CNF (6)
#define PA9_MODE (4)
#define PA10_CNF (10)
#define PA10_MODE (8)
#define PC13_CNF (22)
#define PC13_MODE (20)
#define PC13_ODR (13)
//Definição de registrador de RCC
#define RCC_APB2ENR (*(volatile unsigned long *)0x40021018)
//Definição de campos de RCC
#define RCC_AFIO_EN (0)
#define RCC_GCPIOA_EN (2)
#define RCC_GPIOC_EN (4)
#define RCC_USART1_EN (14)
//Definição de registradores de SysTick
#define SYST_CSR (*(volatile unsigned long *)0xE000E010)
#define SYST_RVR (*(volatile unsigned long *)0xE000E014)
//Definição de campos de SYST_CSR
#define SYST_CSR_CLKSOURCE (2)
#define SYST_CSR_TICKINT (1)
#define SYST_CSR_ENABLE (0)
//Definição de registradores de AFIO< EXTI e NVIC
#define AFIO_EXTICR1 (*(volatile unsigned long *)0x40010008)
#define EXTI_IMR (*(volatile unsigned long *)0x40010400)
#define EXTI_FTSR (*(volatile unsigned long *)0x4001040C)
#define EXTI_PR (*(volatile unsigned long *)0x40010414)
#define NVIC_ISER0 (*(volatile unsigned long *)0xE000E100)
#define NVIC_IPR (*(volatile unsigned long *)0xE000E400))
//Definição de registradores de USART1
#define USART1_SR (*(volatile unsigned long *)0x40013800)
#define USART1_DR (*(volatile unsigned long *)0x40013804)
#define USART1_BRR (*(volatile unsigned long *)0x40013808)
#define USART1_CR1 (*(volatile unsigned long *)0x4001380C)
#define USART1_CR2 (*(volatile unsigned long *)0x40013810)
//Definição de campos de USART1
#define USART1_SR_TXE (7)
#define USART1_RXNE (5)
#define USART1_UE (13)
#define USART1_TE (3)
#define USART1_RE (2)
//Declaração de topo da pilha e de funções
extern char _estack;
int main();
void SysTick();
void botao();
//Tabela de vetor de interrupção
uint32_t (* const vector_table[]) __attribute__((section(".text.vector_table"))) = {
    (uint32_t *)(&_estack),
    (uint32_t *)(main),
    0,
    0,
    0,
    0,
    0,
    0, 0, 0, 0,
    0,
    0,
    0,
    0,
    (uint32_t *)(SysTick),
    0,
    0,
    0,
    0,
    0,
    0,
    (uint32_t *)(botao),
    0,
    0,
    0,
    0
};
//Porta A
volatile uint32_t* const PA_CRL = (volatile uint32_t*)&GPIOA_CRL;
volatile uint32_t* const PA_CRH = (volatile uint32_t*)&GPIOA_CRH;
volatile uint32_t* const PA_ODR = (volatile uint32_t*)&GPIOA_ODR;
//Porta C
volatile uint32_t* const PC_CRH = (volatile uint32_t*)&GPIOC_CRH;
volatile uint32_t* const PC_ODR = (volatile uint32_t*)&GPIOC_ODR;
//Reset and Clock Control (RCC)
volatile uint32_t* const APB2ENR = (volatile uint32_t*)&RCC_APB2ENR;
//SysTick
volatile uint32_t* const CSR = (volatile uint32_t*)&SYST_CSR;
volatile uint32_t* const RVR = (volatile uint32_t*)&SYST_RVR;
//AFIO
volatile uint32_t* const EXTICR1 = (volatile uint32_t*)&AFIO_EXTICR1;
//EXTI
volatile uint32_t* const IMR = (volatile uint32_t*)&EXTI_IMR;
volatile uint32_t* const FTSR = (volatile uint32_t*)&EXTI_FTSR;
volatile uint32_t* const PR = (volatile uint32_t*)&EXTI_PR;
//NVIC
volatile uint32_t* const ISER0 = (volatile uint32_t*)&NVIC_ISER0;
volatile uint8_t* const IPR = (volatile uint8_t*)(NVIC_IPR);
//USART1
volatile uint32_t* const U1SR = (volatile uint32_t*)&USART1_SR;
volatile uint32_t* const U1DR = (volatile uint32_t*)&USART1_DR;
volatile uint32_t* const U1BRR = (volatile uint32_t*)&USART1_BRR;
volatile uint32_t* const U1CR1 = (volatile uint32_t*)&USART1_CR1;
volatile uint32_t* const U1CR2 = (volatile uint32_t*)&USART1_CR2;
//Declaração de função print_serial
void print_serial(char* String);
//Função Systick
void Systick(){
    //Invertendo valor do pino PC13(LED)
    (*PC_ODR) ^⁼ (1 << PC13_ODR);
}
//Função botao
void botao() {
    //Enviar Mensagem
    print_serial("Botao Pressionado\n");
    //Desabilitando Systick
    (*CSR) &= ~(1 << SYST_CSR_ENABLE);
    //Checando se valor de recarga é 8000000
    if((*RVR) == 8000000){
        //Ajustando valor de recarga para 800000
        (*RVR) = 800000;
    }
    //Valor de recarga é 8000000
    else{
        //Ajustando valor de recarga para 8000000
        (*RVR) = 8000000;
    }
    //Habilitando Systick
    (*CSR) |= (1 << SYST_CSR_ENABLE);
    //Checando registrador de pendencia  
    if((*PR) & 1) {
        //Limpando pendencia no bit 0x
        (*PR) = 1;
    }
}
//Configurar pinos
void configurar_pinos(){
    //Habilitando clock do AFIO, GPIO A/C e USART1
    (*APB2ENR) |= (1 << RCC_AFIO_EN) | (1 << RCC_GPIOC_EN) | (1 << RCC_USART1_EN);
    //Ajustando PA0 como entrada
    (*PA_CRL) &= ~((0b11 << PA0_CNF) | (0b11 << PA0_MODE));
    (*PA_CRL) |= (0b10 << PA0_CNF);
    //Ajustando PA9 (TX) e PA10 (RX) como alternativa funcional
    (*PA_CRH) &= ~((0b11 << PA9_CNF) | (0b11 << PA9_MODE) | (0b11 << PA10_CNF) | (0b11 << PA10_MODE));
    (*PA_CRH) |= ((0b10 << PA9_CNF) | (0b10 << PA9_MODE) | (0b10 << PA10_CNF);
    //Ajustando PC13 como saida (2Mhz)
    (*PC_CRH) &= ~((0b11 << PC13_CNF) | (0b00 << PC13_MODE));
    (*PC_CRH) |= (0b10 << PC13_CNF);
}
void configurar_SysTick(){
    //Configuração do SysTick para 1 segundo (8 Mhz)
    (*RVR) = 8000000;
    (*CSR) |= (1 << SYST_CSR_ENABLE);
    (*CSR) |= (1 << SYST_CSR_TICKINT);
    (*CSR) |= (1 << SYST_CSR_CLKSOURCE);
}
//Configurar pino PA0 para interrupção em EXTI0
void configurar_PA0_EXTI0(){
    //EXTI0 <_> GPIO A
    (*EXTICR1) &= 0xFFF0;
    //Interrupção por gatilho de borda negativa
    (*FTSR) |= 1;
    //Desativar mascaramento 
    (*IMR) |= 1;
    //Habilitar interrupção 
    (*ISER0) |= (1 << 6);
    //Ajustando prioridade para nivel 13
    IPR[6] = 0xD0;
}
//Configurar USART1
void configurar_USART1(){
    //Habilitar USART1 (1 start bit + 8 bits de dados + 1 stop bit)
    (*U1CR1) |= (1 << USART1_UE);
    
}