#include <stdio.h>
#include <stdlib.h>
//Definições de E/S
#include <avr/io.h>
//Tipos inteiros de tamanho fixo
#include <stdint.h>
//Procedimento de escrita da EEPROM
void escrever(uint16_t addres, uint8_t data){
    //Esperando por última escrita
    while(EECR & (1<<EEPE));
    //Ajustando o endereço e dados
    EEAR = addres;
    EEDR = data;
    //Habilitando modo escrita para
    EECR = EECR | (1<<EEMPE);
    //Iniciando escrita EEPROM
    EECR = EECR | (1<<EEPE);
}