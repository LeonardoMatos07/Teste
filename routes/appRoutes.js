const express = require("express");
const router = express.Router();
const userController = require("../app/controllers/userController");



router.post('/contact/create', async (req, res)=>{
     await userController.create(req, res);
})

router.get('/contact/get', async (req, res)=>{
     await userController.getContact(req, res);
})

router.delete('/contact/delete', async (req, res)=>{
     await userController.deleteContact(req, res);
})

module.exports = router