import React from 'react';
import './Button.css'

function Button(props) {
    return (
        <div >
            <button 
            className='button'
            // onClick={activateLasers}
            >
            Activate Lasers
            </button>
        </div>
    );
}

export default Button;