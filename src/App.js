import './styles/tailwind.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/pages/Home";
import Bbia from "./components/pages/Bbia"
import Directory from "./components/pages/Directory";
import Listing from "./components/pages/Listing";
import Blog from "./components/pages/Blog";
import Post from "./components/pages/Post";
import Attractions from "./components/pages/Attractions";
import Attraction from "./components/pages/Attraction";

function App() {


  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path='/' exact />

        <Route component={Listing} path='/directory/:slug' />
        <Route component={Directory} path='/directory' />

        <Route component={Attraction} path='/attractions/:slug' />
        <Route component={Attractions} path='/attractions' />

        <Route component={Post} path='/blog/:slug' />
        <Route component={Blog} path='/blog' />
        
        <Route component={Bbia} path='/bbia' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
