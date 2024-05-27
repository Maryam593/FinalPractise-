const clientSideAuthenticationController = {

    //signUp is use for authentication
SignUp : (req,res)=>{

    try {
        
        
    } catch (error) {
        res.status(500).json({
            message: "Internal server error"
        })
    }
}


}

export default clientSideAuthenticationController;