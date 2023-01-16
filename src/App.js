
import './App.css';
import axios from "axios";
import { useState } from 'react';
function App() {
  const[myData,setMyData]=useState([]);     
         
 axios.get("https://jsonplaceholder.typicode.com/users")
 .then((res)=>{setMyData(res.data)})
  .catch((err)=>{console.log(err)});
  return(
    <div className='App'>
     
    {myData.map((el)=> (
      
<tr>
  <td >{el.id}</td>
  <td>{el.name}</td>
  <td>{el.username}</td>
   <td>{el.email}</td>
 
   <td>{el.address.street}</td>
  <td>{el.address.suite}</td>
  <td>{el.address.city}</td>
   <td>{el.address.zipcode}</td> 

   <td>{el.phone}</td>
 <td>{el.website}</td>
 <td>{el.company.name}</td>
 <td>{el.company.catchPhrase}</td>
 <td>{el.company.bs}</td>
 </tr>


    ))} 
    </div>
  );
}export default App;
      