//Definições de E/S
#include <avr/io.h>
//Tipos inteiros de tamanho fixo
#include <stdint.h>
//Delay
#include <util/delay.h>
//Função de leitura de botão
uint8_t ler_botao(){
    //Inicialização e 5 interações de amostragem
    uint8_t i = 0, status = PINB & (1 << PINB4);
    while(i<5){
        //Amostragem e comparação com valor anterior
        uint8_t amostra = PINB & (1 << PINB4);
        if(amostra == status) {
            i++;
        }
        else{
            i = 0;
            status = amostra;
        }
        //Atraso de 100 microseconds
        _delay_us(100)
    }
    return status;
}
int main(){
    //Direção do pino 4 da porta B como entrada
    DDRB = DDRB & ~(1 << DDB4);
    //Habilitanddo resistor pull-up do pino 4
    PORTB = PORTB | (1 << PORTB4);
    //Direção do pino 5 da porta B como saída
    DDRB = DDRB | (1 << DDB5);
    //Loop
    while(1){
        //Checagem do botão
        if(!ler_botao()){
            //Invertendo o estado do pino do LED 
            PORTB = PORTB | ^(1 << PORTB5);
        }
    }
}