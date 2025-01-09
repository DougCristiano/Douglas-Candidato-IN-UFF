function customerService() {
    let queue = [];
    
    while (true) {
        console.log("\nMenu de Atendimento:");
        console.log("1 - Novo Cliente");
        console.log("2 - Atender Cliente");
        console.log("3 - Sair");
        
        let choice = prompt("Escolha uma opção (1, 2 ou 3):");

        if (choice === "1") {
            let customerName = prompt("Digite o nome do cliente:");
            queue.push(customerName);
            console.log(`${customerName} foi adicionado à fila.`);
        } 
        else if (choice === "2") {
            if (queue.length > 0) {
                let servedCustomer = queue.shift();
                console.log(`Atendendo o cliente: ${servedCustomer}`);
            } else {
                console.log("Não há clientes na fila para atender.");
            }
        } 
        else if (choice === "3") {
            console.log("Saindo do sistema de atendimento...");
            break;
        } 
        else {
            console.log("Opção inválida. Tente novamente.");
        }
        
        if (queue.length > 0) {
            console.log("\nClientes na fila:");
            queue.forEach((customer, index) => {
                console.log(`${index + 1}º ${customer}`);
            });
        } else {
            console.log("Nenhum cliente na fila.");
        }
    }
}

customerService();

