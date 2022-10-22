const multer = require('multer');
const staff = require('../models/staff');
// !Storage
var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './public');
  },
  filename: function (req, file, callback) {
    console.log(file);
    if (file.originalname.length > 6)
      callback(
        null,
        file.fieldname +
          '-' +
          Date.now() +
          file.originalname.substr(
            file.originalname.length - 6,
            file.originalname.length
          )
      );
    else callback(null, file.fieldname + '-' + Date.now() + file.originalname);
  },
});
exports.uploadimage = multer({ storage: storage }).single('fileupload');

exports.getaddstaff = (req, res, next) => {
  res.render('../views/layouts/add-staff', {
    title: 'เพิ่มข้อมูลคณาจารย์ - ',
  });
};

exports.postaddstaff = (req, res, next) => {
  try {
    const data = req.body;
    staff.insertMany({
      id: data.id,
      nameThai: data.nameThai,
      nameEng: data.nameEng,
      office: data.office,
      email: data.email,
      image: req.file.filename,
    });
    console.log(req.file);
    res.redirect('/admin/add-staff/info');
  } catch (error) {
    console.log(error);
  }
};

exports.showaddstaff = (req, res, next) => {
  staff.find({}, (err, Staff) => {
    if (err) {
      req.flash('err', err);
      res.render('../views/layouts/add-staff-info', {
        title: 'คณาจารย์ - ',
        Staffs: '',
      });
    } else {
      res.render('../views/layouts/add-staff-info', {
        title: 'คณาจารย์ - ',
        Staff: Staff,
      });
    }
  });
};
