const SHA256 = require('crytpo-js/sha256');

class Block {

    constructor(data) {
        this.hash = "";
        this.height = 0;
        this.body = data;
        this.time = new Date().getTime();
        this.previousblockhash = "";
    }

}

class BlockChain {

    constructor() {
        this.chain = [];
    }

    addBlock(newBlock) {

        this.chain.push(newBlock);
    }

}