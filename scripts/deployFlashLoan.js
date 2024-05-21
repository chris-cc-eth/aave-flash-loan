const hre = require("hardhat");

async function main() {
  console.log("Deploying FlashLoan...");

  // Get the contract factory
  const FlashLoan = await hre.ethers.getContractFactory("FlashLoan");

  // Deploy the contract with the required constructor argument
  const flashLoan = await FlashLoan.deploy("0x012bAC54348C0E635dCAc9D5FB99f06F24136C9A");

  // Wait for the contract to be deployed and get the transaction receipt
  const txReceipt = await flashLoan.deployTransaction.wait();

  console.log("FlashLoan deployed to:", txReceipt.contractAddress);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
