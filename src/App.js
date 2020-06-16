import React, {Component} from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch, Redirect  } from 'react-router-dom';


class App extends Component {

    render() {
        return (

            <Router>
                <div className={'App'}>
                    <Switch>
                        <Route exact path="/" component={Home} />

                        <Route exact path="/">
                        </Route>

                    </Switch>
                </div>
            </Router>

        );
    }
}
export default App;