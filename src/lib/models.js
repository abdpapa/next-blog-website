import mongoose from "mongoose";

const userSchema= new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique: true,
            min: 3,
            max: 20,
          },
          email: {
            type: String,
            required: true,
            unique: true,
            max: 50,
          },
          password: {
            type: String,
          },
          img: {
            type: String,
          },
          isAdmin: {
            type: Boolean,
            default: false,
          },
        
    },
    {timestamps:true}
);

const postSchema = new mongoose.Schema(
    {  userId: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      slug: {
        type: String,
        required: true,
        unique: true,
      },
      desc: {
        type: String,
        required: true,
      },
      img: {
        type: String,
      },
      
     
    },
    { timestamps: true }
  );
  export const Post=mongoose.models?.Post || mongoose.model("Post",postSchema); 
  export const User = mongoose.models?.User || mongoose.model("User", userSchema);