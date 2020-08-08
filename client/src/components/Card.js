import React from 'react';

const Card=({ name , state })=> {
	return (
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 pointer'>
			<div>
				<h3>{name}</h3>
				<h5>{state}</h5> 
			</div>
		</div>
	);
}

export default Card;