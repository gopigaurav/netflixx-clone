import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
import Login from './Login';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  return (
   
      <Router>
        <Switch>
          <Route path="/login">
            <Login/>
            </Route>
          <Route path="/">
          <div className="app">
<Nav/>
{/* Banner*/}
<Banner />

<Row title = "NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
<Row title = "Trending Now" fetchUrl={requests.fetchTrending}/>
<Row title = "Top Rated" fetchUrl={requests.fetchTopRated}/>
<Row title = "Action Movies" fetchUrl={requests.fetchActionMovies}/>
<Row title = "Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
<Row title = "Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
<Row title = "Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
<Row title = "Documentaries" fetchUrl={requests.fetchDocumentaries}/>

</div>

          </Route>
        </Switch>
      </Router>



  );
}

export default App;
