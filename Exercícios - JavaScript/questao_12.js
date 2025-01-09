function encontrarElementoUnico() {
    let nums = prompt("Digite os números separados por vírgula (ex: 4, 1, 2, 1, 2):");
    nums = nums.split(",").map(num => parseInt(num.trim()));

    let countMap = {};

    for (let i = 0; i < nums.length; i++) {
        countMap[nums[i]] = (countMap[nums[i]] || 0) + 1;
    }

    for (let key in countMap) {
        if (countMap[key] === 1) {
            console.log(`O elemento único é: ${key}`);
            return;
        }
    }
}

encontrarElementoUnico();

