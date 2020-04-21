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
    var url = 'http://newsapi.org/v2/everything?' +
    'q=microsoft&' +
    'from=2020-04-20&' +
    'sortBy=popularity&' +
    'totalResults=4&'+
          'apiKey=fab90656a6474ea1986d70a75d676122';


          axios.get(url).then((news)=>{
              console.log(news.data.articles);
               this.setState({news: news.data.articles},()=>{console.log("test...",Array.isArray(this.state.news))})
               
    })
}


    loadStocks(){
    const apiKey = `apikey=PZUUFDH2HTMYFP1T`
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&&${apiKey}`;
    axios.get(url).then((stocks)=>{
        this.setState({stocks: stocks.data},()=>{console.log("test...",this.state.stocks)})
    // return this.setState({stocks: stocks.data})
    
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