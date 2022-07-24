//Definiçoes de E/S
#include <avr/io.h>
//Tipos inteiros de tamanho fixo
#include <stdint.h>
//Função de leitura da EEPROM
uint8_t ler(uint16_t addres){
    //Esperando por última escrita
    while(EECR & (1<<EEPE));
    //Ajustando o endereço
    EEAR = addres;
    //Iniciando leitura EEPROM
    EECR = EECR | (1<<EERE);
    //retornando o dado
    return EEDR;
}