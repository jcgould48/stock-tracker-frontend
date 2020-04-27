import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import './App.css'



class Chart extends Component{
    constructor(){
      super();
      this.state = {
       
      }
    }
    static defaultProps = {
      displayTitle:true,
    //   displayLegend: false,
    //   legendPosition:'right',
    //   location:'City'
    }
  
    render(){
      return (
          <div>
        <div className="chartCard">
          <Line
            data={{labels:  
                // this.props.histPricesLabel
                ["Apr 24", "Apr 23", "Apr 22", "Apr 21", "Apr 20", "Apr 17", "Apr 16", "Apr 15", "Apr 14", "Apr 13", "Apr 9", "Apr 8", "Apr 7", "Apr 6", "Apr 3", "Apr 2", "Apr 1", "Mar 31", "Mar 30", "Mar 27", "Mar 26", "Mar 25"]

                // 'Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'
            ,
            datasets:[
              {
                label:'Prices',
                data:
                    // this.props.histPrices

                    [44.4, 43.13, 42.6, 40.4, 40.75, 39.88, 40.48, 41, 43, 44.45, 45.46, 41.95, 42.9, 39.88, 41.45, 38.74, 36.86, 38.34, 36.23, 37.13, 37.5, 36.51]
                    // 617594,
                    // 181045,
                    // 153060,
                    // 106519,
                    // 105162,
                    // 95072
                ,

                backgroundColor:[
                //   'rgba(255, 99, 132, 0.6)',
                ]
              }
            ]}}
            options={{
              title:{
                display:this.props.displayTitle,
                text:this.props.stocks.companyName+' 30 Day Stock Price',
                fontSize:15
              },
              legend:{
                display:this.props.displayLegend,
                position:this.props.legendPosition
              }
            }}
          />
        </div>
        </div>
      )
    }
  }
  

export default Chart;