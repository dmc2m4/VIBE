const { Router } = require("express");
const purchasesRouter = Router();
const { getPurchasesByUser, putPurchases} = require("../Controllers/PurchasesController");

purchasesRouter.post("/user", async (req, res) => {
  const {email} = req.body
    try {
      const purchases = await getPurchasesByUser(email);
      res.status(200).send(purchases);
    } catch (error) {
      res.status(401).send(error.message);
    }
  });

purchasesRouter.post("/", async (req, res) => {
    try{
        const purchases = await putPurchases(req.body)
        res.status(200).send(purchases)
    }catch(error){
        res.status(401).send(error.message);
    }
})


module.exports = purchasesRouter