import express from "express";

import { placeOrder, placeOrderStripe, allOrders, userOrders, updateStatus } from "../controllers/orderController.js";
import adminAuth from "../middlewares/adminAuth.js";
import authUser from "../middlewares/auth.js";

const orderRouter = express.Router();

orderRouter.post("/place", authUser, placeOrder)
orderRouter.post("/stripe", authUser, placeOrderStripe)
orderRouter.post("/list",adminAuth, allOrders)
orderRouter.post("/userorders", authUser, userOrders)
orderRouter.post("/status",adminAuth, updateStatus)

export default orderRouter