const SHA256 = require('crypto-js/sha256');
/**
 * Class and methods for Blockchain
 */
class Block {

    constructor(data) {
        this.hash = "";
        this.height = 0;
        this.body = data;
        this.time = new Date().getTime().toString().slice(0, -3);
        this.previousblockhash = "";
    }

}
/**
 * Class and methods for Blockchain
 */
class BlockChain {

    constructor() {
        this.chain = [];
        this.addBlock(new Block("First Block in the chain - Genesis Block"));
    }

    addBlock(newBlock) {

        if (this.chain.length > 0) {
            newBlock.previousblockhash = this.chain[this.chain.length - 1].hash;
            newBlock.height = this.chain.length;
        }
        newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();
        this.chain.push(newBlock);
    }

}