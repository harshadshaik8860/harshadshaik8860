import React , {Component} from 'react';

const productlist = ["Apple", "Mobile", "Keyboard", "Laptop", "Mouse","Mango"];
class ProductList extends Component{
    render(){
        return(
            <section>
            <h1 align="center" class="text-danger">Product List</h1>
            <p align="center">Welcome to Product List</p>
            {
                productlist.map((xitem , index)=>{
                    return <div className="myproduct" key={index}> {index} . {xitem}</div>
                })
            }
            </section>
        );
    }
}
export default ProductList;