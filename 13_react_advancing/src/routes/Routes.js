import { Switch } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Page404 from '../pages/Page404/Page404';
import MyRoute from './MyRoute';

const Routes = () => {
    return (
        <Switch>
            <MyRoute exact path='/' component={Login} />
            <MyRoute path='*' component={Page404} />
        </Switch>
    )
}

export default Routes