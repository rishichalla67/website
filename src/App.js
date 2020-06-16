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
                        <Route exact path="/Home" component={Home} />

                        <Route exact path="/">
                            <Redirect to="/Home" />
                        </Route>

                    </Switch>
                </div>
            </Router>

        );
    }
}
export default App;