import './styles/tailwind.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import BlogPost from "./components/pages/BlogPost";
import SingleBlogPost from "./components/pages/SingleBlogPost";
import Business from "./components/pages/Business";
import SingleBusiness from "./components/pages/SingleBusiness";
import NavBar from "./components/pages/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={SingleBlogPost} path='/blog/:slug' />
        <Route component={BlogPost} path='/blog' />
        <Route component={SingleBusiness} path='business/:slug' />
        <Route component={Business} path='/business' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
