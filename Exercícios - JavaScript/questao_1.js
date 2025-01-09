function QuadraticEquation() {

    let coefficientA = parseFloat(prompt("Entre com o coeficiente a:"));
    let coefficientB = parseFloat(prompt("Entre com o coeficiente b:"));
    let coefficientC = parseFloat(prompt("Entre com o coeficiente c:"));


    if (coefficientA === 0) {
        console.log("Coeficiente 'a' precisa ser diferente de 0 em uma equação quadrática.");
        return;
    }

    let discriminant = CalculateDiscriminant(coefficientA, coefficientB, coefficientC);
    console.log(`O valor de Δ (discriminante) é: ${discriminant}`);

    EvaluateRoots(discriminant, coefficientA, coefficientB);
}

function CalculateDiscriminant(a, b, c) {
    return (b**2) - 4 * a * c;
}

function EvaluateRoots(discriminant, a, b) {
    if (discriminant > 0) {
        let root1 = (-b + (discriminant)**0.5) / (2 * a);
        let root2 = (-b - (discriminant)**0.5) / (2 * a);
        console.log(`A equação possui duas raízes reais e distintas: x1 = ${root1}, x2 = ${root2}`);
    } else if (discriminant === 0) {
        let singleRoot = -b / (2 * a);
        console.log(`A equação possui duas raízes reais e iguais: x = ${singleRoot}`);
    } else {
        console.log("A equação não possui raiz real.");
    }
}
QuadraticEquation();
