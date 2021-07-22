import { Route, Switch } from 'react-router-dom'
import { mapRoute } from './map'

export const Routes = () => {
    return (
        <Switch>
            {
                mapRoute.map(item => {
                    <Route exact={item.exact} path={item.Route} component={item.Component} />
                })
            }
        </Switch>
    )
}