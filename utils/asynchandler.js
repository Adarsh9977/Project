const asynchandler = (requestHandler)=>{
    return (req, res, next)=>{
        Promise.resolve(requestHandler)
        .catch((err)=> next(err))
    }
}


export {asynchandler}