import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ThemeProvider from './context/ThemeProvider'
import Home from "./components/Home";
// import About from "./components/pages/About";
// import Bbia from "./components/pages/Bbia";
// import Post from "./components/pages/Post";
// import SinglePost from "./components/pages/SinglePost";
// import Directory from "./components/pages/Directory";
// import Listing from "./components/pages/Listing";
// import Attraction from "./components/pages/Attraction";

function App() {


  return (
    <>
      {/* <NavBar /> */}
      <ThemeProvider>
        <BrowserRouter>
          <Switch>
            <Route component={Home} path='/' exact />
            {/* <Route component={About} path='/about' />
            <Route component={Bbia} path='/bbia' />
            <Route component={SinglePost} path='/post/:slug' />
            <Route component={Post} path='/post' />
            <Route component={Attraction} path='/attraction/:slug' />
            <Route component={Listing} path='directory/:slug' />
            <Route component={Directory} path='/directory' /> */}
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
