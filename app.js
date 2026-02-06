/* *********************************************************************************

* Objetivo: Desenvolver uma aplicação para a empresa AlphaFlow usando o calcule de juros simples usando javascript.
* Data: 06/02/2026
* Autor: Pedro Rodrigues
* Versão: 1.0

**********************************************************************************/


// Programa para calcular o montante de uma compra com juros simples
const readline = require('readline');

const dados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


dados.question('Digite seu nome: ', function(nome) {
    // Solicitação do nome

    dados.question('Digite o nome do produto: ', function(produto) {
        // Solicitação do nome do produto

        dados.question('Digite o preço do produto: ', function(preco) {
            // Solicitação do preço do produto

            dados.question('Digite a taxa de juros (ex: 5 para 5%): ', function(taxa) {
                // Solicitação da taxa de juros

                dados.question('Digite o número de parcelas/tempo: ', function(valorTempo) {
                    // Solicitação do número de parcelas ou tempo

                    dados.question('A entrada acima é em (1) Meses ou (2) Anos? ', function(unidade) {
                       // Solicitação da unidade de tempo (Meses ou Anos)
                       
                        // 1. Verificação de campos vazios
                        if (nome == '' || produto == '' || preco == '' || taxa == '' || valorTempo == '') {
                            console.log('\nERRO: é obrigatório o preenchimento de todos os dados.');
                            dados.close();
                        } else {
                            // 2. Conversão e Cálculos
                            let p = parseFloat(preco);
                            let i = parseFloat(taxa) / 100;
                            let n = parseFloat(valorTempo);

                            // Regra de conversão: Se o usuário escolheu (2) Anos, convertemos para meses
                            if (unidade === '2') {
                                n = n * 12;
                            }

                            // Cálculo do montante e acréscimo
                            let montante = p * (1 + (i * n));
                            let acrescimo = montante - p;

                            // 3. Exibição dos resultados       
                            console.log('   ');                  
                            console.log('\n******************* [AlphaFlow] *******************');
                            console.log(`Muito obrigado por realizar a sua compra conosco Sr(a) ${nome}.`);
                            console.log(`A compra do produto ${produto}, tem um valor original de: R$ ${p.toFixed(2)}.`);
                            console.log(`O tempo total considerado foi de: ${n} meses.`);
                            console.log(`O Sr(a) pagará: R$ ${montante.toFixed(2)} no total.`);
                            console.log(`O acréscimo realizado (juros) será de R$ ${acrescimo.toFixed(2)}.`);
                            console.log(`Muito obrigado por escolher a AlphaFlow.`);
                            console.log('****************************************************');
                            
                            dados.close(); //Fechamento

                        } //calculos, e final do Processo
                    
                    }); //unidade (Meses ou Anos)
               
                }); //valorTempo
            
            }); //taxa de juros
        
        }); //preco
    
    }); //produto

}); //nome 