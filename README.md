
## Welcome to the Stock Tracker Application
Powered by React

[Link to project on Github](https://github.com/jcgould48/stock-tracker-frontend)

This app was made possible by the 

* [IEX Cloud Financial Data API](https://iexcloud.io)
* [Bootstrap](https://getbootstrap.com/)
* [Semantic UI](https://semantic-ui.com/)

* [React-Chartjs-2](https://github.com/jerairrest/react-chartjs-2)


To learn more:

[React Documentation](https://create-react-app.dev/docs/getting-started/)

  [IEX API Documentation](https://iexcloud.io/docs/api/)


## About Stock Tracker App-
This application allows users to track basic information around the US based stock market:
* Company Name
* Listing Index
* Current Stock Price
* Current Price Change
* 30-Day Stock Price Graph
* Recent News

At this time any user can use the application without registering.  They can simply download the app from github and have at it.  

### Functionality:
When both the backend and frontend are started, the user can type in the desired stock ticker into the search bar and hit 'Search'.  If the ticker is correct, all of the corresponding information for the stock of that company will be displayed.  

The user can choose to save the stock by clicking the 'Add To Watch List' button.  The user can also view the current updated watch list by clicking the show favorites toggle at the top of the page.  Clicking the toggle again will hide the saved stocks.  Clicking the red 'X' will delete stocks from the list.


Utilized Backend Routes:

Route | Method| Description 
------------ | ------------- | -------------
|||
/stocks| Post | Adds the capability to save favorite stocks to the data base which can be later recalled
/stock| Get | Recall method to populate the 'Favorites' list with saved stocks
/stock/:id | Delete | Allows user the ability to delete a specific stock from the database and subsequently the 'Favorites' list.
|||
|||



***

## Getting started:

1. Fork and clone the front and backend  repository
2. Sign up for a IEX API Key
3. Follow the frontend and backend procedures below

#### Frontend
In the project front-end directory, you can run:

      npm install
      npm start
      Open http://localhost:3000 to view it in the browser.

The page will reload upon edits.


Back-end

In the project back-end directory, you can run:

      npm install
      npm run dev
Runs the server for the app.


Create .env file and populate it with the following.

#### Frontend .env
*REACT_APP_'key name' = The API calls are on the front end through react and so the key name MUST to be in this format.

#### Backend .env
   * PORT = Number of your preferred port.
   * MONGODB_URI = 'Path to your MongoDB storage'
   


## NPM Packages
***

      Front-end

      Axios
      React Chart JS 2
      dotenv


      Back-end 

      express
      morgan
      mongoose
      dotenv
      cors



