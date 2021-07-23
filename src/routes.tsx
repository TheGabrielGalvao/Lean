import { Route, Switch } from 'react-router-dom'
import Cadastro from './pages/Cadastro'
import Home from './pages/Home'

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cadastro" component={Cadastro} />
        </Switch>
    )
}