import React,{useReducer} from 'react';
import RedButton from "./RedButton";

const Operations={
    ADD:'ADD',
    SUBTRACT:'SUBTRACT',
    MULTIPLY:'MULTIPLY',
    DIVIDE:'DIVIDE'
}

function calcReducer(state,action){
    switch (action.type) {
        case Operations.ADD:
            return {...state,result:state.result  + action.qty, currentValue:0};
        case Operations.SUBTRACT:
            return {...state,result:state.result  - action.qty, currentValue:0};
        case Operations.MULTIPLY:
            return {...state,result:state.result  * action.qty, currentValue:0};
        case Operations.DIVIDE:
            return {...state,result:state.result  / action.qty, currentValue:0};
        case 'VAL':
            return {...state,previousValue:action.qty}
        default:
            break;
    }
}
const initialState ={
    currentValue:0,
    result:0,
    previousValue:0,
}
export default function CalcRed(){
    const [state,dispatch] = useReducer(calcReducer,initialState);
    // const [val,setVal] = React.useState(0);
    // const placeVal = event => {
    //     const val = Number.parseInt(event.target.value);
    //     if(val){
    //         setVal(val);
    //     }
    // }
    // 
    return (
        <main>
            <section>
                <label htmlFor='numInput'>
                    <input type="text" id="numInput" value={state.currentValue} onChange={(e)=> dispatch({type:'VAL',qty: Number.parseInt(e.target.value)})}/>
                </label>
                <hr/>
                <label>{state.previousValue}</label>
            </section>
            <section>
                <button onClick={(e) => dispatch({type:'ADD'})}>+</button>
                <button onClick={(e) => dispatch({type:'SUBTRACT'})}>-</button>
                <button onClick={(e) => dispatch({type:'MULTIPLY'})}>*</button>
                <button onClick={(e) => dispatch({type:'DIVIDE'})}>/</button>
                {/* <RedButton symb='-'/>
                <RedButton symb='*'/>
                <RedButton symb='/'/> */}
            </section>
            <section></section>
        </main>
    )
}