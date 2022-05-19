import React,{useEffect} from 'react';

const Plus = Symbol("Plus");
const Minus = Symbol("Minus");
const Multiply = Symbol("Multiply");
const Divide = Symbol("Divide");

export default function BasicCalc(){
	const [firstval,setFirstval] = React.useState(0);
	const [secondval,setSecondval] = React.useState(0);
	const [result,setResult] = React.useState(0);
	const [prevValues,setPrevValues] = React.useState({first:0,second:0});

	const placeFirstVal = (event)=>{
		// event.preventDefault();
	    const val = Number.parseInt(event.target.value);
	    if(val){
			setPrevValues({...prevValues,first:0});
		    setFirstval(val);

	    }
	}

	const placeSecondVal = (event)=>{
		// event.preventDefault();
		const val = Number.parseInt(event.target.value);
		if(val){
			setPrevValues({...prevValues,second:0});
		  setSecondval(val);	
		}
		
	}

	// const [adder,setAdder]=React.useState(0);
	// const handleSubmit = (event) => {
	// 	event.preventDefault();
	// 	const value =Number.parseInt(event.target.first.value);
	// 	const adderValue = Number.parseInt(event.target.second.value);
	// 	if(value && adderValue){
	// 		setVal(value + adderValue);
	// 	}

		
	// }
	useEffect(()=>{
		 setTimeout(()=>{
			setFirstval(0);
			setSecondval(0);
		},1000);
	},[result]);
	const handleAdd = (event)=>{
		// const firstvaluevalue =Number.parseInt(event.target.first.value);
		// const seadderValue = Number.parseInt(event.target.second.value);
		// if(value && adderValue){
		// 	setVal(value + adderValue);
		// }
		let res = firstval + secondval;
		// setFirstval(0);
		// setSecondval(0);
		setResult(res);
		

	}
	const handleSubtract = (event)=>{
		// const firstvalue =Number.parseInt(event.target.first.value);
		// const se = Number.parseInt(event.target.second.value);
		// if(value && adderValue){
		// 	setVal(value - adderValue);
		// }
		let res = firstval - secondval;
		setResult(res);
	}
	const handleMultiply = (event)=>{
		// const firstvalue =Number.parseInt(event.target.first.value);
		// const se = Number.parseInt(event.target.second.value);
		// if(value && adderValue){
		// 	setVal(value * adderValue);
		// }
		let res = firstval * secondval;
		setResult(res);
	}
	const handleDivide = (event)=>{
		// const firstvalue =Number.parseInt(event.target.first.value);
		// const se = Number.parseInt(event.target.second.value);
		// if(value && adderValue){
		// 	setVal(value / adderValue);
		// }
		let res = firstval / secondval;
		setResult(res);
	}
		// <form onSubmit={handleSubmit}>

	const handleGeneral = (sign) => {
		console.log(sign);
		
		setPrevValues({first:firstval,second:secondval});
		switch(sign){
			case Plus:
				setResult(firstval + secondval);
				break;
			case Minus:
				setResult(firstval - secondval);
				break;
			case Multiply:
				 
				setResult(firstval * secondval);
				break;
			case Divide:
				 
				setResult(firstval/secondval);
				break;
			default:
				
				return null;
		}
	}

	return (
		<div className="calc">
		<form className='calc-form'>
			
			<label htmlFor="first">
				First: <input type="text" value={firstval} onChange={placeFirstVal} name="first"/>
			</label>
			<br/>
			<label htmlFor="second">
				Second: <input type="text" value={secondval} name="second" onChange={placeSecondVal}/>
			</label>
			<br/>
			<div className="calc-buttons">
			{/* <button type="button" onClick={handleAdd}>Add</button>
			<button type="button" onClick={handleSubtract}>Subtract</button>
			<button type="button" onClick={handleMultiply}>Multiply</button>
			<button type="button" onClick={handleDivide}>Divide</button> */}
			<button type="button" onClick={() => handleGeneral(Plus)}>Add</button>
			<button type="button" onClick={() => handleGeneral(Minus)}>Subtract</button>
			<button type="button" onClick={() => handleGeneral(Multiply)}>Multiply</button>
			<button type="button" onClick={() => handleGeneral(Divide)}>Divide</button>
			</div>
		</form>
		<section>
			<p>Your calculation is :</p>
			<ul>
				<li>First Value:{prevValues.first}</li>
				<li>Second value:{prevValues.second}</li>
				<li>Operation:</li>
				<li>Result:<span style={{backgroundColor:"gray",display:'inline-block',margin:'5px'}}>{result}</span></li>
			</ul>
		</section>
		</div>
	);
}