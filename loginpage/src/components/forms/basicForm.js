import React, { useState } from 'react'
import '../../style.css';

const BasicForm = ({onFormSubmit}) => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password, setPassword] = useState("");
    const [allEntry,setAllEntry]=useState([])
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newEntry={name,email,password};
        setAllEntry([...allEntry, newEntry]);

        onFormSubmit(newEntry);

    }
  return (
    <div className='body'>
    <div className="form-container">
      <form action=""onSubmit={handleSubmit}>

      <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" autoComplete='off'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
        </div>

        <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" autoComplete='off'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
        </div>

        <div>
            <label htmlFor="password">Password</label>
            <input type="text" name="password" id="password" autoComplete='off'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
        </div>

        <button type='submit'>Login</button> 
      </form>

    </div>
    </div>
  );
};

export default BasicForm;
