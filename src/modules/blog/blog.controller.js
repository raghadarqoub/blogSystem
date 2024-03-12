import blogModel from './../../../DB/blog.model.js';
import userModel from './../../../DB/user.model.js';

export const getblog = async (req , res )=>{
    const blogs =await blogModel.findAll({
        include: {
            model:userModel,
            attributes:['id','name']
        },
        attributes:{
            exclude:['UserId' ,'updatedAt']
        }
    });
    return res.json({message:"success",blogs});
}
export const addBlog= async(req,res)=>{
    try{
        const {title ,body,UserId}=req.body;
        const blog =await blogModel.create({title,body,UserId});
        return res.json({message:"success"});
    }catch(error){
        return res.json({message:"error",error:error.stack});
    }
}
