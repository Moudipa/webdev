import React, { Component } from "react";
import NavigationLayout from "../../components/Nav/NavigationLayout";
import UnderConstruction from "../../assets/images/UnderConstruction.jfif";

export class Cart extends Component {
    render() {
      return <NavigationLayout>
        <h1>Cart page under construction</h1>
         <img src={UnderConstruction} alt="Page Under Construction" width="500" height="350"/>
         <p>Page Under Construction</p>
      </NavigationLayout>;
    }
  }
  
  export default Cart;