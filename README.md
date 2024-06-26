

## This guide will walk you through setting up your local development environment, deploying a smart contract using Hardhat, and verifying the contract on the Sepolia network.
## Postman collection :- https://drive.google.com/file/d/1DPYTgep6Bf8DLI-9O1kRnRTQnkzo4NAr/view?usp=sharing
## Live working video :- https://drive.google.com/file/d/1cvHYEs9I6rqp87eohNaNejXD-1fw_uVs/view?usp=sharing

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

2. **Clone the repository:**


  git clone https://github.com/yourusername/yourrepository.git
  cd yourrepository

  1. **Install dependencies::**

 
   npm install


  2. **Set up environment variables::**

     create a .env file in the root directory of your project and add the following variables:

 
   PRIVATE_KEY=Your Private Key 
   RPC_URL=Your RPC_UR
   CONTRACT_ADDRESS=  Your CONTRACT_ADDRESS
   ETHERSCAN_API_KEY= Your ETHERSCAN_API_KEY

 3. **Install Dependencies**

  npm install

 4. **Deploy Smart Contract:**


  npx hardhat compile

5. **Clone the repository:**


  git clone https://github.com/yourusername/yourrepository.git
  cd yourrepository

6. **Deploy the smart contract::**

 
  npx hardhat run scripts/deploy.js --network Sepolia



7. **putting the value in env file::**

 
  put the value of deployed smart contract in env file
  put the wallet  private key which will deploy the smart contract in env file 
  (the account that will deploy the smart contract will be the owner or admin  of the contract)
  







  
