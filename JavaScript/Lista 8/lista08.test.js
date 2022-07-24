const {log} = require('./utils.js')
const T = require('./test.js')
const S = require('./lista08.js')

/**
 * CASOS DE TESTE
 */
T.assert(S.tamanho('shipment'),8,'tamanho')
T.assert(S.tamanho('apple'),5,'tamanho')
T.assert(S.tamanho('make'),4,'tamanho')
T.assert(S.tamanho('a'),1,'tamanho')
T.assert(S.tamanho(''),0,'tamanho') 
log('---')
T.assert(S.busca([1, 2, 3, 4],3), 2,'busca')
T.assert(S.busca([2, 4, 6, 8, 10], 8), 3,'busca')
T.assert(S.busca([1, 3, 5, 7, 9], 11), -1,'busca')
T.assert(S.busca([1, 5, 7, 11, 25, 100, 200, 350], 5), 1,'busca')
log('---')
T.assert(S.multiSoma(1), 55,'multiSoma')
T.assert(S.multiSoma(2), 110,'multiSoma')
T.assert(S.multiSoma(3), 165,'multiSoma')
T.assert(S.multiSoma(4), 220,'multiSoma')
T.assert(S.multiSoma(5), 275,'multiSoma')
T.assert(S.multiSoma(6), 330,'multiSoma')
T.assert(S.multiSoma(7), 385,'multiSoma')
T.assert(S.multiSoma(8), 440,'multiSoma')
T.assert(S.multiSoma(9), 495,'multiSoma')
T.assert(S.multiSoma(10), 550,'multiSoma')
log('---')
T.assert(S.inverte("hello"), "olleh",'inverte')
T.assert(S.inverte("world"), "dlrow",'inverte')
T.assert(S.inverte("a"), "a",'inverte')
T.assert(S.inverte(""), "",'inverte')
log('---')
T.assert(S.soma(1), 1,'soma')
T.assert(S.soma(5), 15,'soma')
T.assert(S.soma(7), 28,'soma')
T.assert(S.soma(10), 55,'soma')
T.assert(S.soma(12), 78,'soma')
T.assert(S.soma(15), 120,'soma')
T.assert(S.soma(20), 210,'soma')
T.assert(S.soma(100), 5050,'soma')
log('---')
T.assert(S.somaAte(4), 10,'somaAte')
T.assert(S.somaAte(13), 91,'somaAte')
T.assert(S.somaAte(600), 180300,'somaAte')
T.assert(S.somaAte(392), 77028,'somaAte')
T.assert(S.somaAte(53), 1431,'somaAte')
T.assert(S.somaAte(897), 402753,'somaAte')
T.assert(S.somaAte(23), 276,'somaAte')
T.assert(S.somaAte(1000), 500500,'somaAte')
T.assert(S.somaAte(738), 272691,'somaAte')
T.assert(S.somaAte(100), 5050,'somaAte')
T.assert(S.somaAte(925), 428275,'somaAte')
T.assert(S.somaAte(1), 1,'somaAte')
T.assert(S.somaAte(999), 499500,'somaAte')
T.assert(S.somaAte(175), 15400,'somaAte')
T.assert(S.somaAte(111), 6216,'somaAte')
log('---')
T.assert(S.somaQuadrados(3), 14,'somaQuadrados')
T.assert(S.somaQuadrados(10), 385,'somaQuadrados')
T.assert(S.somaQuadrados(12), 650,'somaQuadrados')
T.assert(S.somaQuadrados(5), 55,'somaQuadrados')
T.assert(S.somaQuadrados(9), 285,'somaQuadrados')
T.assert(S.somaQuadrados(11), 506,'somaQuadrados')
T.assert(S.somaQuadrados(15), 1240,'somaQuadrados')
log('---')
T.assert(S.repita("soccer", 2), "soccersoccer",'repita')
T.assert(S.repita("ab", 3), "ababab",'repita')
T.assert(S.repita("bonita", 1), "bonita",'repita')
T.assert(S.repita("ciao", 4), "ciaociaociaociao",'repita')
T.assert(S.repita("amigo", 5), "amigoamigoamigoamigoamigo",'repita')
T.assert(S.repita("torque", 2), "torquetorque",'repita')
log('---')
T.assert(S.caminhos(1), 1,'caminhos')
T.assert(S.caminhos(2), 2,'caminhos')
T.assert(S.caminhos(3), 6,'caminhos')
T.assert(S.caminhos(4), 24,'caminhos')
T.assert(S.caminhos(5), 120,'caminhos')
T.assert(S.caminhos(6), 720,'caminhos')
T.assert(S.caminhos(7), 5040,'caminhos')
T.assert(S.caminhos(8), 40320,'caminhos')
log('---')
T.assert(S.maior([6,7,8]), 8,'maior')
T.assert(S.maior([-1, 3, 5, 6, 99, 12, 2]), 99,'maior')
T.assert(S.maior([0, 12, 4, 87]), 87,'maior')
log('---')
T.assert(S.dec2(2)(10), "1010",'dec2')
T.assert(S.dec2(8)(1642), "3152",'dec2')
T.assert(S.dec2(2)(102), "1100110",'dec2')
T.assert(S.dec2(16)(212), "d4",'dec2')
T.assert(S.dec2(2)(18), "10010",'dec2')
T.assert(S.dec2(16)(3162), "c5a",'dec2')
T.assert(S.dec2(8)(10), "12",'dec2')
T.assert(S.dec2(8)(162), "242",'dec2')
T.assert(S.dec2(2)(27), "11011",'dec2')
T.assert(S.dec2(16)(4321), "10e1",'dec2')
T.assert(S.dec2(16)(1622), "656",'dec2')
log('---')
T.assert(S.somaAninhado([1, 2, 3]), 6,'somaAninhado')
T.assert(S.somaAninhado([1, [1, 2], [3, 1]]), 8,'somaAninhado')
T.assert(S.somaAninhado([[1, 1], [2, 8], 8]), 20,'somaAninhado')
T.assert(S.somaAninhado([1, 2]), 3,'somaAninhado')
T.assert(S.somaAninhado([1, [2, [1]], 3]), 7,'somaAninhado')
log('---')
T.assert(S.collatz(2), 1,'collatz')
T.assert(S.collatz(3), 7,'collatz')
T.assert(S.collatz(10), 6,'collatz')
T.assert(S.collatz(6), 8,'collatz')
T.assert(S.collatz(345), 125,'collatz')
T.assert(S.collatz(72), 22,'collatz')
log('---')
T.assert(S.palindromo("abcba"), true,'palindromo')
T.assert(S.palindromo("abbba"), true,'palindromo')
T.assert(S.palindromo("abbbba"), true,'palindromo')
T.assert(S.palindromo("abccdba"), false,'palindromo')
T.assert(S.palindromo("abbaa"), false,'palindromo')
T.assert(S.palindromo("abbbbb"), false,'palindromo')
T.assert(S.palindromo("ad"), false,'palindromo')
T.assert(S.palindromo("b"), true,'palindromo')
T.assert(S.palindromo(""), true,'palindromo')
log('---')
T.assert(S.vogais("apple"), 2,'vogais')
T.assert(S.vogais("cheesecake"), 5,'vogais')
T.assert(S.vogais("martini"), 3,'vogais')
T.assert(S.vogais("rhythm"), 0,'vogais')
T.assert(S.vogais(""), 0,'vogais')
T.assert(S.vogais("b"), 0,'vogais')
T.assert(S.vogais("a"), 1,'vogais')
T.assert(S.vogais("bbbbbb"), 0,'vogais')
T.assert(S.vogais("bbbbba"), 1,'vogais')
T.assert(S.vogais("abbbb"), 1,'vogais')
T.assert(S.vogais("bbbab"), 1,'vogais')
T.assert(S.vogais("bbaab"), 2,'vogais')
T.assert(S.vogais("baabab"), 3,'vogais')
log('---')
T.assert(S.eliminaIntExc("What went wrong?????????"), "What went wrong?",'eliminaIntExc')
T.assert(S.eliminaIntExc("Oh my goodness!!!"), "Oh my goodness!",'eliminaIntExc')
T.assert(S.eliminaIntExc("WHAT!"), "WHAT!",'eliminaIntExc')
T.assert(S.eliminaIntExc("WHAT?"), "WHAT?",'eliminaIntExc')
T.assert(S.eliminaIntExc("Oh my goodness!"), "Oh my goodness!",'eliminaIntExc')
T.assert(S.eliminaIntExc("I just cannot believe it."), "I just cannot believe it.",'eliminaIntExc')
T.assert(S.eliminaIntExc("I just!!! can!!! not!!! believe!!! it!!!"), "I just!!! can!!! not!!! believe!!! it!",'eliminaIntExc')
T.assert(S.eliminaIntExc("That's a ton!! of cheese!!!!"), "That's a ton!! of cheese!",'eliminaIntExc')
log('---')
T.assert(S.ndigitospermut(0), 1,'ndigitospermut')
T.assert(S.ndigitospermut(1), 1,'ndigitospermut')
T.assert(S.ndigitospermut(2), 1,'ndigitospermut')
T.assert(S.ndigitospermut(3), 1,'ndigitospermut')
T.assert(S.ndigitospermut(4), 2,'ndigitospermut')
T.assert(S.ndigitospermut(5), 3,'ndigitospermut')
T.assert(S.ndigitospermut(6), 3,'ndigitospermut')
T.assert(S.ndigitospermut(7), 4,'ndigitospermut')
T.assert(S.ndigitospermut(8), 5,'ndigitospermut')
T.assert(S.ndigitospermut(9), 6,'ndigitospermut')
T.assert(S.ndigitospermut(10), 7,'ndigitospermut')
T.assert(S.ndigitospermut(11), 8,'ndigitospermut')
T.assert(S.ndigitospermut(12), 9,'ndigitospermut')
T.assert(S.ndigitospermut(13), 10,'ndigitospermut')
T.assert(S.ndigitospermut(14), 11,'ndigitospermut')
T.assert(S.ndigitospermut(15), 13,'ndigitospermut')
T.assert(S.ndigitospermut(16), 14,'ndigitospermut')
T.assert(S.ndigitospermut(17), 15,'ndigitospermut')
T.assert(S.ndigitospermut(18), 16,'ndigitospermut')
T.assert(S.ndigitospermut(19), 18,'ndigitospermut')
T.assert(S.ndigitospermut(25), 26,'ndigitospermut')
T.assert(S.ndigitospermut(50), 65,'ndigitospermut')
T.assert(S.ndigitospermut(75), 110,'ndigitospermut')
T.assert(S.ndigitospermut(100), 158,'ndigitospermut')
T.assert(S.ndigitospermut(125), 210,'ndigitospermut')
T.assert(S.ndigitospermut(150), 263,'ndigitospermut')
log('---')
T.assert(S.deslocaDir(3)(80), 10,'deslocaDir')
T.assert(S.deslocaDir(2)(-24), -6,'deslocaDir')
T.assert(S.deslocaDir(1)(-5), -3,'deslocaDir')
T.assert(S.deslocaDir(0)(38), 38,'deslocaDir')
T.assert(S.deslocaDir(4)(192), 12,'deslocaDir')
T.assert(S.deslocaDir(6)(4666), 72,'deslocaDir')
T.assert(S.deslocaDir(6)(3777), 59,'deslocaDir')
T.assert(S.deslocaDir(5)(1024), 32,'deslocaDir')
T.assert(S.deslocaDir(10)(-512), -1,'deslocaDir')
T.checkRecursion(S.deslocaDir)
T.checkOp(S.deslocaDir)('>>')
log('---')