import React, {Component} from 'react';
import axios from 'axios';
// import fetch from 'node-fetch'
// import cors from 'cors'
// import googleTrends from 'google-trends-api'
import Search from './Search';
import BusinessNews from './BusinessNews';
import StockInfo from './StockInfo';
import SideBar from './SideBar';
import './App.css'

require('dotenv').config()

class App extends Component{
    constructor(){
        super()
        this.state = {
            stocks: [],
            news: [],
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

loadNews(){

    const apiKey = process.env.REACT_APP_IEX_KEY
        const url = `https://cloud.iexapis.com/stable/stock/XOM/news/last/3?token=${apiKey}`;
        
          axios.get(url).then((news)=>{
               this.setState({news: news.data})
               
    })
}


handleSearchSubmit = (event, searchItem) => {
    event.preventDefault();
    this.setState({searchItem: searchItem}, 
        ()=>{console.log('searchNow...',this.state.searchItem)})
        this.componentDidMount()
    }
    
    loadStocks(){
         
        const ticker= this.state.searchItem;
        const apiKey = process.env.REACT_APP_IEX_KEY
        const url = `https://cloud.iexapis.com/stable/stock/${ticker}/quote?token=${apiKey}`;
        
        axios.get(url).then((stocks)=>{
            this.setState({stocks: stocks.data},()=>{console.log("test...",this.state.stocks
            )})
    })
    }
    // handleChange = (event) => {
        //     this.setState({searchTerm: event.target.value}, ()=>{console.log(this.state.searchTerm)})
        
        // };
        
        componentDidMount(){
            this.loadStocks();
            this.loadNews();
            // this.loadGoogleTrends();
        }
        render(){
            return(   
                <div>
            <h1>Hello World</h1>
            {/* <SideBar/> */}

        <div style= {{
marginTop:'100px',
display: 'flex',
justifyContent:'center',
alignItems:'center',
flexDirection:'column',
}}>  
<Search 
handleSearchSubmit= {this.handleSearchSubmit} 
// searchTerm= {this.state.searchTerm}
/>
<hr style={{width: '75' , color: '#3b3b3b', margin : '50px 0'}}/>
</div>



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