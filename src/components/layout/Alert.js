import React,{useContext} from 'react'
import alertContext from '../../context/alert/alertContext'

export const Alert = () => {
    const {alert}=useContext(alertContext);
    return (
        <>
            {alert!==null && 
                <div className={`alert alert-${alert.type}`}>
                <i className="fas fa-info-circle" /> {alert.msg}
                </div>
            }
        </>
    )
}
