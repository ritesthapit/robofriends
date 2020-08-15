import React from 'react';

// const Card = (props) => {
    // const {name, email, id} = props; //destructuring
//======================OR===============================
const Card = ({name, email, id}) => {
    return( //returns only one element--which is inside div here
        // the classNames are from tachyons
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'> 
            <img src={`https://robohash.org/${id}?size=230x230`} alt='robot' />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card
