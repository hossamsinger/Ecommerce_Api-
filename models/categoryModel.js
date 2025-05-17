const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Category name is required"],
        unique: [true , "Category name must be unique"],
        minlength: [3, "Category name must be at least 3 characters"],
        maxlength: [32, "Category name must be at most 32 characters"]  
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
    ,slug: {
        type: String,
        lowercase: true
    }
}, {
    timestamps: true
})


module.exports = mongoose.model("Category", categorySchema);