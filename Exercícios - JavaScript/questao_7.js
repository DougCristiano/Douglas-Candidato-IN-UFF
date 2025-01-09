function CheckPalindrome() {
    let phrase = prompt("Digite uma frase para verificar se é um palíndromo:");

    if (!phrase) {
        console.log("Por favor, insira uma frase válida.");
        return;
    }

    let cleanedPhrase = CleanPhrase(phrase);

    if (IsPalindrome(cleanedPhrase)) {
        console.log(`A frase "${phrase}" é um palíndromo.`);
    } else {
        console.log(`A frase "${phrase}" não é um palíndromo.`);
    }
}

function CleanPhrase(phrase) {
    return phrase
        .toLowerCase()
        .replace(/\s+/g, "")
}

function IsPalindrome(cleanedPhrase) {
    let reversedPhrase = cleanedPhrase.split("").reverse().join("");
    return cleanedPhrase === reversedPhrase;
}

CheckPalindrome();
