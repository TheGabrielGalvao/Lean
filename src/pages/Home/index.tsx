import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { bindActionCreators, Dispatch } from 'redux'
import { CustomTable } from '../../components/CustomTable'
import { ApplicationState } from '../../store'
import * as UserActions from '../../store/ducks/User/actions'
import { IUser } from '../../store/ducks/User/types'
import './styles.css'

interface Props {
    isAuthenticated: boolean
    data: IUser[]
    loadRequest(): void
    removeRequest(user: IUser): void
    editRequest(user: IUser): void
}

const Home: React.FC<Props> = ({ data, isAuthenticated, loadRequest, editRequest, removeRequest }) => {
    const history = useHistory()

    useEffect(() => {
        if (!isAuthenticated) {
            history.push("/cadastro")
        }
        loadRequest()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="home">
            <h1>Usuários</h1>

            <CustomTable editRequest={editRequest} removeRequest={removeRequest} data={data} />

        </div>
    )
}


const mapStateToProps = (state: ApplicationState) => ({
    data: state.user.data,
    isAuthenticated: state.auth.isAuthenticated
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(UserActions, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Home)