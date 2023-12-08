import Orders from "../model/ordersModel.js";

const ordersController = {
  createOrder: async (req, res) => {
    try {
      const { userName, items, orderId, date, status, address, totalPrice } = req.body;

      const newOrder = await Orders.create({
        userName,
        items,
        orderId,
        date,
        status,
        address,
        totalPrice
      });

      res.status(201).json(newOrder);
    } catch (error) {
      console.error('Error creating order:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getAllOrders: async (req, res) => {
    try {
      const allOrders = await Orders.find();
      res.status(200).json(allOrders);
    } catch (error) {
      console.error('Error getting all orders:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};

export default ordersController;
