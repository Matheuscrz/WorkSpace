// asm ( código : operandos de saída : operandos deentrada [: registradores modificados ]);
asm ( " in ␣ %0 , ␣ %1 " : " = r " ( value ) :" I " ( _SFR_IO_ADDR ( PORTD ) ) ) ;
asm volatile ( "cli" "\n\t" " ld ␣ r24 , ␣ % a0 " " \n \t " " inc ␣ r24 " " \n \t "
    " st ␣ % a0 , ␣ r24 " " \n \t " " sei " " \n\t " : : " e "( ptr ) : " r24 ");
//asm ( código : operandos de saída : operandos de entrada [: registradores modificados ]);
asm ( " in ␣ %0 , ␣ %1 " : " = r " ( value ) :" I " ( _SFR_IO_ADDR ( PORTD ) ) ) ;
asm volatile("cli" "\n\t" " ld ␣ r24 , ␣ % a0 " " \n \t " " inc ␣ r24 " " \n \t "
    " st ␣ % a0 , ␣ r24 " " \n \t " " sei " " \n\t " : : " e "( ptr ) : " r24 ");
    