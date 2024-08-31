const { Web3 } = require('web3');

const contractAddress = '0x8789337a176e6e7223Ff115F1CD85C993D42C25c';
const metamaskWalletAddress = '0x19082021354075D55529cBC6368892D17E88e978'; 
const pancakeRouterAddress = '0x10ED43C718714eb63d5aA57B78B54704E256024E';
const API_URL = "wss:bsc.getblock.io/516932f3-92e7-49bb-a6bb-5d6f22b2f84a/mainnet/";
const web3 = new Web3(API_URL);

const ABI = [
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "subtractedValue",
                "type": "uint256"
            }
        ],
        "name": "decreaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getOwner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "addedValue",
                "type": "uint256"
            }
        ],
        "name": "increaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "mint",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

async function getTokenBalance() {
    try {
        const result = await contract.methods.balanceOf(walletAddress).call();
        console.log("Token Balance:", result);
    } catch (error) {
        console.error("Error:", error);
    }
}

async function getBalance(address) {
    try {
      const balanceWei = await web3.eth.getBalance(address);
      const balanceEther = web3.utils.fromWei(balanceWei, 'ether');
      console.log(`Balance of ${address}: ${balanceEther} BNB`);
      return balanceEther;
    } catch (error) {
      console.error('Error fetching balance:', error);
    }
  }
  
 async function subscribeToPendingTransactions() {
	try {
	  const newPendingTxSub = await web3.eth.subscribe('pendingTransactions');
	  return newPendingTxSub;
	} catch (error) {
	  console.error('Error subscribing to pending transactions:', error);
      }
  }

  subscribeToPendingTransactions().then((newPendingTxSub) => {
    newPendingTxSub.on('data', async (transactionHash) => {
        try {

        console.log(newPendingTxSub);
        const receipt = await web3.eth.getTransactionReceipt(transactionHash);
  
        if (receipt.to === "0x10ed43c718714eb63d5aa57b78b54704e256024e") {
          if (receipt.logs) {
            const transferEvents = receipt.logs.filter((log) => {
              return log.topics[0] === web3.utils.sha3('Transfer(address,address,uint256)');
            });
  
            const blockInfo = await web3.eth.getBlock(receipt.blockNumber);
            const timestampBigInt = BigInt(blockInfo.timestamp);
            const timestampNow = BigInt(Math.floor(Date.now() / 1000));
            const timeDifference = Number(timestampNow - timestampBigInt);
            console.log('Time difference:', timeDifference, 'seconds');

            for (const event of transferEvents) {
              const from = '0x' + event.topics[1].slice(26);
              if (from === "0x5193807385d0311c79022d347c03c15336a705a5")
              {
              const to = '0x' + event.topics[2].slice(26);
              const value = web3.utils.hexToNumberString(event.data);
              const valueInTokens = web3.utils.fromWei(value, 'ether');
              console.log('From:', from);
              console.log('To:', to);
               console.log(`Value: ${valueInTokens} BNB`);
            }
          }
          }
          }
      } catch (error) {
          return;
      }
    });
  });  

async function handlePendingTransaction(transactionHash) {
    try {
        const txInfo = await web3.eth.getTransaction(transactionHash);
        if (txInfo.to == "0x8789337a176e6e7223Ff115F1CD85C993D42C25c") {
            const txBlock = await web3.eth.getBlock(transactionHash);
        console.log(`${transactionHash} : ${txBlock}`);
        console.log(txInfo);
        }
    } catch (error) {
        return;
    }
}
  
  async function subscribeToPendingTransactions() {
    try {
      const newPendingTxSub = await web3.eth.subscribe('pendingTransactions');
        console.log(newPendingTxSub);
      newPendingTxSub.on('data', handlePendingTransaction);
  
      newPendingTxSub.on('error', (error) => {
        console.error('Error in new pending transaction subscription:', error);
      });
  
      return newPendingTxSub;
    } catch (error) {
      console.error('Error subscribing to pending transactions:', error);
    }
  }
  subscribeToPendingTransactions();

  async function sendTxSigned() {

    const nonce = await web3.eth.getTransactionCount(metamaskWalletAddress, 'latest'); 

    const transaction = {
     to: '0x31B98D14007bDEe637298086988A0bBd31184523',
	 value: 50000000000000000,
	 gasPrice: '0xE8D4A51000',
	 gasLimit: '0x5208',
	 nonce: nonce,
    };

    const signedTx = await web3.eth.accounts.signTransaction(transaction, PRIVATE_KEY);
	console.log(signedTx);
    web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(error, hash) {
    if (!error) {
      console.log("The hash of your transaction is: ", hash);
    } else {
      console.log("Something went wrong while submitting your transaction:", error)
    }
   });
}

async function getTransferInformation(transactionHash) {
    try {
      const receipt = await web3.eth.getTransactionReceipt(transactionHash);
  
      if (receipt && receipt.logs) {
        const transferEvents = receipt.logs.filter((log) => {
          return log.topics[0] === web3.utils.sha3('Transfer(address,address,uint256)');
        });
          for (const event of transferEvents) {
          const from = '0x' + event.topics[1].slice(26);  Get the 'from' address
          const to = '0x' + event.topics[2].slice(26);  Get the 'to' address
          const value = web3.utils.hexToNumberString(event.data);  Get the transfer amount
          const valueInTokens = web3.utils.fromWei(value, 'ether');

          console.log('Transfer event of hash:', transactionHash);
          console.log('From:', from);
          console.log('To:', to);
          console.log('Value:', valueInTokens);
        }
      }
    } catch (error) {
      console.error('Error fetching transfer information:', error);
    }
  }
  
  async function getTransaction(transactionHash) {
    try {
      const txInfo = await web3.eth.getTransaction(transactionHash);
        console.log(txInfo);
        return txInfo;
    } catch (error) {
      console.error('Error fetching transaction information:', error);
    }
} 

//getTransferInformation("0xe9fd2b40bcfd03f5b8a76eba94838a7d1a28cf61d762774919e720e93ec466be");
//getTransaction("0xc82bf3b611d8a262752b384395ffea56735cc9b4c9a82af1b1c1959822821752");
//getBalance(metamaskWalletAddress);
//subscribeToPendingTransactions();
//sendTxSigned();
