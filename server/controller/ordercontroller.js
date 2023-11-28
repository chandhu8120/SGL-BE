
import Order from "../models/OrderModel.js";


const addOrder = async (req, res) => {
  try {
    const { username, items, orderID, date, status, address } = req.body;

    // Create a new order hii
    const newOrder = new Order({
      username,
      items,
      orderID,
      date,
      status,
      address
    });

    // Save the new order to the database
    const savedOrder = await newOrder.save();

    res.status(201).json(savedOrder);
    console.log("ordered....")
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { status: "Delivered" },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const cancelOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    await Order.findByIdAndDelete(orderId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const refundOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { status: "Refunded" },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default {
  addOrder,
  getAllOrders,
  updateOrderStatus,
  cancelOrder,
  refundOrder,
};
