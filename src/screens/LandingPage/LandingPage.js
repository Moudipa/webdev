import React, { Component } from "react";
import Login from "../../components/Login/Login";
import NavigationLayout from "../../components/Nav/NavigationLayout";
import style from "./Landing.module.css";

export class LandingPage extends Component {
  render() {
    return (
      <NavigationLayout>
        <div className={style.container}>
            <div className={style.innerContainer}>
            <div className={style.loginContainer}>
              <Login />
            </div>
          </div>
          <div className={style.welcomeContainer}>
              <div className={style.welcomeInnerContainer}>
                <p className={style.welcomeText1}>Welcome to VAAYU</p>
                <p className={style.welcomeText2}>
                Health care e-Application 
                </p>
                <p className={style.welcomeText3}>
                  Please log in with your email
                  address
                </p>
              </div>
            </div>
        </div>
      </NavigationLayout>
    );
  }
}

export default LandingPage;
