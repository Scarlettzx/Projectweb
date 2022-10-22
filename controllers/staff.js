const staff = require('../models/staff');
exports.getstaff = (req, res, next) => {
  staff.find({}, (err, Staff) => {
    if (err) {
      req.flash('err', err);
      res.render('../views/layouts/staff', {
        title: 'คณาจารย์ - ',
        Staffs: '',
      });
    } else {
      res.render('../views/layouts/staff', {
        title: 'คณาจารย์ - ',
        Staff: Staff,
      });
    }
  });
};
