// import { Button } from '@material-ui/core';


import { useState } from 'react';
import MyButton from './Button';

export default function ToDo (){
    const [todo,setTodo]=useState('')
    
    

    function createToDo(e) {
        

        e.preventDefault();
        post(todo)
   
        setTodo("")
    }

   
    return(
       <>
           
                <form onSubmit={createToDo}>
                    <input  value={todo}
                        onChange={event => setTodo(event.target.value)}
                    />
                    <button type='submit'>insert</button>
                
                </form>
               <ul>
                
                {/* {my.map((ele)=>{
                    
                    return ele && <li>{ele}</li>
                    
                })} */}
                

               </ul>
            {/* <MyButton size={"10"} color={"green"}>freshteh</MyButton> */}
            
        </>
    )
}
const baseUrl ="http://localhost:8080/"
const post =async (todo)=>{


try{
    await fetch(baseUrl,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(todo)
    })
}

 catch (error) {
   console.error(error) 
}




//     const data = {
//         input: todo
//     }

//     const JSONdata = JSON.stringify(data)


//     const endpoint = '/api/form'


//     const options = {

//         method: 'POST',

//         headers: {
//             'Content-Type': 'application/json',
//         },

//         body: JSONdata,
//     }
//     const response = await fetch(endpoint, options)
//     const result = await response.json()
//     console.log(result)
}









