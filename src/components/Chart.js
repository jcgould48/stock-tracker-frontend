import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';




class Chart extends Component{
    constructor(){
      super();
      this.state = {
        chartData:{
            labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
            datasets:[
              {
                label:'Prices',
                data:[ 617594,
                    181045,
                    153060,
                    106519,
                    105162,
                    95072],

                backgroundColor:[
                //   'rgba(255, 99, 132, 0.6)',
                ]
              }
            ]
          }
        // chartData:props.chartData
      }
    }
  
    static defaultProps = {
      displayTitle:true,
      displayLegend: false,
      legendPosition:'right',
      location:'City'
    }
  
    render(){
      return (
          <div>
        <div className="chart">
  
          <Line
            data={{labels: [ 
            //     this.props.histPrices.map((item) => {
            //     return (
                    
            //            item.label
                       
            //     )
            //    }) 

                'Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'
            ],
            datasets:[
              {
                label:'Prices',
                data:[ 

                    // this.props.histPrices.map((item) => {
                    //     return (
                            
                    //            item.close
                               
                    //     )
                    //    }) 
                    617594,
                    181045,
                    153060,
                    106519,
                    105162,
                    95072
                ],

                backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                ]
              }
            ]}}
            options={{
              title:{
                display:this.props.displayTitle,
                text:this.props.stocks.companyName,
                fontSize:35
              },
              legend:{
                display:this.props.displayLegend,
                position:this.props.legendPosition
              }
            }}
          />
        </div>
        {/* {this.props.histPrices.map((item) => {
    return (
        
           <div ><h1>{item.close}</h1></div>
           
    )
   })}  */}
        </div>
      )
    }
  }
  

export default Chart;