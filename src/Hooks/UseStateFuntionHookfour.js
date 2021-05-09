import React from 'react'
import { useState } from 'react'

function UseStateFuntionHookfour() {

    const [items , setItems] = useState([])

    const addItem= ()=>{
        setItems([...items, {
            id : items.length,
            value : Math.floor(Math.random()*10) + 1
        } ])
    }
    return (
        <div>
            <button onClick={addItem}>adding item</button>
            <ul>
                {
                    items.map(item=>{
                        return(
                        <li key={item.id}>{item.value}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default UseStateFuntionHookfour
