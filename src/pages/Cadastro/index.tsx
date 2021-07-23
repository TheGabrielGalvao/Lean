import { useState } from "react"
import { connect } from "react-redux"
import { useHistory } from "react-router-dom"
import { bindActionCreators, Dispatch } from "redux"
import { Field, FormErrors, InjectedFormProps, reduxForm } from "redux-form"
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { Button, ReduxFormInput } from "../../components"
import { ApplicationState } from "../../store"
import { IUser } from "../../store/ducks/User/types"
import * as UserActions from '../../store/ducks/User/actions'

import './styles.css'
import { validate } from "./validate"

interface Props {
    user?: IUser
    isAuthenticated: boolean
    saveRequest(user: IUser): void
}

const Cadastro: React.FC<Props & InjectedFormProps<{}, Props>> = ({ handleSubmit, saveRequest, isAuthenticated, user }) => {
    const [validation, setValidation] = useState<FormErrors<IUser>>({})

    const history = useHistory()

    // console.log(user)

    const submit = (data: any) => {
        if (data != null && data !== {} && data !== "") {
            const errors = validate(data)

            if (Object.entries(errors).length > 0) {
                setValidation(errors)
            }
            else {
                saveRequest(data)
                history.push("/")
            }
        }
    }

    return (
        <div className="cadastro">
            <h1>Lean Cadastro</h1>

            <form onSubmit={handleSubmit((fields: any) => submit(fields))} noValidate autoComplete="off">
                <Field
                    className="input"
                    required
                    fullWidth
                    id="nome"
                    name="nome"
                    label="Nome Completo"
                    placeholder="Nome Completo"
                    component={ReduxFormInput}
                    message={validation?.nome}
                />
                <Field
                    className="input"
                    required
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    placeholder="Email"
                    component={ReduxFormInput}
                    message={validation?.email}
                />
                <Field
                    className="input"
                    required
                    fullWidth
                    id="cpf"
                    name="cpf"
                    label="CPF"
                    placeholder="CPF"
                    component={ReduxFormInput}
                    message={validation?.cpf}
                />
                <Field
                    className="input"
                    required
                    fullWidth
                    id="telefone"
                    name="telefone"
                    label="Telefone"
                    placeholder="Telefone"
                    component={ReduxFormInput}
                    message={validation?.telefone}
                />
                <div className="button-group">
                    <Button className="btn-primary">{(isAuthenticated) ? "Salvar" : "Cadastrar"}</Button>
                    {(!isAuthenticated) && (<Button className="btn-primary" disabled>Login <ArrowRightAltIcon /> </Button>)}
                </div>
            </form>
        </div>
    )
}

const form = reduxForm<{}, Props>({
    form: 'user',
    enableReinitialize: true,
    destroyOnUnmount: true,
})(Cadastro)


const mapStateToProps = (state: ApplicationState) => ({
    initialValues: state.user.tmp,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.user.tmp
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(UserActions, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(form)