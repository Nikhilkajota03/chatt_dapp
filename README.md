

## This guide will walk you through setting up your local development environment, deploying a smart contract using Hardhat, and verifying the contract on the Sepolia network.


## Postman collection :-
https://drive.google.com/file/d/1DPYTgep6Bf8DLI-9O1kRnRTQnkzo4NAr/view?usp=sharing

## Live working video :- 
https://drive.google.com/file/d/1cvHYEs9I6rqp87eohNaNejXD-1fw_uVs/view?usp=sharing

## Prerequisites

Before you begin, ensure you have the following:

- Node.js (>= 14.x)
- npm (>= 6.x)
- Hardhat installed globally (`npm install -g hardhat`)
- An Alchemy account for an RPC URL
- (Optional) An Etherscan API key for contract verification

## Setup Local Development Environment

  **Clone the repository:**

  ```bash
  git clone https://github.com/Nikhilkajota03/chatt_dapp

 1. **Clone the repository:**


  git clone https://github.com/yourusername/yourrepository.git
  cd yourrepository

  2. **Install dependencies::**

 
   npm install


  3. **Set up environment variables::**

     create a .env file in the root directory of your project and add the following variables:

 
   PRIVATE_KEY=Your Private Key 
   RPC_URL=Your RPC_UR
   CONTRACT_ADDRESS=  Your CONTRACT_ADDRESS
   ETHERSCAN_API_KEY= Your ETHERSCAN_API_KEY

 4. **Install Dependencies**

  npm install

 5. **Deploy Smart Contract:**


  npx hardhat compile

6. **Clone the repository:**


  git clone https://github.com/yourusername/yourrepository.git
  cd yourrepository

7. **Deploy the smart contract::**

 
  npx hardhat run scripts/deploy.js --network Sepolia



8. **putting the value in env file::**

 
  put the value of deployed smart contract in env file
  put the wallet  private key which will deploy the smart contract in env file 
  (the account that will deploy the smart contract will be the owner or admin  of the contract)


8. **go to server folder**

  Run the command npm install and then run nodemon app.js





## APIs


Postman collection access json data  : https://drive.google.com/file/d/1DPYTgep6Bf8DLI-9O1kRnRTQnkzo4NAr/view?usp=sharing

##


1. Api For getting The message:

   ```bash
   GET    http://localhost:3000/api/v1/getMessage
   ```

2. Api For Setting the Message :

   ```bash
   POST   http://localhost:3000/api/v1/message
   ```





 

  







  
