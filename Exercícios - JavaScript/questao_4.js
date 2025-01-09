function ConvertCurrency() {
    let reais = parseFloat(prompt("Digite o valor em reais (R$) (Insira centavos separados por ponto.):"));

    if (isNaN(reais) || reais < 0) {
        console.log("Por favor, insira um valor monetário válido.");
        return;
    }

    let conversionRates = {
        euro: 6.10,
        dollar: 5.70
    };

    let convertedValues = ConvertToCurrencies(reais, conversionRates);

    PrintConversionResults(reais, convertedValues);
}

function ConvertToCurrencies(reais, rates) {
    let euroValue = reais / rates.euro;
    let dollarValue = reais / rates.dollar;

    return {
        euro: euroValue,
        dollar: dollarValue
    };
}

function PrintConversionResults(reais, convertedValues) {
    console.log(`Valor em reais: R$${reais.toFixed(2)}`);
    console.log(`Valor em euros: €${convertedValues.euro.toFixed(2)}`);
    console.log(`Valor em dólares: US$${convertedValues.dollar.toFixed(2)}`);
}

ConvertCurrency();
