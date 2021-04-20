import React, { useEffect,useContext } from 'react'
import {Link} from 'react-router-dom'
import {Spinner} from '../layout/Spinner'
import {Repos} from '../repos/Repos'
import githubContext from '../../context/github/githubContext'


const User=({match})=>{
    const {user,getUser,isLoading,getUserRepos,repos}=useContext(githubContext);
    useEffect(()=>{
        getUser(match.params.login);
        getUserRepos(match.params.login);
        //eslint-disable-next-line
    },[]);
    
    
        
        const {
            name,
            location,
            company,
            avatar_url,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable}=user;

        if(isLoading){
            return (<Spinner/>)
        }else{
            return (
                <>
                    <Link className='btn btn-light' to={'/'}>{'Back to Search'}</Link>
                    Hireable: {' '}
                    { hireable ? <i className='fas fa-check text-success'></i> :
                        <i className='fas fa-times-circle text-danger'></i>
                    }
                    <div className="card grid-2">
                        <div className='all-center'>
                            <img src={avatar_url} alt="" className='round-img' style={{width:'150px'}}/>
                            <h1>{name}</h1>
                            {location && <p>Location: {location}</p>}
                        </div>
                        <div>
                            {bio && (
                            <>
                                <h3>Bio</h3>
                                <p>{bio}</p>
                            </>)}
                            <a className='btn btn-dark my-1' href={html_url}>Visit Github Profile</a>
                            <ul>
                                <li>
                                    {login && <strong>Username:</strong>} {login}
                                </li>
                                <li>
                                    {company && <strong>Company:</strong>} {company}
                                </li>
                                <li className='text-pause'>
                                    {blog && <strong className='text-dark'>Website:</strong>} {blog}
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="card text-center">
                        <div className="badge badge-pause">
                            Followers:{followers}
                        </div>
                        <div className="badge badge-light">
                            Following:{following}
                        </div>
                        <div className="badge badge-dark">
                            Public Repos:{public_repos}
                        </div>
                        <div className="badge badge-primary">
                            Public Gists:{public_gists}
                        </div>
                    </div>
                    <Repos repos={repos}/>
                </>
            )   
        }
}

export default User

