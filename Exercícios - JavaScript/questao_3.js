function CheckAges() {
    let currentYear = parseInt(prompt("Digite o ano atual:"));

    if (isNaN(currentYear) || currentYear <= 0) {
        console.log("Por favor, insira um ano válido.");
        return;
    }

    let birthYears = prompt("Digite os anos de nascimento, separados por vírgula:")
        .split(",")
        .map(year => parseInt(year.trim()));

    if (birthYears.some(isNaN)) {
        console.log("Por favor, insira anos de nascimento válidos.");
        return;
    }

    let ageStatus = verificarIdades(birthYears, currentYear);

    PrintAgeResults(ageStatus);
}

function verificarIdades(birthYears, currentYear) {
    let statuses = [];

    for (let i = 0; i < birthYears.length; i++) {
        let age = currentYear - birthYears[i];

        if (age >= 18) {
            statuses.push("maior");
        } else {
            statuses.push("menor");
        }
    }

    return statuses;
}

function PrintAgeResults(statuses) {
    for (let i = 0; i < statuses.length; i++) {
        console.log(`Pessoa ${i + 1}: ${statuses[i] === "maior" ? "Maior de idade" : "Menor de idade"}`);
    }
}

CheckAges();
