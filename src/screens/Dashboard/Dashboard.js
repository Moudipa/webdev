import React, { Component } from "react";
import NavigationLayout from "../../components/Nav/NavigationLayout";

export class Dashboard extends Component {
  render() {
    return (
      <NavigationLayout>
        <div><h2>Dashboard</h2></div>

        <div><h2>Active Transactions :</h2></div>

        <div> <table border>
          <th><tr>No Active transactions</tr></th>
         
        </table>

        </div>

        
      </NavigationLayout>
    );
  }
}

export default Dashboard;
