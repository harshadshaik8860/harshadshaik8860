import React , {useState} from 'react';
import {Link , useParams} from 'react-router-dom';

const userlist=[
    {name:"Mohit", mobile:9999999999, city:"pune", age:"30 years"},
    {name:"suresh", mobile:888888888, city:"Delhi", age:"40 years"},
    {name:"Mahesh", mobile:777777777, city:"AP", age:"20 years"},
    {name:"suhesh", mobile:666666666, city:"chennai", age:"49 years"},
    {name:"harsha", mobile:555555555, city:"banglore", age:"55 years"}
];

const HookFour = () =>{
const {userid, city} = useParams();
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                        <h2> Hooks useParam() , useState() example</h2>
                        <h1>Your User id is : {userid} , {city}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <ul className="list-group">
                        <li className="list-group-item active">Available Users</li>
                        {
                            userlist.map((xuser , index)=>{
                                return(
                                <li className="list-group-item"><Link to={`/${index}/${city}/hook4`}>{xuser.name}</Link></li>
                              )
                              })
                        }
                    </ul>
                </div>
                <div className="col-md-7">
                    <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th className="bg-primary text-white">Full Name</th>
                                    <td className="text-success">{userlist[userid].name}</td>
                                </tr>
                                <tr>
                                    <th className="bg-primary text-white">Mobile</th>
                                    <td className="text-success">{userlist[userid].mobile}</td>
                                </tr>
                                <tr>
                                    <th className="bg-primary text-white">Age</th>
                                    <td className="text-success">{userlist[userid].age}</td>
                                </tr>
                                <tr>
                                    <th className="bg-primary text-white">City</th>
                                    <td className="text-success">{userlist[userid].city}</td>
                                </tr>
                            </thead>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default HookFour;