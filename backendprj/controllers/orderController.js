import orderModel from "../models/orderModel";

const placeOrder = async (req,res) => {
    
    try {
        
        const { userId, items, amount, address} = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod:"COD",
            payment:false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({success:true,message:"Order Placed"})


    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }

}

const placeOrderStripe = async (req, res) => {
    
}

// All orders data for admin panel

const allOrders = async (req, res) => {}


const userOrders = async (req, res) => {}

const updateStatus = async (req, res) => {}

export { placeOrder, placeOrderStripe, allOrders, userOrders, updateStatus }