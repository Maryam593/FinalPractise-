import { compare } from "bcrypt";
import {hash} from "bcrypt";
import FinalAuthenticationModel from "../../model/finalPracrise/index.js";
import jwt from 'jsonwebtoken';
const PASS = process.env.secret_pass;
//import { resourceLimits } from "worker_threads";

const clientSideAuthenticationController = {
  //signUp is use for authentication
  SignUp: async (req, res) => {
    try {
      const payload = req.body;

      //checking for findOne
      const checkPost = await FinalAuthenticationModel.findOne({
        where: {
            email: payload.email,
        }
      });
      if (checkPost) {
        //bad data
        res.status(401).json({ message: "Already exist" });
      }

      //hashing
      //hashing contains password and salt range
      //range = 10, is the most suitable range for salt
      const Hash_pass = await hash(payload.password, 10);
      //creating new model
      const data = await FinalAuthenticationModel.create({
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        // password : payload.password,
        //if we display payload.password.. there will be no security left so..we do hashing
        password: Hash_pass,
        phoneNo: payload.phoneNo,
      });

      res
        .status(200)
        .json({ message: "User is signUp successfully",  data });
    } catch (error) {
        console.log(error);
      res.status(500).json(
     {
        message: "Internal server error",
      });
    }
  },

  //SignIn is use for Authorization

  SigIn: async (req, res) => {
    try {
      const payload = req.body;
      //checking for findOne
      const checkPost = await FinalAuthenticationModel.findOne({
       where: {
        email: payload.email,
       }
      });
      if (checkPost) {
        //bad data
        res.status(401).json({ message: "Invalid Confirmations" });
      }

      //checking password 

      const comparePass = compare(
        checkPost.password, payload.password
      )
     
      if(!comparePass){
        res.status(400).json({message : "Invalid Confirmations"})
      }
      //getting data 
      const finalData = await FinalAuthenticationModel.create({
        id : payload.id,
        email : payload.email, 
        password : payload.password
      })
    //   const pass = jwt.sign(finalData, pass)
    const pass = jwt.sign(finalData,pass,{
        expiresIn : "3h"
    })
     res.status(200).json({message : finalData})
    } catch (error) {

        res.status(500).json({message: "Internal server error "})
    }
  },
};

export default clientSideAuthenticationController;
