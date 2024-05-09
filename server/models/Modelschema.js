const mongoose = require('mongoose');

const EmpSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
    medicines: String,
    symptoms: String
});

const EmployeeModel = mongoose.model("Employee", EmpSchema); // Collection name changed to "Employee"

module.exports = EmployeeModel; // Export the model to be used elsewhere in your application
