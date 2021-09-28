import { EthFunctions } from "../functions/ethFunctions";

const API_KEY = "bj8tjPiKArhXkWThTd7yYnjP5yNnhIAi";
const uri = `https://eth-mainnet.alchemyapi.io/v2/${API_KEY}`;

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(uri);
let ethFunctions = EthFunctions(web3);
export const resolvers = {
    
    Query: {
        
        getTokenName: async(_: any, { address }) => {
            let tokenName = await ethFunctions.getTokenName(address);
            return tokenName;
        },

        getTokenSymbol: async(_: any, { address }) => {
            let tokenSymbol = await ethFunctions.getTokenSymbol(address);
            return tokenSymbol;
        },

        getTotalSupply: async(_: any, { address }) => {
            let totalSupply = await ethFunctions.getTotalSupply(address);
            return totalSupply.toString();
        },

        getPriceETHV2: async(_: any, { address }) => {
            let price = await ethFunctions.getPriceETHV2(address);
            return price.toString();
        },

        getPriceETHV3: async(_: any, { address }) => {
            let price = await ethFunctions.getPriceETHV3(address);
            return price.toString();
        },

        getPriceUSDV2: async(_: any, { address }) => {
            let price = await ethFunctions.getPriceUSDV2(address);
            return price.toString();
        },

        getPriceUSDV3: async(_: any, { address }) => {
            let price = await ethFunctions.getPriceUSDV3(address);
            return price.toString();
        }
    }
}