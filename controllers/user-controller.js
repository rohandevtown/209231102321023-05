const {BookModel, UserModel} = require("../models");

exports.getAllUsers = async (req,res)=>{
      const users = await UserModel.find();
      
      if(users.length === 0){
        return res.status(404).json({
            success: false,
            message: "No User Found"
        })
      }

      return res.status(200).json({
        success: true,
        data: users
      })
}

exports.getSingleUserById = async (req, res) => {
    const {id} = req.params;

    const user = await UserModel.findById({_id: id});
    if(!user){
        return res.status(404).json({
            success: false,
            messgae: "User Not Found"
        })
    };
    return res.status(200).json({
        success: true,
        data: user
    })
}

