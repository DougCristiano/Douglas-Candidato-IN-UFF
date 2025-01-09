function StartFibonacciProgram() {
    let terms = parseInt(prompt("Digite um número inteiro positivo para a sequência de Fibonacci:"));

    if (isNaN(terms) || terms <= 0) {
        console.log("Por favor, insira um número inteiro positivo válido.");
        return;
    }

    let fibonacciSequence = GenerateFibonacciSequence(terms);
    console.log(`Os ${terms} primeiros termos da sequência de Fibonacci são: ${fibonacciSequence.join(", ")}`);
}

function GenerateFibonacciSequence(n) {
    let sequence = [];

    for (let i = 0; i < n; i++) {
        sequence.push(Fibonacci(i));
    }

    return sequence;
}

function Fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return Fibonacci(n - 1) + Fibonacci(n - 2);
    }
}

StartFibonacciProgram();
