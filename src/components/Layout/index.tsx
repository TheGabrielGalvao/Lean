
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import { ApplicationState } from '../../store'
import './styles.css'
import { Button } from '../Button';
import { useHistory, useLocation } from 'react-router-dom';

interface Props {
    isAuthenticated: boolean
}

const Layout: React.FC<Props> = ({ children, isAuthenticated }) => {
    const history = useHistory()
    const location = useLocation()

    if (isAuthenticated) {
        return (
            <div className="private-layout">
                {children}
                <Button className="btn-float btn-primary"
                    onClick={(location.pathname) === "/" ?
                        () => history.push("/cadastro") :
                        () => history.push("/")}>
                    {(location.pathname) === "/" ? <AddIcon /> : <HomeIcon />}
                </Button>
            </div>
        )
    }

    else {
        return (
            <div className="public-layout">
                <div className="image"></div>
                <div className="container">
                    {children}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    isAuthenticated: state.auth.isAuthenticated
})

const mapDispatchToProps = (dispatch: Dispatch) => { }


export default connect(mapStateToProps, mapDispatchToProps)(Layout)




