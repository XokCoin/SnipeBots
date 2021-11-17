/**
 * User guide:
 * Only change the values of the inputs below, do not touch all other files except this one
 * After changing the inputs below to your liking, u can execute 4 files:
 * 1. query your balance - the console will output your wallet's FTM balance and your target token's balance every 2 seconds
 * command: node query.js
 * 
 * 2. buy target token, command: node buy.js
 * 
 * 3. sell target token, command: node sell.js
 * 
 * 4. approve target token, command: node approve.js
 * 
 * NOTES:
 * 1. It's important to fill in all relevant fields else the code won't work
 * 2. Transactions can fail so use the query to check your balance on a seperate terminal
 */

// START HERE

// your wallet's address
const WALLET_ADDRESS = '';
// your wallet's mnemonic or private key, either works, this is sensitive info so quickly remove it once you're done or create a temporary wallet
const WALLET_MNEMONIC = '';
// the address of the token u want to buy
const TARGET_TOKEN_ADDRESS = '';

// FOR BUY
// number of buy transactions u want the bot to spam on execution, put 1 if you only want to buy once
const NUMBER_OF_BUY_TRANSACTIONS = 3;
// amount of FTM you want to use to buy the target token per transaction, leave the '' around the amount (eg '10' not 10)
const FTM_AMOUNT_PER_TRANSACTION = '0.0001';
// does the token have a buy fee?
// if no, put 0
// if yes, put 1
// don't know, put 2 (bot will try both, cost double the gas fees)
const BUY_FEE_TOKEN = 0;

// FOR SELL
// number of sell transactions u want the bot to spam on execution, put 1 if you only want to sell once
const NUMBER_OF_SELL_TRANSACTIONS = 3;
// amount of tokens you want to sell per transaction, leave the '' around the amount (eg '10' not 10)
const TOKEN_AMOUNT_PER_TRANSACTION = '0.01';
// does the token have a sell fee?
// if no, put 0
// if yes, put 1
// don't know, put 2 (bot will try both, cost double the gas fees)
const SELL_FEE_TOKEN = 0;

// STOP HERE

module.exports = {
    WALLET_ADDRESS: WALLET_ADDRESS,
    WALLET_MNEMONIC: WALLET_MNEMONIC,
    TARGET_TOKEN_ADDRESS: TARGET_TOKEN_ADDRESS,
    NUMBER_OF_BUY_TRANSACTIONS: NUMBER_OF_BUY_TRANSACTIONS,
    FTM_AMOUNT_PER_TRANSACTION: FTM_AMOUNT_PER_TRANSACTION,
    BUY_FEE_TOKEN: BUY_FEE_TOKEN,
    NUMBER_OF_SELL_TRANSACTIONS: NUMBER_OF_SELL_TRANSACTIONS,
    TOKEN_AMOUNT_PER_TRANSACTION: TOKEN_AMOUNT_PER_TRANSACTION,
    SELL_FEE_TOKEN: SELL_FEE_TOKEN
};