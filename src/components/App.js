import React, {Component} from 'react';
import axios from 'axios';
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
            histPricesLabel:[],
            savedStocks: [],
            searchItem: 'XOM',
            toggle: false,
        }
    }

handleToggle=()=> {
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
        const url = `https://cloud.iexapis.com/stable/stock/${ticker}/chart/1m?token=${apiKey}`;
        this.setState({histPrices: [],
            histPricesLabel:[]
        })
        axios.get(url).then((prices)=>{
            prices.data.map((item)=>{
                let updatedPrices = [...this.state.histPrices,item.close];
                let updatedLabel = [...this.state.histPricesLabel, item.label];
                 this.setState({
            histPrices: updatedPrices,
            histPricesLabel: updatedLabel,
        }, ()=> {console.log('Got chart data?',this.state.histPrices, this.state.histPricesLabel)})
            })
        })
}
    

        componentDidMount(){
            this.loadStocks();
            this.loadNews();
            this.loadSaved();
            this.getChartData();
         
        }

        componentDidUpdate(prevProps,prevState){
            // console.log('s1', prevState.searchItem)
            // console.log('s2', this.state.searchItem)
            if(prevState.searchItem !==this.state.searchItem){
               this.loadStocks();
               this.loadNews();
               this.loadSaved();
               this.getChartData();
            }
        }


        render(){
            return(  
                <div> 

                <div className='header'>
            <h1 style={{ fontFamily: 'Baskerville-Bold', fontSize:'50px' }}>Stock Tracker</h1>
            
<div className="field">         
<div className="ui toggle checkbox">
  <input type="checkbox" name="toggle" onChange = {this.handleToggle}/>
  <label>View Favorites</label>
</div>
</div>
</div> 
<br></br>
{this.state.toggle ? 
(<SideBar
    savedStocks={this.state.savedStocks}
    onDelete={this.onDelete}
    handleRecallSubmit = {this.handleRecallSubmit}
    />)
: (<nav className="navbar navbar-dark bg-dark" style={{height:'55px'}}></nav>)
}
<div className='search'>
<Search  className ='search' handleSearchSubmit = {this.handleSearchSubmit} />
</div>
<br></br>
<nav className="navbar navbar-dark bg-dark" style={{height:'2px'}}></nav>
<br></br>
<hr style={{width: '40%', marginLeft:'auto', marginRight: 'auto'}}/>
<div className='myContainer'>
    <div className='main stockInfo'><StockInfo
    handleSaveSubmit = {this.handleSaveSubmit}
    stocks={this.state.stocks} />
    </div>
<br></br>
    <div className='main chart'><Chart 
    stocks={this.state.stocks} 
    histPrices={this.state.histPrices} 
    histPricesLabel={this.state.histPricesLabel} 
    />
    </div>
</div>
<br></br>
<hr style={{width: '60%', marginLeft:'auto', marginRight: 'auto'}}/>
<hr style={{width: '60%', marginLeft:'auto', marginRight: 'auto'}}/>

<div className='newsContainer'>

<div className='main businessNews'><BusinessNews 
news={this.state.news} />
</div>
</div>
<a href="https://iexcloud.io">Data provided by IEX Cloud</a>
</div>
    
    );
    };
};

export default App;