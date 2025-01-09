function checkIncreasingOrder() {
    let n = parseInt(prompt("Quantos números você deseja inserir no vetor?"));
    let numbers = [];
    
    for (let i = 0; i < n; i++) {
        let num = parseInt(prompt(`Digite o número ${i + 1}:`));
        numbers.push(num);
    }

    let count = 0;

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > numbers[i - 1]) {
            count++;
        }
    }

    console.log(`Quantidade de números em ordem crescente: ${count}`);
}

checkIncreasingOrder();

