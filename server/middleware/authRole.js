

exports.allowRoles=(...allowRoles)=>{
    return(req,res,next)=> {


        if(!req.user){
            return res.status(401).json({msg:"User Not Authenticated"})
        }
        if(!allowRoles.includes(req.user.role)){
            return res.status(403).json({msg:"Forbidden: insufficient permissions"})
        }
        next();

    }
}