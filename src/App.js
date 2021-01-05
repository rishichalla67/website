import React, {Component} from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch, Redirect  } from 'react-router-dom';
import Portfolio from "./components/Portfolio";
import { ChakraProvider } from "@chakra-ui/react"

class App extends Component {

    render() {
        return (
            <ChakraProvider>
                <Router>
                    <div className={'App'}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/Portfolio" component={Portfolio}/>

                            <Route exact path="/">
                            </Route>

                        </Switch>
                    </div>
                </Router>
            </ChakraProvider>
        );
    }
}
export default App;