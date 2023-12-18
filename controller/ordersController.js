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
  },

  editOrder: async (req, res) => {
    try {
      const { orderId } = req.params;
      const updatedOrder = req.body;

      const existingOrder = await Orders.findOne({ orderId });

      if (!existingOrder) {
        return res.status(404).json({ error: 'Order not found' });
      }

      const editedOrder = await Orders.findOneAndUpdate({ orderId }, updatedOrder, { new: true });

      res.status(200).json(editedOrder);
    } catch (error) {
      console.error('Error editing order:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateOrder: async (req, res) => {
    try {
      const { orderId } = req.params;
      const updatedOrder = req.body;

      const existingOrder = await Orders.findOne({ orderId });

      if (!existingOrder) {
        return res.status(404).json({ error: 'Order not found' });
      }

      const updatedOrderResult = await Orders.findOneAndUpdate({ orderId }, updatedOrder, { new: true });

      res.status(200).json(updatedOrderResult);
    } catch (error) {
      console.error('Error updating order:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

 
// ...

deleteOrder: async (req, res) => {
  try {
    const { orderId } = req.params; // Use "orderId" instead of "id"

    if (!orderId) {
      return res.status(400).json({ error: 'delete orderId is required' });
    }

    const deleteOrder = await Orders.findByIdAndDelete(orderId);

    if (!deleteOrder) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.status(200).json(deleteOrder);
  } catch (error) {
    console.error('Error deleting order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
},

// ...

};

export default ordersController;
