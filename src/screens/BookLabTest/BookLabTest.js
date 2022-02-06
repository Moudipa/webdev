import React, { Component } from "react";
import NavigationLayout from "../../components/Nav/NavigationLayout";
import UnderConstruction from "../../assets/images/UnderConstruction.jfif";
import style from "./BookLabTest.module.css";

class BookLabTest extends Component {
  render() {
    return <NavigationLayout> 
      <h1>Book Lab Test</h1>
    <img src={UnderConstruction} alt="Page Under Construction" width="500" height="350"/>
    <p>Page Under Construction</p>
    </NavigationLayout>;
  }
}

export default BookLabTest;
