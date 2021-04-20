import React,{useContext}  from 'react';
import UserItem from './UserItem'
import {Spinner} from '../layout/Spinner'
import githubContext from '../../context/github/githubContext'


function Users(){
    const {users,isLoading}=useContext(githubContext);

    if(isLoading){
        return (<Spinner/>)
    }else{
        return (
            <div className='grid-2 gridStyle'>
                {users.map(user=>{
                    return <UserItem key={user.login} user={user} />
                })}
            </div>
       );
    }
}


// Users.propTypes={
//     users:PropTypes.array.isRequired,
//     isLoading:PropTypes.bool.isRequired
// }




export default Users;