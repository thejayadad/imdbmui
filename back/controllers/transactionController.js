const moment = require("moment");
const verifyToken = require("../middleware/verifyToken.js");
const Transaction = require("../models/Transaction.js")
const transactionController = require("express").Router()


transactionController.get("/getall", async (req, res) => {
    try {
      const { frequency, selectedDate, type } =  req.body;
      const Transactions = await Transaction.find({
        ...(frequency !== "custom"
          ? {
              date: {
                $gt: moment().subtract(Number(frequency), "d").toDate(),
              },
            }
          : {
              date: {
                $gte: selectedDate[0],
                $lte: selectedDate[1],
              },
            }),
        userid: req.body.userid,
        ...(type !== "all" && { type }),
      });
      res.status(200).json(Transactions);
    } catch (error) {
      console.log(error);
      res.status(500).json(erorr);
    }
  });

  transactionController.delete("/deletetransaction/:id", verifyToken,  async (req, res) => {
    try {
      await Transaction.findOneAndDelete({ _id: req.body.transacationId });
      if(Transaction.userId.toString() !== req.user.id.toString()){
        throw new Error("You can only delete your Transactions")

      }
      res.status(200).send("Transaction Deleted!");
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });


  transactionController.put("/updatetransaction/:id", verifyToken, async (req, res) => {
    try {
      await Transaction.findOneAndUpdate(
        { _id: req.body.transacationId },
        req.body.payload
      );
      if(Transaction.userId.toString() !== req.user.id.toString()){
        throw new Error("You can only delete your Transactions")

      }
      res.status(200).send("Edit SUccessfully");
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });

  transactionController.post("/", async (req, res) => {
    try {
      const newTransaction = new Transaction(req.body);
      await newTransaction.save();
      res.status(201).send("Transaction Created");
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });

module.exports = transactionController