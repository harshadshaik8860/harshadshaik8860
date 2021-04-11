import React from 'react';

const userlist =["Harish", "somesh", "suhesh", "Mahesh", "Suresh", "Rajesh", "vignesh", "Girish", "Fayaz"];

const UserList = () =>{
    return(
        <div>
            <h1 align="center">Available Userlist : {userlist.length}</h1>

            {
                userlist.map((user ,index)=>{
                    return(
                        <label className="link">{index+1} . {user}</label>
                    );
                })
            }
            
        </div>
    )
}
export default UserList;