const testController = (req, res)=>{
    try {
        res.status(200).json({
            message:'Hello From TEST!',
            success: true,
        })
        
    } catch (error) {
        console.error(error);
        
        
    }
}

module.exports = testController