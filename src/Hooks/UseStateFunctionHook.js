import React ,{useState}from 'react'

 function UseStateFunctionHook() {

    const [count , setCount] = useState(0)

    const upDateCount = () => {
        setCount(count + 1) 
    }
    return (
        <div>
            <button onClick={upDateCount}>Click {count}</button>
        </div>
    )
}
export default UseStateFunctionHook
