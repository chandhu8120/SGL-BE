
import Inventory from "../models/InventoryModel.js";

export const addItem = async (req, res) => {
  try {
    const newItem = new Inventory(req.body);
    await newItem.save();
    res.status(201).json(newItem);
    console.log("item added")
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getInventory = async (req, res) => {
  try {
    const inventory = await Inventory.find();
    res.status(200).json(inventory);
    console.log("data get..")
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteItem = async (req, res) => {
  try {
    const { itemId } = req.params;
    await Inventory.findByIdAndDelete(itemId);
    res.status(204).send();
    console.log("deleted item")
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default {
  addItem,
  getInventory,
  deleteItem,
};
