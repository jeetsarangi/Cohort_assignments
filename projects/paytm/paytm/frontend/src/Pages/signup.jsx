import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from 'axios';
import { useNavigate } from "react-router-dom"

const Signup = () => {

    const navigate = useNavigate()
    const [firstName, setfirstname] = useState("");
    const [lastName, setlastname] = useState("");
    const [username, setemail] = useState("");
    const [password, setpassword] = useState("");
    
    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center ">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your infromation to create an account"} />
        <InputBox onChange={(e)=>{
            setfirstname(e.target.value);
        }} placeholder="John" label={"First Name"} />
        <InputBox onChange={(e)=>{
            setlastname(e.target.value);
        }}  placeholder="Doe" label={"Last Name"} />
        <InputBox onChange={(e)=>{
            setemail(e.target.value);
        }} placeholder="jeetsarangiflash@gmail.com" label={"Email"} />
        <InputBox onChange={(e)=>{
            setpassword(e.target.value);
        }} placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button label={"Sign up"} onClick={async ()=>{
            try{
              const res = await axios.post('http://localhost:3000/api/v1/user/signup', {
              firstName,
              lastName,
              username,
              password
            })
            localStorage.setItem('usertoken', res.data.token);
            navigate("/dashboard")

          }
          catch(error){
            alert(error.response.data.msg)
          }
          
          }}/>
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div> 
    </div>
  </div>
}

export default Signup;