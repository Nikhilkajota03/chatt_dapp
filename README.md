

## This guide will walk you through setting up your local development environment, deploying a smart contract using Hardhat, and verifying the contract on the Sepolia network.

## Prerequisites

Before you begin, ensure you have the following:

- Node.js (>= 14.x)
- npm (>= 6.x)
- Hardhat installed globally (`npm install -g hardhat`)
- An Alchemy account for an RPC URL
- (Optional) An Etherscan API key for contract verification

## Setup Local Development Environment

1. **Clone the repository:**

  ```bash
  git clone https://github.com/Nikhilkajota03/chatt_dapp
  cd yourrepository

2. **Clone the repository:**

  ```bash
  git clone https://github.com/yourusername/yourrepository.git
  cd yourrepository

  1. **Install dependencies::**

  ```bash
   npm install


  2. **Set up environment variables::**
     create a .env file in the root directory of your project and add the following variables:

  ```bash
   PRIVATE_KEY=Your Private Key 
   RPC_URL=Your RPC_UR
   CONTRACT_ADDRESS=  Your CONTRACT_ADDRESS
   ETHERSCAN_API_KEY= Your ETHERSCAN_API_KEY

  3. **Install Dependencies**

  ```bash
  npm install

 4. **Deploy Smart Contract:**

  ```bash
  npx hardhat compile

  5. **Clone the repository:**

  ```bash
  git clone https://github.com/yourusername/yourrepository.git
  cd yourrepository

  6. **Deploy the smart contract::**

  ```bash
  npx hardhat run scripts/deploy.js --network Sepolia
  

  
