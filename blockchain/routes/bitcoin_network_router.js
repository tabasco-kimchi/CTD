const express = require('express');
const router = express.Router();

let client; 
// include connection object


/* GET */
router.get('/connect', async (req, res, next) =>{
    try{
        
        if(!client){
            let RpcClient=require('bitcoind-rpc-client');
            client=new RpcClient(
                {
                    user:"test",
                    pass:"test",
                    host:"127.0.0.1",
                    port:12345
                }
            );
        }
        

        let blockNumber=await client.getBlockCount();
        console.log(blockNumber);
        let balance1=await client.getBalance('acc1');
        console.log(balance1);
        let balance2=await client.getBalance('acc2');
        console.log(balance2);

        let result={
            "blockNumber":blockNumber.result,
            "acc1_balance":balance1.result,
            "acc2_balance":balance2.result
        }

        console.log(result);

        res.json(result);
    }catch(e){
        console.log(e);
        res.json({"msg":"fail"});
    }
});
  

/* POST */
router.post('/send', async (req, res, next) =>{
    try{
        let RpcClient=require('bitcoind-rpc-client');
        if(!client){
            res.json({'msg':'please connect...'});
            return;
        }
        
        let re=await client.move('acc1','acc2',req.body.amount);
        console.log(re);
        let re2=await client.generate(1);
        console.log(re2);
        let blockNumber=await client.getBlockCount();
        console.log(blockNumber);
        let balance1=await client.getBalance('acc1');
        console.log(balance1);
        let balance2=await client.getBalance('acc2');
        console.log(balance2);

        let result={
            "blockNumber":blockNumber.result,
            "acc1_balance":balance1.result,
            "acc2_balance":balance2.result
        }

        console.log(result);

        res.json(result);
    }catch(e){
        console.log(e);
        res.json({"msg":"fail"});
    }
});

// send2 .. post met 

router.post('/send2', async (req, res, next) =>{
    try{
        let RpcClient=require('bitcoind-rpc-client');
        if(!client){
            res.json({'msg':'please connect.....................'})
            return;
        }

        let re=await client.move('acc2','acc1',req.body.amount);
        console.log(re);
        let re2=await client.generate(1);
        console.log(re2);
        let blockNumber=await client.getBlockCount();
        console.log(blockNumber);
        let balance2=await client.getBalance('acc2');
        console.log(balance2);
        let balance1=await client.getBalance('acc1');
        console.log(balance1);

        let result={
            "blockNumber":blockNumber.result,
            "acc2_balance":balance2.result,
            "acc1_balance":balance1.result
        }

        console.log(result);

        res.json(result);
    }catch(e){
        console.log(e);
        res.json({"msg":"fail"});
    }
    });


module.exports = router;



/** document. commnent */