import { Route, Redirect } from 'react-router-dom';

const MyRoute = ({ component: Component, isClosed, ...rest }) => {

    const isLoggerId = false;

    if (isClosed && !isLoggerId) {
        return (
            <Redirect to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }} />
        );
    }

    return <Route {...rest} component={Component} />
}

export default MyRoute