import React, { Component } from 'react';
import TableRow from './TableRow';

class StockList extends Component {
  
      tabRow(){
        if(this.props.data){
          return this.props.data.map((item, i) =>{
              return <TableRow obj={item} key={i} />;
          })
        }
      }
      render() {
        return (
            <div className="container">
            <table className="table table-striped">
              <thead>
                <tr>
                  <td>Stock Name</td>
                  <td>Stock Price</td>
                </tr>
              </thead>
              <tbody>
                {this.tabRow()}
              </tbody>
            </table>
        </div>
        );
      }
}
export default StockList;