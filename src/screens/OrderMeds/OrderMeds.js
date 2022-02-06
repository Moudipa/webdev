import React, { Component } from "react";
import NavigationLayout from "../../components/Nav/NavigationLayout";
import ProductList from "../../components/ProductList";
import styles from "./OrderMeds.module.css";
/*import sampleImage from 'public/logo192.png';*/

class OrderMeds extends Component {
  render() { 
    return (
    <NavigationLayout>
      <label>
    Search Medicine : 
    <input type="text" name="name" width='100%'/>
  </label> <button>Search</button>
     <div className="rowProduct">
       
      
      <div className="col-md-8_product-detail">
        <h3>Dolo-650</h3>
         <img src={'https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} alt="Sample Medicine" width='100px' />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="col-md-2 product-price">
        Rs. 100
      </div>  <button  position='absolute' right='100px'>Add to cart</button>

      <br></br><hr></hr>
      <div className="col-md-8_product-detail">
        <h3>Combiflam</h3>
        <img src={'https://previews.123rf.com/images/olegdudko/olegdudko1511/olegdudko151131609/48732491-medicaci%C3%B3n-.jpg'} alt="Sample Medicine" width='100px' />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="col-md-2 product-price" >
      Rs. 100
      </div> <button>Add to cart</button>
    </div>

     </NavigationLayout>
    );
  }
}
export default OrderMeds;
