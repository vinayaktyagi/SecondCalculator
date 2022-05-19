import React from 'react';
import {Link,Outlet} from 'react-router-dom';
export default function App(){
	// TODO: Styling
	return (
		
		<div className='app-frame'>
			<h1 className='app-title'>Second Calculator</h1>
			<nav style={{margin:"50px",padding:"20px", backgroundColor:"hotpink",display:"flex",justifyContent:"center"}}>
				<Link to='/basic' style={{width:"50%",margin:"10px auto",fontSize:"10px", border:"1px solid black", backgroundColor:"skyblue", borderRadius:"5px", color:"darkblue",textAlign:"center",marginBottom:"20px"}}>Basic Calculator</Link>
				<Link to='/red' style={{width:"50%",margin:"10px auto",fontSize:"10px", border:"1px solid black", backgroundColor:"skyblue", borderRadius:"5px", color:"darkblue",textAlign:"center"}}>Red Button Calculator</Link>
			</nav>
			<Outlet />
		</div>
		
	)
}