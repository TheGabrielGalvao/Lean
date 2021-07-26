
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import { ApplicationState } from '../../store'
import './styles.css'
import { Button } from '../Button';
import { useHistory, useLocation } from 'react-router-dom';
import { Avatar, Chip } from '@material-ui/core';
import { IUser } from '../../store/ducks/User/types';
import { logoutRequest } from '../../store/ducks/Auth/actions'
import { bindActionCreators } from 'redux';

interface Props {
    isAuthenticated: boolean
    user?: IUser
    logoutRequest(): void
}

const Layout: React.FC<Props> = ({ children, isAuthenticated, user, logoutRequest }) => {
    const history = useHistory()
    const location = useLocation()

    const handleDelete = () => {
        logoutRequest()

        history.push("/cadastro")
    };

    if (isAuthenticated) {
        return (
            <div className="private-layout">
                <div className="buttons">
                    <Chip
                        avatar={<Avatar alt={user?.nome} src="" />}
                        label={user?.nome}
                        onDelete={handleDelete}
                    />
                </div>
                <div className="container">
                    {children}
                    <Button className="btn-float btn-primary"
                        onClick={(location.pathname) === "/" ?
                            () => history.push("/cadastro") :
                            () => history.push("/")}>
                        {(location.pathname) === "/" ? <AddIcon /> : <HomeIcon />}
                    </Button>
                </div>
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
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.data
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ logoutRequest }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Layout)




