import Checkout from "../model/checkoutModel.js";

const checkoutController = {
  addCheckout: async (req, res) => {
    try {
      const { totalItems, totalCost, shipping, estimatedTax, grandTotal } = req.body;
      const checkout = await Checkout.create({
        totalItems,
        totalCost,
        shipping,
        estimatedTax,
        grandTotal,
      });

      res.status(201).json(checkout);
    } catch (error) {
      console.error('Error adding checkout data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getCheckout: async (req, res) => {
    try {
      const getCheckout = await Checkout.find();
      res.status(200).json(getCheckout);
    } catch (error) {
      console.error('Error fetching checkout data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};

export default checkoutController;
