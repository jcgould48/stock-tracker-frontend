import React, {Component} from 'react';
import axios from 'axios';
// import googleTrends from 'google-trends-api'
import Search from './Search';
import BusinessNews from './BusinessNews';
import StockInfo from './StockInfo';
import SideBar from './SideBar';
import Chart from './Chart';
import './App.css'

require('dotenv').config()

class App extends Component{
    constructor(){
        super()
        this.state = {
            stocks: [],
            news: [],
            histPrices:[],
            savedStocks: [],
            searchItem: 'XOM',
            toggle: true,
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

handleToggle=(event)=> {
    event.preventDefault();
    this.setState({
        toggle: !this.state.toggle,
    },()=>{console.log("toggle...",this.state.toggle
    )})
}

loadSaved(){
    const url = '/stocks' //works in conjuction with 'proxy' in package.json
    axios.get(url).then((stocks)=>{
    // return console.log(blogs.data);
    return this.setState({savedStocks: stocks.data})
    })
}

handleSearchSubmit = (event, searchItem) => {
    event.preventDefault();
    this.setState({searchItem: searchItem}, 
        ()=>{console.log('searchNow...',this.state.searchItem)})
        //this.loadStocks();
    }

handleRecallSubmit = (item) => {
    this.setState({searchItem: item})
    }


handleSaveSubmit = (event) => {
    event.preventDefault();
    console.log('Is the save working...',this.state.stocks)
    console.log('Is the save working2...',this.state.stocks.symbol)
    let axiosConfig={
        headers: {
            'Content-Type' : 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*'
        }
    }
    axios.post('/stock', this.state.stocks, axiosConfig)
    .then(()=>{
        this.loadSaved();
    })
}


onDelete= (id)=>{
    axios.delete(`/stock/${id}`).then(()=>{
        this.loadSaved();
    })
}

loadNews=()=>{
    const ticker= this.state.searchItem;
    const apiKey = process.env.REACT_APP_IEX_KEY
    const url = `https://cloud.iexapis.com/stable/stock/${ticker}/news/last/3?token=${apiKey}`;
        
          axios.get(url).then((news)=>{
               this.setState({news: news.data})
               
    })
}

    loadStocks=()=>{
         
        const ticker= this.state.searchItem;
        const apiKey = process.env.REACT_APP_IEX_KEY
        const url = `https://cloud.iexapis.com/stable/stock/${ticker}/quote?token=${apiKey}`;
        
        axios.get(url).then((stocks)=>{
            this.setState({stocks: stocks.data},()=>{console.log("test...",this.state.stocks
            )})
    })
    }

    getChartData=()=>{
        const ticker= this.state.searchItem;
        const apiKey = process.env.REACT_APP_IEX_KEY
        const url = `https://cloud.iexapis.com/stable/stock/${ticker}/chart/1m/20200415?token=${apiKey}`;
        
        axios.get(url).then((prices)=>{
            this.setState({histPrices: prices.data},()=>{console.log("histPrices...",this.state.histPrices
            )})
    })}
    

        componentDidMount(){
            this.loadStocks();
            this.loadNews();
            this.loadSaved();
            this.getChartData();
            // this.loadGoogleTrends();
        }

        componentDidUpdate(prevProps,prevState){
            console.log('s1', prevState.searchItem)
            console.log('s2', this.state.searchItem)
            if(prevState.searchItem !==this.state.searchItem){
                console.log('running')
               this.loadStocks();
               this.loadNews();
               this.loadSaved();
               this.getChartData();
            }
        }


        render(){
            return(   
                <div>
            <h1>Hello World</h1>
            

<div class="ui checkbox">
  <input type="checkbox" name="toggle" onChange = {this.handleToggle}/>
  <label>View Favorites</label>
</div>
{this.state.toggle ? 
(<SideBar
    savedStocks={this.state.savedStocks}
    onDelete={this.onDelete}
    handleSearchSubmit = {this.handleSearchSubmit}
    handleRecallSubmit = {this.handleRecallSubmit}
    />)
: (<Search handleSearchSubmit = {this.handleSearchSubmit} />)
}
{/* <SideBar
            savedStocks={this.state.savedStocks}
            onDelete={this.onDelete}
            handleSearchSubmit = {this.handleSearchSubmit}
            // handleToggle = {this.handleToggle}
            /> */}


    <div className='container'>
<div className='main'><BusinessNews 
news={this.state.news} /></div>

<div className='main'><Chart 
stocks={this.state.stocks} histPrices={this.state.histPrices} /></div>

<div className='main'><StockInfo
handleSaveSubmit = {this.handleSaveSubmit}
stocks={this.state.stocks} />
</div>
</div>
<a href="https://iexcloud.io">Data provided by IEX Cloud</a>
</div>
    
    );
    };
};

export default App;