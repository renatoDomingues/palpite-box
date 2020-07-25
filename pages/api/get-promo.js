
//communication form http <=> (req, res)=>

export default async(req, res) =>{
    res.end(JSON.stringify({
        showCoupon: true,
        message: 'Coupon message'
    }))
}