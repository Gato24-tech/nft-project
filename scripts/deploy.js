async function main() {
    // Obtén el primer signer (cuenta de despliegue)
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    // Obtén el saldo de la cuenta de despliegue
    const balance = await deployer.getBalance();
    console.log("Account balance:", balance.toString());

    // Define el tiempo de desbloqueo (1 semana desde ahora)
    const unlockTime = Math.floor(Date.now() / 1000) + 7 * 24 * 60 * 60;

    // Obtén la fábrica del contrato
    const Lock = await ethers.getContractFactory("Lock");

    // Despliega el contrato, pasando el argumento unlockTime
    const Lockins = await Lock.deploy(unlockTime);

    console.log("Contract deployed to address:", Lockins.address);
}

// Ejecuta el script
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
