import React from 'react'
import {RepoItem} from './RepoItem'
import PropTypes from 'prop-types'


export const Repos = ({repos}) => {
    return (
        <div>
            {repos.map(repo=>{
                return <RepoItem key={repo.id} repo={repo}/>
            })}
        </div>
    )
}

Repos.propTypes={
    repos:PropTypes.array.isRequired
}

