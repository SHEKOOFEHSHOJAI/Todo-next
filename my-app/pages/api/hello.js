// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ServerStyleSheets } from '@material-ui/core'
import ToDo from '../../component/to-do'
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

// Server.listen.then((4000)=>{
//   console.log();
// })


// const post = async () => {
//   const res = await fetch('http://localhost:8080/', {
//     method: 'POST',
//     body: JSON.stringify({ my: my }),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//   const data = await res.json()
//   console.log(data);
// }
// post()


