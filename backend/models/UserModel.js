const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["Student", "Admin",]
    },
    // address: {
    //     type: Object,
    //     properties: {
    //         // street: { type: String },
    //         city: { type: String },
    //         // pincode: { type: Number },
    //         country: { type: String }
    //     }
    // },
   
}, { timestamps: true })
module.exports = mongoose.model("users", UserSchema)