import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { useState } from "react";

function App() {



  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")


  const submitemail = (e) => {
    setemail(e.target.value)
    console.log(email);
  }

  const submitpassword = (e) => {
    setpassword(e.target.value)
    console.log(password);
  }

  const handlesubmit = async(e) => {
    e.preventDefault();
    try{

      let re =await fetch('http://localhost:3000/register',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
      const data=await re.json();
      console.log(data);
    }catch(err){
      console.log(err);
    }
  }
  return (
    <>
      <form action="" onSubmit={handlesubmit}>

      <label>Email</label>
      <input type="email" name="" id="" className="bg-white" placeholder="email" onChange={submitemail} />

      <label>Password</label>
      <input type="password" name="" id="" className="bg-white" placeholder="Password" onChange={submitpassword} />


      {/* <input type="submit" value="" placeholder='Submit'/> */}
      <button type='submit' >Submit</button>
      </form>


    </>
  )
}

export default App
