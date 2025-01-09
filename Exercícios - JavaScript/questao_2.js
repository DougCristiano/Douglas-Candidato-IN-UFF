function CalculateFactorial() {
    let keepRunning = true;

    while (keepRunning) {
        let number = GetPositiveInteger();

        let factorial = ComputeFactorial(number);
        console.log(`O fatorial do número ${number} é: ${factorial}`);

        keepRunning = AskToContinue();
    }
    console.log("Programa encerrado, obrigado por utilizar!");
}

function GetPositiveInteger() {
    while (true) {
        let input = prompt("Entre com um número inteiro e positivo:");
        let number = parseInt(input);

        if (!isNaN(number) && number >= 0) {
            return number;
        }
        console.log("Input inválido. Entre com número positivo.");
    }
}

function ComputeFactorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }

    let factorial = 1;
    for (let i = 2; i <= number; i++) {
        factorial *= i;
    }
    return factorial;
}

function AskToContinue() {
    while (true) {
        let response = prompt("Quer calcular outro fatorial? (s/n)").toLowerCase();

        if (response === "s") {
            return true;
        } else if (response === "n") {
            return false;
        }
        console.log("Input inválido. Digite s ou n para continuar.");
    }
}

CalculateFactorial();