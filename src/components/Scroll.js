import React from 'react';


const Scroll = (props) => {
    return(
        <div style = {{ overflowY :'scroll', border:'2px solid black', height: '800px'}}>
        {/* {jsx property instead of using a css file} */}
            {props.children}
        </div>
    )
};
export default Scroll;