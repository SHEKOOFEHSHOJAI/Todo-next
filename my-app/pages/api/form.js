export default function handler(req, res) {
  
    const body = req.body
    console.log('body: ', body)
    console.log(body.input);
  
    if (!body.input) {
      
        return res.status(400).json({ data: 'input name not found' })
    }

   
    res.status(200).json({data: `${body.input}`})
}