import React, { useState } from 'react'

const FormHandler = () => {
    const [data, setData] = useState({name: "", email:""})

    const handleData = (e) => {

       const {name, value} = e.target;
       setData({...data, [name] : value})
      };

    const HandleSubmit = (e) => {

        e.preventDefault();

        console.log(data);

    }
      
  return (
    <form onSubmit={HandleSubmit}>
        <input type="text" name="name"  value={data.name} onChange={handleData}/><br />
        <input type="email" name='email' value={data.email} onChange={handleData}/><br />
      
        <button>Submit</button>
    </form>
  )
}

export default FormHandler