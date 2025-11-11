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
  }
  const submitpassword = (e) => {
    setpassword(e.target.value)
    console.log(password);
  }

  const handlesubmit = () => {
    let post="localhost:3000/register"
  }
    return (
      <>
        <label>Email</label>
        <input type="email" name="" id="" className="bg-white" placeholder="email" onChange={submitemail} />

        <label>Password</label>
        <input type="password" name="" id="" className="bg-white" placeholder="Password" onChange={submitpassword} />


        {/* <input type="submit" value="" placeholder='Submit'/> */}
        <button type='submit' onClick={submitemail}>Submit</button>


      </>
    )
  }

  export default App
