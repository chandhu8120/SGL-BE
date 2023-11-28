import express from "express";
import controller from "../controller/admincontroller.js";
import blogController from "../controller/blogcontroller.js";
import ordercontroller from "../controller/ordercontroller.js";
import userController from "../controller/usercontroller.js";
import inventorycontroller from "../controller/inventorycontroller.js";
const router = express.Router();

// Admin registration route________________________________
router.post("/register", controller.registerAdmin);

// Admin login route
router.post("/login", controller.loginAdmin);

// Verify OTP route
router.post("/verify", controller.verifyOTP);

// Admin profile route
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

router.post("/orders", ordercontroller.addOrder);
//get a new  order ___________________________________________________________
router.get("/orders", ordercontroller.getAllOrders);
//update an order status
router.put("/orders/:orderId/update-status", ordercontroller.updateOrderStatus);
//delete an order
router.delete("/orders/:orderId/cancel", ordercontroller.cancelOrder);
//update an order
router.put("/orders/:orderId/refund", ordercontroller.refundOrder);

//add a user_____________________________________________________
router.post("/register", userController.registerUser);
//logging in a user
router.post("/login", userController.loginUser);
//verify the user
router.post("/verify", userController.verifyUserOTP);
//get the user profile
router.get("/profile", userController.getUserProfile);
//add inventory__________________________________________________
router.post("/add-item", inventorycontroller.addItem);
//get inventory items
router.get("/get-inventory", inventorycontroller.getInventory);
//delete inventory items
router.delete("/delete-item/:itemId", inventorycontroller.deleteItem);

export default router;
