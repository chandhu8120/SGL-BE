import express from 'express';
import inventoryController from './controller/inventoryController.js'
import ordersController from './controller/ordersController.js';
import gemsController from './controller/gemsController.js';
import diamondsController from './controller/diamondsController.js';
import jewellaryController from './controller/jewellaryController.js';
import pearlsController from './controller/pearlsController.js';
import coralsController from './controller/coralsController.js';
import cartsController from './controller/cartsController.js';
import beadsController from './controller/beadsController.js';
import blogsController from './controller/blogsController.js';
import checkoutController from './controller/CheckoutController.js';

const router = express.Router();
router.post("/inventorypost", inventoryController.createInventoryItem);
router.get("/inventoryget", inventoryController.getAllInventoryItems);
router.delete("/deleteinventory/:id",inventoryController.deleteInventoryItem)

router.post("/postblogs", blogsController.createBlog);
router.get("/getblogs", blogsController.getAllBlogs);

router.post("/postorders", ordersController.createOrder);
router.get("/getorders", ordersController.getAllOrders);
router.put("/edit/:orderId", ordersController.editOrder);
router.delete("/deleteorder/:id", ordersController.deleteOrder); 
router.put("/updateorder", ordersController.updateOrder);


router.post("/postgems",gemsController.createGem)
router.get("/getgems",gemsController.getAllGems)

router.post("/postbeads",beadsController.createBeads)
router.get("/getbeads",beadsController.getBead)

router.post("/postdiamonds",diamondsController.createDiamond)
router.get("/getdiamonds",diamondsController.getAllDiamonds)
router.delete("/deletediamonds/:id",diamondsController.deleteDiamond)

router.post("/postjewellary",jewellaryController.createJewellary)
router.get("/getjewellary",jewellaryController.getAllJewellary)

router.post("/postpearls",pearlsController.createPearls)
router.get("/getpearls",pearlsController.getAllPearls)

router.post("/postcorals",coralsController.createCorals)
router.get("/getcorals",coralsController.getCorals)

router.post("/postcarts",cartsController.createCart)
router.get("/getcarts",cartsController.getAllCarts)
router.delete("/deletecarts/:id",cartsController.deleteCart)

router.post("/postcheckout",checkoutController.addCheckout)
router.get("/getcheckout",checkoutController.getCheckout)

export default router;
