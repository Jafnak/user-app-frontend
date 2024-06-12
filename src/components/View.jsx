import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const View = () => {
const [data,changeData] = useState([])
const fetchData = ()=>{
  axios.get("http://localhost:8080/view").then(
    (response)=>{
      changeData(response.data)
    }
  ).catch().finally()
}
useEffect(()=>{fetchData()},[])
  return (
    <div>

    <Nav/>
<div className="container">
  <div className="row">
    <div className="col col-12 col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <table class="table">
  <thead>
    <tr>
      <th scope="col">NAME</th>
      <th scope="col">DOB</th>
      <th scope="col">BLOOD GROUP</th>
      <th scope="col">MOB</th>
      <th scope="col">PINCODE</th>
      <th scope="col">DISTRICT</th>
      <th scope="col">PLACE</th>
      <th scope="col">EMAIL ID</th>
      <th scope="col">USERNAME</th>
    
    </tr>
  </thead>
  <tbody>

    {data.map(
      (value,index)=>{
        return     <tr>
        <th scope="row">{value.name}</th>
        <td>{value.dob}</td>
        <td>{value.bggroup}</td>
        <td>{value.mobile}</td>
        <td>{value.pin}</td>
        <td>{value.district}</td>
        <td>{value.place}</td>
        <td>{value.place}</td>
        <td>{value.email}</td>
      </tr>
      }
    )}
 
   
  </tbody>
</table>

    </div>
  </div>
</div>
        
    </div>
  )
}

export default View