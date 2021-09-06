import {Route, Switch} from 'react-router-dom';
import { Home } from '../pages/home';

export const Routes = () => {
    return (
        <Switch>
            <Route exact path = '/'>
                <Home />
            </Route>
        </Switch>
    )
}