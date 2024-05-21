# Aave Flashloan Arbitrage

This project serves as a case study on utilizing Aave v3 flash loans for arbitrage opportunities.

## Project Structure

- **`contracts/`**: Contains the Solidity contracts for the project.

  - `FlashLoan.sol`: Implements the flash loan functionality.
  - `Dex.sol`: Provides a basic artificial Dex contract for testing arbitrage on a decentralized exchange (dex).
  - `FlashLoanArbitrage.sol`: Demonstrates flash loans while performing arbitrage on a dex.

- **`scripts/`**: Includes deployment scripts for the contracts.

  - `deployFlashLoan.js`: Script to deploy the `FlashLoan` contract.

- **`test/`**: Directory for test files (please add more details if additional test files exist).

- **`artifacts/`**: Contains build artifacts and contract ABIs.

- **`hardhat.config.js`**: Configuration file for the Hardhat development environment.

- **`package.json`**: Lists the project dependencies.

## Setup

1. **Install Dependencies**:

   ```sh
   npm install

   ```

2. Environment Variables: Create a .env file in the root directory and add the necessary environment variables (specify the required variables).

3. Compile Contracts: Compile the contracts using the following command:

```sh
npx hardhat compile
```

4. Deploy Contracts: Due to deployment issues with scripts, consider using Remix for deploying and testing.
