// Tipos inteiros de tamanho fixo
#include <stdint.h>
// Definição do registrador de RCC
#define	RCC_APB1ENR			(0x40023840)
#define	RCC_APB2ENR			(0x40023844)
#define	RCC_USART3_EN  		(18)
// Definição de registradores de NVIC
#define	NVIC_ISER0			(0xE000E100)
#define	NVIC_ISER1			(0xE000E104)
#define	NVIC_ICER0			(0xE000E180)
#define	NVIC_ICER1			(0xE000E184)
#define	NVIC_ICPR0			(0xE000E280)
#define	NVIC_ICPR1			(0xE000E284)
#define	NVIC_IPR			(0xE000E400)
// Definição de registradores de USART3
#define	USART3_SR			(0x40004800)
#define	USART3_DR			(0x40004804)
#define	USART3_BRR			(0x40004808)
#define	USART3_CR1			(0x4000480C)
#define	USART3_CR2			(0x40004810)
#define	USART3_RXNE			(5)
#define	USART3_TXE			(7)
#define	USART3_UE			(13)
#define	USART3_TE			(3)
#define	USART3_RE			(2)
#define	USART3_RXNEIE		(5)
// Declaração de topo da pilha e de funções
extern char _estack;
int main();
void none();
void usart3();
// Tabela de vetor de interrupção
uint32_t (* const vector_table[]) __attribute__ ((section(".text.vector_table"))) = {
	(uint32_t*)(&_estack),	// Topo da pilha
	(uint32_t*)(main),		// Reset
	(uint32_t*)(none),		// NMI
	(uint32_t*)(none),		// Hard fault
	(uint32_t*)(none),		// Memory management fault
	(uint32_t*)(none),		// Bus fault
	(uint32_t*)(none),		// Usage fault
	0, 0, 0, 0,				// Reservado
	(uint32_t*)(none),		// SVCall
	(uint32_t*)(none),		// Debug monitor
	(uint32_t*)(none),		// Reservado
	(uint32_t*)(none),		// PendSV
	(uint32_t*)(none),		// SysTick
	(uint32_t*)(none),		// Window Watchdog interrupt
	(uint32_t*)(none),		// PVD through EXTI Line detection interrupt
	(uint32_t*)(none),		// Tamper interrupt
	(uint32_t*)(none),		// RTC global interrupt
	(uint32_t*)(none),		// Flash global interrupt
	(uint32_t*)(none),		// RCC global interrupt
	(uint32_t*)(none),		// EXTI Line0 interrupt
	(uint32_t*)(none),		// EXTI Line1 interrupt
	(uint32_t*)(none),		// EXTI Line2 interrupt
	(uint32_t*)(none),		// EXTI Line3 interrupt
	(uint32_t*)(none),		// EXTI Line4 interrupt
	(uint32_t*)(none),		// DMA1 Stream0 global interrupt
	(uint32_t*)(none),		// DMA1 Stream1 global interrupt
	(uint32_t*)(none),		// DMA1 Stream2 global interrupt
	(uint32_t*)(none),		// DMA1 Stream3 global interrupt
	(uint32_t*)(none),		// DMA1 Stream4 global interrupt
	(uint32_t*)(none),		// DMA1 Stream5 global interrupt
	(uint32_t*)(none),		// DMA1 Stream6 global interrupt
	(uint32_t*)(none),		// ADC1, ADC2 and ADC3 global interrupts
	(uint32_t*)(none),		// CAN1 TX interrupts
	(uint32_t*)(none),		// CAN1 RX0 interrupts
	(uint32_t*)(none),		// CAN1 RX1 interrupt
	(uint32_t*)(none),		// CAN1 SCE interrupt
	(uint32_t*)(none),		// EXTI Line[9:5] interrupts
	(uint32_t*)(none),		// TIM1 Break interrupt and TIM9 global interrupt
	(uint32_t*)(none),		// TIM1 Update interrupt and TIM10 global interrupt
	(uint32_t*)(none),		// TIM1 Trigger and Commutation interrupts and TIM11 global interrupt
	(uint32_t*)(none),		// TIM1 Capture Compare interrupt
	(uint32_t*)(none),		// TIM2 global interrupt
	(uint32_t*)(none),		// TIM3 global interrupt
	(uint32_t*)(none),		// TIM4 global interrupt
	(uint32_t*)(none),		// I2C1 event interrupt
	(uint32_t*)(none),		// I2C1 error interrupt
	(uint32_t*)(none),		// I2C2 event interrupt
	(uint32_t*)(none),		// I2C2 error interrupt
	(uint32_t*)(none),		// SPI1 global interrupt
	(uint32_t*)(none),		// SPI2 global interrupt
	(uint32_t*)(none),		// USART1 global interrupt
	(uint32_t*)(none),		// USART2 global interrupt
	(uint32_t*)(usart3)		// USART3 global interrupt
};
// Reset and Clock Control (RCC)
volatile uint32_t* const APB1ENR = (volatile uint32_t*)(RCC_APB1ENR);
volatile uint32_t* const APB2ENR = (volatile uint32_t*)(RCC_APB2ENR);
// NVIC
volatile uint32_t* const ISER0 = (volatile uint32_t*)(NVIC_ISER0);
volatile uint32_t* const ISER1 = (volatile uint32_t*)(NVIC_ISER1);
volatile uint32_t* const ICER0 = (volatile uint32_t*)(NVIC_ICER0);
volatile uint32_t* const ICER1 = (volatile uint32_t*)(NVIC_ICER1);
volatile uint32_t* const ICPR0 = (volatile uint32_t*)(NVIC_ICPR0);
volatile uint32_t* const ICPR1 = (volatile uint32_t*)(NVIC_ICPR1);
volatile uint8_t* const IPR = (volatile uint8_t*)(NVIC_IPR);
// USART6
volatile uint32_t* const U3SR = (volatile uint32_t*)(USART3_SR);
volatile uint32_t* const U3DR = (volatile uint32_t*)(USART3_DR);
volatile uint32_t* const U3BRR = (volatile uint32_t*)(USART3_BRR);
volatile uint32_t* const U3CR1 = (volatile uint32_t*)(USART3_CR1);
volatile uint32_t* const U3CR2 = (volatile uint32_t*)(USART3_CR2);
// Configurar USART3
void configurar_usart3() {
	// Habilitando clock do USART3
	(*APB1ENR) |= (1 << RCC_USART3_EN);
	// Habilitando USART (1 start bit + 8 bits de dados + 1 stop bit)
	(*U3CR1) |= (1 << USART3_UE);
	// Habilitando interrupção em RX
	(*U3CR1) |= (1 << USART3_RXNEIE);
	// Ajustando baud rate para 9600 bps (52,083 @ 8 MHz)
	(*U3BRR) = 0x341;
	// Habilitando recepção e transmissão
	(*U3CR1) |= (1 << USART3_RE) | (1 << USART3_TE);
	// Habilitando interrupção
	(*ISER1) |= (1 << (39 - 32));
	// Ajustando prioridade para nível 13
	IPR[39] = 0xD0;
}
// Enviar dado pela USART3
void enviar_usart3(uint8_t dado) {
	// Escrevendo dado
	(*U3DR) = dado;
	// Esperando envio do dado
	while(!((*U3SR) & (1 << USART3_TXE)));
}
// Receber dado pela USART3
uint8_t receber_usart3() {
	// Aguardando recebimento do dado
	while(!((*U3SR) & (1 << USART3_RXNE)));
	// Retornando dado
	return (*U3DR);
}
// Versão simplificada do printf
void print_serial(char* string) {
	// Índice da string
	uint32_t i = 0;
	// Repete até encontrar caractere nulo
	while(string[i]) {
		// Enviando caractere via USART3
		enviar_usart3(string[i++]);
	}
	// Retorno de linha
	enviar_usart3('\r');
}
// Versão simplificada do scanf
void scan_serial(char* string) {
	// Índice da string
	uint32_t i = 0;
	// Recebendo dado da USART3
	do string[i] = receber_usart3();
	// Repete até receber quebra de linha
	while(string[i++] != '\n');
	// Inserindo caractere nulo
	string[i] = 0;
}
// ISR vazia
void none() {
	print_serial("NONE!\n");
}
// ISR da USART3
void usart3() {
	// Caracteres de texto
	char texto[100];
	// Recebendo mensagem de texto
	scan_serial(texto);
	// Retornando mensagem de texto
	print_serial(texto);
	// Limpando sinalizador de interrupção
	(*ICPR1) |= (1 << (39 - 32));
}
// Função principal
int main() {
	// Configuração da USART3
	configurar_usart3();
	// Mensagem inicial
	print_serial("RX2TX4EVER!\n");
	// Laço infinito
	while(1);
}
