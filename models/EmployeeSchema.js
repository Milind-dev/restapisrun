const mongoose = require('mongoose');
const EmployeeSchema = mongoose.Schema(
  {
    FirstName: {
      type: String,
      require: true,
    },
    LastName: {
      type: String,
      require: true,
    },
    Email: {
      type: String,
      require: true,
    },
    Gender: {
      type: String,
      require: true,
    },
    Designation: {
      type: String,
      require: true,
    },
    ReportingManager: {
      type: String,
      require: true,
    },
    Salary: {
      type: Number,
      require: true,
    },
    EmployeeCode: {
      type: Number,
      require: true,
    },

    Location: {
      type: String,
      require: true,
    },
    State: {
      type: String,
      require: true,
    },
    mobile: {
      type: Number,
      require: true,
    },
    Country: {
      type: String,
      require: true,
    },
    Department: {
      type: String,
      require: true,
    },
    DeletedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const EmployeeSchemas = mongoose.model('EmployeePosts', EmployeeSchema);
module.exports = EmployeeSchemas;
