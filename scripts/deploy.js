async function main() {
  const CONTRACT = 'Garnet';

  let [deployer] = await ethers.getSigners();
  console.log(`Account ${deployer.address} deploying "${CONTRACT}"`);

  let Contract = await ethers.getContractFactory(CONTRACT);
  let contract = await Contract.deploy();
  console.log(`Contract deployed to address: ${contract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
