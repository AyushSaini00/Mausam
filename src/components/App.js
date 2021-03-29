import Header from "./Header";
import Search from "./Search";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from "./About";

const App = () => {

    return (
        <Router>
            <div className="App">
                <Header />
                <div className="container">
                    <Switch>
                        <Route exact path="/">
                            <Search />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}
 
export default App;