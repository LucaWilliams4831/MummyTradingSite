import { ARBITRUM, AVALANCHE, FANTOM } from "config/chains";
import { getContract } from "config/contracts";

const FANTOM_GMX = getContract(FANTOM, "GMX");
const ARBITRUM_GMX = getContract(ARBITRUM, "GMX");
const AVALANCHE_GMX = getContract(AVALANCHE, "GMX");

type Exchange = {
  name: string;
  icon: string;
  networks: number[];
  link?: string;
  links?: { [ARBITRUM]: string; [AVALANCHE]: string, [FANTOM]: string };
};

export const EXTERNAL_LINKS = {
  [FANTOM]: {
    bungee: `https://multitx.bungee.exchange/?toChainId=43114&toTokenAddress=${FANTOM_GMX}`,
    banxa: "https://gmx.banxa.com/?coinType=AVAX&fiatType=USD&fiatAmount=500&blockchain=avalanche",
    networkWebsite: "https://www.avax.network/",
    buyGmx: {
      banxa: "https://gmx.banxa.com/?coinType=GMX&fiatType=USD&fiatAmount=500&blockchain=avalanche",
      traderjoe: `https://traderjoexyz.com/trade?outputCurrency=${FANTOM_GMX}`,
      spooky: `https://spooky.fi/#/swap?inputCurrency=0x04068DA6C83AFCFA0e13ba15A6696662335D5B75&outputCurrency=0x01e77288b38b416F972428d562454fb329350bAc`
    },
  },
  [ARBITRUM]: {
    bungee: `https://multitx.bungee.exchange/?toChainId=42161&toTokenAddress=${ARBITRUM_GMX}`,
    banxa: "https://gmx.banxa.com/?coinType=ETH&fiatType=USD&fiatAmount=500&blockchain=arbitrum",
    o3: "https://o3swap.com/",
    networkWebsite: "https://arbitrum.io/",
    buyGmx: {
      banxa: "https://gmx.banxa.com/?coinType=GMX&fiatType=USD&fiatAmount=500&blockchain=arbitrum",
      uniswap: `https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=${ARBITRUM_GMX}`,
    },
  },
  [AVALANCHE]: {
    bungee: `https://multitx.bungee.exchange/?toChainId=43114&toTokenAddress=${AVALANCHE_GMX}`,
    banxa: "https://gmx.banxa.com/?coinType=AVAX&fiatType=USD&fiatAmount=500&blockchain=avalanche",
    networkWebsite: "https://www.avax.network/",
    buyGmx: {
      banxa: "https://gmx.banxa.com/?coinType=GMX&fiatType=USD&fiatAmount=500&blockchain=avalanche",
      traderjoe: `https://traderjoexyz.com/trade?outputCurrency=${AVALANCHE_GMX}`,
    },
  },
};

export const TRANSFER_EXCHANGES: Exchange[] = [
  {
    name: "Binance",
    icon: "ic_binance.svg",
    networks: [ARBITRUM, AVALANCHE],
    link: "https://www.binance.com/en/trade/",
  },
  {
    name: "Synapse",
    icon: "ic_synapse.svg",
    networks: [ARBITRUM, AVALANCHE],
    link: "https://synapseprotocol.com/",
  },
  {
    name: "Arbitrum",
    icon: "ic_arbitrum_24.svg",
    networks: [ARBITRUM],
    link: "https://bridge.arbitrum.io/",
  },
  {
    name: "Avalanche",
    icon: "ic_avax_30.svg",
    networks: [AVALANCHE],
    link: "https://bridge.avax.network/",
  },
  {
    name: "Hop",
    icon: "ic_hop.svg",
    networks: [ARBITRUM],
    link: "https://app.hop.exchange/send?token=ETH&sourceNetwork=ethereum&destNetwork=arbitrum",
  },
  {
    name: "Bungee",
    icon: "ic_bungee.png",
    networks: [ARBITRUM, AVALANCHE],
    link: "https://multitx.bungee.exchange",
  },
  {
    name: "Multiswap",
    icon: "ic_multiswap.svg",
    networks: [ARBITRUM, AVALANCHE],
    link: "https://app.multichain.org/#/router",
  },
  {
    name: "O3",
    icon: "ic_o3.png",
    networks: [ARBITRUM, AVALANCHE],
    link: "https://o3swap.com/",
  },
  {
    name: "Across",
    icon: "ic_across.svg",
    networks: [ARBITRUM],
    link: "https://across.to/",
  },
];

export const CENTRALISED_EXCHANGES: Exchange[] = [
  {
    name: "Binance",
    icon: "ic_binance.svg",
    link: "https://www.binance.com/en/trade/GMX_USDT?_from=markets",
    networks: [ARBITRUM, AVALANCHE],
  },
  {
    name: "Bybit",
    icon: "ic_bybit.svg",
    link: "https://www.bybit.com/en-US/trade/spot/GMX/USDT",
    networks: [ARBITRUM, AVALANCHE],
  },
  {
    name: "Kucoin",
    icon: "ic_kucoin.svg",
    link: "https://www.kucoin.com/trade/GMX-USDT",
    networks: [ARBITRUM, AVALANCHE],
  },
  {
    name: "Huobi",
    icon: "ic_huobi.svg",
    link: "https://www.huobi.com/en-us/exchange/gmx_usdt/",
    networks: [ARBITRUM, AVALANCHE],
  },
];

export const DECENTRALISED_AGGRIGATORS: Exchange[] = [
  // {
  //   name: "1inch",
  //   icon: "ic_1inch.svg",
  //   links: {
  //     [ARBITRUM]: "https://app.1inch.io/#/42161/unified/swap/ETH/GMX",
  //     [AVALANCHE]: "https://app.1inch.io/#/43114/unified/swap/AVAX/GMX",
  //   },
  //   networks: [ARBITRUM, AVALANCHE],
  // },
  {
    name: "Firebird",
    icon: "ic_firebird.png",
    link: "https://app.firebird.finance/swap?inputCurrency=ETH&outputCurrency=0x01e77288b38b416F972428d562454fb329350bAc",
    networks: [FANTOM],
  },
  // {
  //   name: "OpenOcean",
  //   icon: "ic_openocean.svg",
  //   link: "https://app.openocean.finance/CLASSIC#/FANTOM/MMY/USDC",
  //   networks: [FANTOM],
  // },
  {
    name: "KyberSwap",
    icon: "ic_kyber.svg",
    link: "https://kyberswap.com/swap/fantom/usdc-to-mmy",
    networks: [FANTOM],
  },
  
  {
    name: "Odos",
    icon: "ic_odos.png",
    link: "https://app.odos.xyz/",
    networks: [ARBITRUM],
  },
  {
    name: "Slingshot",
    icon: "ic_slingshot.svg",
    link: "https://app.slingshot.finance/swap/ETH",
    networks: [ARBITRUM],
  },
  {
    name: "Yieldyak",
    icon: "ic_yield_yak.png",
    link: "https://yieldyak.com/swap",
    networks: [AVALANCHE],
  },
];
