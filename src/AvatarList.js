import React from 'react';

const AvatarList =(props) =>{
	



	return (
		<div className="AvatarStyle ma4 bg-light-green dib pa3 grow shadow-8 tc">
				
					{props.imgg}
					<h3> {props.name} </h3>
					<h3> {props.work} </h3>
			
			</div>




		)
}

export default AvatarList;
