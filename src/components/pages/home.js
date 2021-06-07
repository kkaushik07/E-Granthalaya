import React from 'react';
import { projectAuth } from '../../firebase/config';




const Home = () => {


	return (<div style={{
		height: `${91.8}vh`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundImage: `url(${'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGlicmFyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'})`
	}}>
		<div className='d-flex flex-column justify-content-center ui center aligned container  '
			style={{ height: `${90}vh` }}>
			<h1 className='' style={{ color: 'white' , fontSize:`${5}rem` ,textShadow:`${3}px ${3}px black` }} >Welcome To My Library</h1>
			<p style={{ color: 'white' ,textShadow:`${1}px ${1}px black` }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
		</div>
	</div>

	)
}

export default Home