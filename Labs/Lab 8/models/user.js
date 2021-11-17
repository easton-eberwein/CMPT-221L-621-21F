const mongoose = require("mongoose")

const Schema = mongoose.Schema

const UserSchema = new Schema({
    firstname: String,
    lastName: String
})

const UserModel = mongoose.model("user", UserSchema)

module.exports = UserModel