const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
      username: {
        type: String,
      },
      email: {
        type: String,
        required: true,
      },
      DOB: {
        type: Date,
      },
      role: {
        type: String,
        enum: ["admin", "explorer"],
        default: "explorer",
      },
      location: {
        type: String,
      },
      password: {
        type: String,
        required: true,
      },
    },
    {
      versionKey: false,
    }
  );
  

  const userModel = mongoose.model("users" , userSchema)

module.exports={
    userModel
}

  