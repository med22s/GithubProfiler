import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS
} from '../types';


let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = props => {
    const initialState = {
      users: [],
      user: {},
      repos: [],
      isLoading: false
    };

    const [state, dispatch] = useReducer(GithubReducer, initialState);


    const setIsLoading=()=>{
      dispatch({type:SET_LOADING});
    }


    // search users :


    const searchUsers=async (text)=>{
        setIsLoading(true);
        const response=await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}
        &secret_id=${githubClientSecret}`);
        dispatch({type:SEARCH_USERS,payload:response.data.items});
    }


    // clear users :

    const clearUsers=()=>dispatch({type:CLEAR_USERS});
    // get user :


    const getUser=async(login)=>{
      setIsLoading();
      const response=await axios.get(`https://api.github.com/users/${login}?client_id=${githubClientId}
      &secret_id=${githubClientSecret}`);
      dispatch({type:GET_USER,payload:response.data});
    }



    // get user repos

    const getUserRepos=async(login)=>{
      setIsLoading();
      const response=await axios.get(`https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &secret_id=${process.env.REACT_APP_GITHUB_SECRET_ID}`);
      dispatch({type:GET_REPOS,payload:response.data});
    }


    return (
        <GithubContext.Provider
          value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            isLoading: state.isLoading,
            searchUsers,
            clearUsers,
            getUser,
            getUserRepos
          }}
        >
          {props.children}
        </GithubContext.Provider>
    );

}



export default GithubState;

