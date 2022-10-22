const express = require('express');
const logoutcontrollers = require('../controllers/logout');
const registercontrollers = require('../controllers/register');
const logincontrollers = require('../controllers/login');
const addstaffcontrollers = require('../controllers/addstaff');
const router = express.Router();

// ! Log in
router.get('/', logincontrollers.getlogin);
router.post('/', logincontrollers.postlogin);
// ! Register
router.get('/register', registercontrollers.getregister);
router.post('/register', registercontrollers.postregister);
// ! Logout
router.get('/logout', logoutcontrollers.getlogout);
// ! display info dd-staff
router.get('/add-staff/info', addstaffcontrollers.showaddstaff);
// ! display get add-staff
router.get('/add-staff', addstaffcontrollers.getaddstaff);
// ! display post add-staff
router.post(
  '/add-staff',
  addstaffcontrollers.uploadimage,
  addstaffcontrollers.postaddstaff
);

module.exports = router;
