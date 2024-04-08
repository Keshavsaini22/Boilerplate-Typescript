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
    address: {
        type: Object,
        properties: {
            // street: { type: String },
            city: { type: String },
            // pincode: { type: Number },
            country: { type: String }
        }
    },
    industry: { type: String },
    phone: { type: String },
    website: { type: String },
    image: { type: String },
    languages: { type: String },
    title: { type: String },
    desc: { type: String },
}, { timestamps: true })
module.exports = mongoose.model("users", UserSchema)