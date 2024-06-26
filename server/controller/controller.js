import { ethers } from "ethers";

const contractABI = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "initialMessage",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "admin",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getMessage",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "message",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "newMessage",
        "type": "string"
      }
    ],
    "name": "setMessage",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

const contractAddress = "0xD6f062d15D2c96FAFD6A49eeaA4155a2F4073225";

const provider = new ethers.providers.JsonRpcProvider(
  "https://arb-sepolia.g.alchemy.com/v2/RtF9vLf5K7Rj_MKXoLx1EhAa4Cc3rq5N"
);
const wallet = new ethers.Wallet(
  "ca79776cf9943f1f65f84896683f7773c5c7a8c540d5ebe6fdd5a574dede6f89",
  provider
);

const contract = new ethers.Contract(contractAddress, contractABI, wallet);

export const addMessage = async (req, res) => {

  try {
    const { message } = req.body;

    console.log(message)

    const tx = await contract.setMessage(message);
    await tx.wait();
    res.status(200).send("Message stored successfully");
  } catch (error) {
    res.status(500).send(error.toString());
  }
};

export const getMessage = async (req, res) => {
  try {



    const message = await contract.getMessage();
    res.status(200).json({ message });
  } catch (error) {
    res.status(500).send(error.toString());
  }
};
