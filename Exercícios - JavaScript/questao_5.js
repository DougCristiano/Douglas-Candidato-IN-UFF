function CheckFizzBuzz() {
    let number = parseInt(prompt("Digite um número inteiro:"));

    if (isNaN(number)) {
        console.log("Por favor, insira um número inteiro válido.");
        return;
    }

    let result = GetFizzBuzzResult(number);

    if (result) {
        console.log(result);
    }
}

function GetFizzBuzzResult(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "fizzbuzz";
    } else if (number % 3 === 0) {
        return "fizz";
    } else if (number % 5 === 0) {
        return "buzz";
    } else {
        return null; 
    }
}

CheckFizzBuzz();
