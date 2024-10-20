import { connectDB } from "@/lib/connectDB"
import bcrypt from "bcrypt";

export const POST = async(request)=>{
    const newUser = await request.json()
   try {
    const db = await connectDB()
    const userCollection = db.collection("users")
    const exist = await userCollection.findOne({email : newUser.email})
    if(exist){
        return Response.json({message : 'User exist'}, {status : 302})
    }
    const hashPassword = bcrypt.hashSync(newUser.password, 14);
    const res = await userCollection.insertOne({...newUser, password : hashPassword})
    console.log(res)
    return Response.json({message : 'User created'}, {status : 200})
   } catch (error) {
    return Response.json({message : 'Something went wrong', error}, {status : 500})
   }
    
}