
export default async(req, res) =>{
    //console.log(req.body)
    console.log(JSON.parse(req.body))
    res.end(req.body)
}