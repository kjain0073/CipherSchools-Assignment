import React from 'react';
import Card from './Card';
const CardList=({ robots })=>{
	return (
	<div>
		{
			robots.map((user,i)=>
			{
				return (<Card
				 	key={robots[i].id}
			 		name={ robots[i].name} 
			 		state={ robots[i].state} 
			 		/>
			 	 );
			})
		}
	</div>
	);
}

export default CardList;