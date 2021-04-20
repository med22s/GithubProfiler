import React from 'react'
import spinner from './spinner.gif'

export const Spinner = () => {
    return (
        <>
            <img src={spinner} alt="Loading..." style={{display:'block',margin:'auto',width:'200px',}}/>
        </>
    )
}
