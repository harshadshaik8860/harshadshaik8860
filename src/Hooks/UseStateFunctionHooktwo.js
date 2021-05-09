import React ,{useState}from 'react'

 function UseStateFunctionHooktwo() {
    const initialcount = 0
    const [count , setCount] = useState(initialcount)

    // const Reset = () => {
    //     setCount(initialcount) 
    // }
    // const incrementCount = () => {
    //     setCount(count + 1) 
    // }
    // const decrementCount = () => {
    //     setCount(count - 1) 
    // }
   const incrementFive =()=>{
        for(let i=0; i<5; i++){
            setCount(prevState =>prevState + 1)
        }
    }
    return (
        <div>
            count : {count}
            <button onClick={()=>setCount(initialcount)}>Reset</button>
            <button onClick={()=>setCount(prevState =>prevState + 1)}>Increment</button>
            <button onClick={()=>setCount(prevState =>prevState - 1)}>Decrement</button>
            <button onClick={incrementFive}>Decrement</button>
        </div>
    )
}
export default UseStateFunctionHooktwo