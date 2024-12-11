async function main() {
    // Obtén el primer signer (cuenta de despliegue)
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    // Obtén el saldo de la cuenta de despliegue
    const balance = await deployer.getBalance();
    console.log("Account balance:", balance.toString());

    // Reemplaza 'MyContract' con el nombre de tu contrato
    const MyContract = await ethers.getContractFactory("MyContract");
    const myContract = await MyContract.deploy();

    console.log("Contract deployed to address:", myContract.address);
}

// Ejecuta el script
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
