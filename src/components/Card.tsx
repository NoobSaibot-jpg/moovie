import React, {FC} from "react";


interface IProps{
	name: string,
	url: string|undefined
}

export const Card:FC<IProps> = ({name,url})=>{

	const cardStyle = {
		backgroundImage: `url(${url})`
	}

	return(
		<a className="card" href="src/components/Card#">
			<div className="card__background"
				 style={cardStyle}></div>
			<div className="card__content">
				<h3 className="card__heading">{name}</h3>
			</div>
		</a>
	)
}