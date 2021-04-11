import React ,{Component} from 'react';

const product =[
    {name:"Apple", Price:"200", Qty:"3"},
    {name:"Mobile", Price:"2000", Qty:"3"},
    {name:"car", Price:"200000", Qty:"1"},
    {name:"laptop", Price:"20000", Qty:"1"},
    {name:"Mouse", Price:"300", Qty:"3"},
    {name:"House", Price:"20000000", Qty:"1"}
];
class Register extends Component{
    render(){
        return(
            <div className="container mt-3">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <h1 className="text-center text-success">Static Multi Array</h1>
                    <table className="table table-bordered mt-3 table-hover table-sm">
                        <thead>
                            <tr className="text-primary text-center">
                                <th>SI.No</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                product.map((xitem , index)=>{
                                    return(
                                        <tr key={index} className="text-center">
                                            <td>{index}</td>
                                            <td>{xitem.name}</td>
                                            <td>{xitem.Price}</td>
                                            <td>{xitem.Qty}</td>
                                            <td>{xitem.Price * xitem.Qty}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-md-2"></div>
            </div>
            </div>
        );
    }
}
export default Register;