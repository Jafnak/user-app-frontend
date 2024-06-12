import React, { useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const SignUp = () => {
const [data,setData] = useState(
    
        {
            "name":"",
            "dob":"",
            "mobile":"",
            "bggroup":"",
            "address":"",
            "pin":"",
            "district":"",
            "place":"",
            "email":"",
            "uname":"",
            "pwd":"",
            "cpwd":"",
        
        }
    
)
const inputHandler = (event)=>{
    setData({...data,[event.target.name]:event.target.value})
}
const readValue=()=>{
    if(data.pwd == data.cpwd){
        alert("Password and confirm password are same")
    }else{
        alert("Password and confirmpassword are not same")
    }
    console.log(data)
    axios.post("http://localhost:8080/signup",data).then(
        (response)=>{
            console.log(response.data)
            if(response.data.status=="success"){
                alert("Successfully added")
            }else{
                alert("Error")
            }
        }
    ).catch()
}


  return (
    <div>
<Nav/>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" value={data.name} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">DOB</label>
                    <input type="text" className="form-control" name="dob" value={data.dob} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Blood group</label>
                    <select  id="" className="form-control" name="bggroup" value={data.bggroup}  onChange={inputHandler}>
                        <option value="A+">A</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="B-">B-</option>
                        <option value="O">O</option>
                        <option value="O">O-</option>
                    </select>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">MobNo</label>
                    <input type="text" className="form-control" name="mobile" value={data.mobile} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Address</label>
                    <textarea  id="" className="form-control" name="address" value={data.address} onChange={inputHandler}></textarea>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Pin</label>
                    <input type="text" className="form-control" name="pin" value={data.pin} onChange={inputHandler}  />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label" >District</label>
                    <select  id="" className="form-control" name="district" value={data.districtistrict} onChange={inputHandler}>
                        <option value="Malappuram">Malappuram</option>
                        <option value="Wayanad">Wayanad</option>
                        <option value="Kasargod">asargod</option>
                        <option value="Kannur">Kannur</option>
                        <option value="Kozhikode">Kozhikode</option>
                        <option value="Palakkad">Palakkad</option>
                        <option value="Thrissur">Thrissur</option>
                        <option value="Ernamkulam">Ernamkulam</option>
                        <option value="Alappuzha">Alappuzha</option>
                        <option value="Kottayam">Kottayam</option>
                        <option value="Kollam">Kollam</option>
                        <option value="Idukki">dukki</option>
                        <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                        <option value="Pathanamthitta">Pathanamthitta</option>
                    </select>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Place</label>
                    <input type="text" className="form-control" name="place" value={data.place} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Email</label>
                    <input type="text" className="form-control" name="email" value={data.email}  onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Username</label>
                    <input type="text" className="form-control" name="uname" value={data.uname} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Password</label>
                    <input type="password" name="pwd" id="" className="form-control"  value={data.pwd}  onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Confirm pswd</label>
                    <input type="password" name="cpwd" id="" className="form-control" value={data.cpwd} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button className="btn btn-primary" onClick={readValue}>Sign Up</button>
                </div>

            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default SignUp