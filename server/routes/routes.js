import express from "express";
import controller from "../controller/controller.js";
import blogController from "../controller/blogcontroller.js";
import inventorycontroller from "../controller/inventorycontroller.js";
import ordercontroller from "../controller/ordercontroller.js";

const router = express.Router();

// User registration route
router.post("/register", controller.registerAdmin);

// User login route
router.post("/login", controller.loginAdmin);

// Verify OTP route
router.post("/verify", controller.verifyOTP);

// User profile route
router.get("/profile", controller.getadminProfile);

// Get all blogs________________________________________________________________________________
router.get("/blogs", blogController.getAllBlogs);

// Add a new blog
router.post("/blogs", blogController.addBlog);

// Update a blog
router.put("/blogs/:id", blogController.updateBlog);

// Delete a blog
router.delete("/blogs/:id", blogController.deleteBlog);

//Add a new Inventory  item_____________________________________________________
router.post("/add", inventorycontroller.addItem);
//get a new Inventory  item
router.get("/get", inventorycontroller.getInventory);
//Delete a new Inventory  item
router.delete("/delete/:itemId", inventorycontroller.deleteItem);
//get a new  order ___________________________________________________________
router.get("/orders", ordercontroller.getAllOrders);
//update an order status
router.put("/orders/:orderId/update-status", ordercontroller.updateOrderStatus);
//delete an order
router.delete("/orders/:orderId/cancel", ordercontroller.cancelOrder);
//update an order
router.put("/orders/:orderId/refund", ordercontroller.refundOrder);

export default router;
