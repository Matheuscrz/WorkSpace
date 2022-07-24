// Definições de E/S
#include <avro-c/io.h>
//Atraso de temporar
#include <util/delay.h>
//Função Principal 
int main(){
    //Ajustando pino como saída
    DDRB = DDRB | (1 << DDB5);
    //Loop infinito
    while (1){
        //Ligando o LED
        PORTB = PORTB | (1 << PORTB5);
        //Atraso de 1 segundo
        _delay_ms(1000);
        //Desligando o LED
        PORTB = PORTB & ~(1 << PORTB5);
        //Atraso de 1 segundo
        _delay_ms(1000);
    }
}