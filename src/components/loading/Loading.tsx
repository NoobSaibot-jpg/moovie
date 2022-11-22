import {FC} from "react";
import './loading.scss'

export const Loading:FC = ()=>{
	return(
		<div className='loading_body'>
			<div className="sign">
				<span className="fast-flicker">l</span>oad<span className="flicker">i</span>ng
			</div>
		</div>
	)
}