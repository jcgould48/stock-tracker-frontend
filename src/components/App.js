import React, {Component} from 'react';
import axios from 'axios';
import BusinessNews from './BusinessNews'
import StockInfo from './StockInfo'

class App extends Component{
    constructor(){
        super()
        this.state = {
            stocks: [],
            news: [],
        
        }
    }

loadNews(){
    const apiKey = `pk_a3e3aa5101d349f8bf6fc55a7d0e1fd1 `
        const url = `https://cloud.iexapis.com/stable/stock/XOM/news/last/3?token=${apiKey}`;
        
          axios.get(url).then((news)=>{
               this.setState({news: news.data})
               
    })
}


    loadStocks(){
         
        const apiKey = `pk_a3e3aa5101d349f8bf6fc55a7d0e1fd1 `
        const url = `https://cloud.iexapis.com/stable/stock/XOM/quote?token=${apiKey}`;
        
        axios.get(url).then((stocks)=>{
            this.setState({stocks: stocks.data},()=>{console.log("test...",this.state.stocks)})
        // return this.setState({stocks: stocks.data})
    
        //     const apiKey = `apikey=PZUUFDH2HTMYFP1T`
    // const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&&${apiKey}`;
    // axios.get(url).then((stocks)=>{
    //     this.setState({stocks: stocks.data},()=>{console.log("test...",this.state.stocks)})
    // // return this.setState({stocks: stocks.data})
    
    })
    }
    componentDidMount(){
        this.loadStocks();
        this.loadNews();
     }
    render(){
    return(   
        <div>
            <h1>Hello World</h1>
        <BusinessNews 
        news={this.state.news} />
    <StockInfo
        stocks={this.state.stocks} />
        </div>
    );
    };
};

export default App;