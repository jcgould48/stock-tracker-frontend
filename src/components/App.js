import React, {Component} from 'react';
import axios from 'axios';
// import fetch from 'node-fetch'
// import cors from 'cors'
// import googleTrends from 'google-trends-api'
import BusinessNews from './BusinessNews';
import StockInfo from './StockInfo';
import SideBar from './SideBar';
import './App.css'

class App extends Component{
    constructor(){
        super()
        this.state = {
            stocks: [],
            news: [],
        
        }
    }

    // loadGoogleTrends(){
    //     googleTrends.realTimeTrends({
    //         geo: 'US',
    //         category: 'all',
    //     }, function(err, results) {
    //         if (err) {
    //            console.log(err);
    //         } else {
    //           console.log('google',
    //           results);
    //         } 
    //     });
    // }

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
        // this.loadGoogleTrends();
     }
    render(){
    return(   
        <div>
            <h1>Hello World</h1>
            <SideBar/>
            <div className='container'>
        <div className='main'><BusinessNews 
        news={this.state.news} /></div>

        <div className='main'><StockInfo
        stocks={this.state.stocks} />
        </div>
        </div>
        </div>
    
    );
    };
};

export default App;