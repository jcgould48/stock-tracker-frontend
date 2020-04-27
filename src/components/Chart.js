import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class Chart extends Component{
    constructor(){
      super();
      this.state = {
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
        <div className="chart">
  
          <Line
            data={this.props.chartData.map((day)=>{
               return day.close
            })}
            options={{
              title:{
                display:this.props.displayTitle,
                text:this.props.stocks.companyName,
                fontSize:15
              },
              legend:{
                display:this.props.displayLegend,
                position:this.props.legendPosition
              }
            }}
          />
        </div>
      )
    }
  }
  

export default Chart;