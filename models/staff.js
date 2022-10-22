const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const staffSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    nameThai: {
      type: String,
      required: true,
    },
    nameEng: {
      type: String,
      required: true,
    },
    office: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      unique: false,
      require: [true, 'กรุณาใส่รูปภาพ'],
    },
  },
  { timestamps: true, versionKey: false }
);

const staff = mongoose.model('staffs', staffSchema);
module.exports = staff;
