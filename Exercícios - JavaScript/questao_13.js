let team = [];

function adicionarJogador() {
    let addMore = true;
    
    while (addMore) {
        let name = prompt("Digite o nome do jogador:");
        let age = parseInt(prompt("Digite a idade do jogador:"));
        let position = prompt("Digite a posição do jogador:");
        let score = parseInt(prompt("Digite a pontuação do jogador:"));

        let player = {
            name: name,
            age: age,
            position: position,
            score: score
        };

        team.push(player);
        console.log("Jogador adicionado com sucesso!");


        let continueAdding = prompt("Deseja adicionar outro jogador? (S para sim / N para não)").toLowerCase();
        
        if (continueAdding !== 's') {
            addMore = false;
        }
    }
}

function buscarPorPosicao() {
    let position = prompt("Digite a posição do jogador que deseja buscar:");

    let playersInPosition = team.filter(player => player.position.toLowerCase() === position.toLowerCase());

    if (playersInPosition.length > 0) {
        console.log("Jogadores encontrados:");
        playersInPosition.forEach(player => {
            console.log(`Nome: ${player.name}, Idade: ${player.age}, Pontuação: ${player.score}`);
        });
    } else {
        console.log("Nenhum jogador encontrado para essa posição.");
    }
}

adicionarJogador();
buscarPorPosicao();

