import React ,{useState} from 'react'

export default function UseStateFunctionHookthree() {
    const [name , setName] = useState({"firstname": "","lastname":""})

   const processFirstName =(obj)=>{
       setName({...name, firstname: obj.target.value})
    }
   const processLastName =(obj)=>{
        setName({...name, lastname: obj.target.value})
     }

    return (
        <div>
            <input type="text" value={name.firstname} onChange={processFirstName}/>
            <input type="text" value={name.lastname} onChange={processLastName}/>
            <h2>First Name:- {name.firstname}</h2>
            <h2>Last Name:- {name.lastname}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </div>
    )
}
