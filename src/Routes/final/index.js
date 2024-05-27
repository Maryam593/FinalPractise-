
import { Router } from "express";
import clientSideAuthenticationController from "../../controller/finalPractise/index.js";

const FinalAuthenticaltionRouter = Router();

FinalAuthenticaltionRouter.post("/finalSignUp",clientSideAuthenticationController.SignUp);
//FinalAuthenticaltionRouter.post("final/SignIn",clientSideAuthenticationController.SignIn);
export default FinalAuthenticaltionRouter;
