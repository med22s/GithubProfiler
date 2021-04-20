import React,{useState,useContext} from 'react'
import githubContext from '../../context/github/githubContext'
import alertContext from '../../context/alert/alertContext'

export default function Search() {
    const [text,setText]=useState('');
    const {searchUsers,clearUsers,users}=useContext(githubContext);
    const {setAlert}=useContext(alertContext);

    const onSubmit=(e)=>{
        e.preventDefault();
        if(text===''){
            setAlert('Please enter something !','light');
        }else{
            searchUsers(text);
            setText('');
        }
        
    }

    return (
        
        <div>
            <form className='form' onSubmit={onSubmit}>
                <input type="text" 
                placeholder='Search Users ...' 
                name="text"  
                value={text} 
                onChange={(e)=>setText(e.target.value)}
                />
                <input type="submit" value="Search" className='btn btn-dark btn-block'/>
            </form>
            {users.length>0 && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button> }
            
        </div>
    )
}
