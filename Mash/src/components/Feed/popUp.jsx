import React from 'react'

function popUp(props){
    return( props.trigger) ? (
        <div className='popup'>
            <div className='popUp-inner'>
                <button className='close-btn'>close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default popUp