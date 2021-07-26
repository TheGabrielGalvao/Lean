import { useState } from "react"
import { connect } from "react-redux"
import { useHistory } from "react-router-dom"
import { bindActionCreators, Dispatch } from "redux"
import { Field, FormErrors, formValueSelector, InjectedFormProps, reduxForm } from "redux-form"
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { Button, ReduxFormInput } from "../../components"
import { ApplicationState } from "../../store"
import { IUser } from "../../store/ducks/User/types"
import { saveRequest } from '../../store/ducks/User/actions'
import { loginRequest } from '../../store/ducks/Auth/actions'

import './styles.css'
import { validate } from "./validate"

interface Props {
    users: IUser[]
    formState?: IUser
    isAuthenticated: boolean
    saveRequest(user: IUser, isAuthenticated: boolean): void
    loginRequest(user: IUser): void
}

enum ESubmitMode {
    CADASTRO = "Cadastro",
    LOGIN = "Login"
}

const Cadastro: React.FC<Props & InjectedFormProps<{}, Props>> = ({ handleSubmit, saveRequest, loginRequest, isAuthenticated, formState, users }) => {
    const [validation, setValidation] = useState<FormErrors<IUser>>({})
    const [submitMode, setSubmitMode] = useState<ESubmitMode>(ESubmitMode.CADASTRO)
    const [user, setUser] = useState<IUser>({
        id: 0,
        nome: "",
        email: "",
        cpf: "",
        telefone: ""
    })

    const history = useHistory()

    const submit = (data: any) => {
        if (data != null && data !== {} && data !== "") {
            const errors = validate(data)

            if (Object.entries(errors).length > 0) {
                setValidation(errors)
            }
            else {
                if (submitMode === ESubmitMode.CADASTRO) {
                    saveRequest(data, isAuthenticated)
                }
                if (submitMode === ESubmitMode.LOGIN) {
                    loginRequest(user)
                }
                history.push("/")
            }
        }
    }

    const handleChange = () => {
        if (formState?.nome && formState?.email && formState?.cpf && formState?.telefone && !isAuthenticated) {
            const usr = users.find(x => x.nome == formState?.nome && x.email == formState?.email && x.cpf == formState?.cpf && x.telefone == formState?.telefone)

            if (usr) {
                setUser(usr)
                setSubmitMode(ESubmitMode.LOGIN)
            }

            if (!usr) {
                setSubmitMode(ESubmitMode.CADASTRO)
            }
        }
    }

    // const filter = (user: any) => {
    //     return (x.nome === formState?.nome && x.email === formState?.email && x.cpf === formState?.cpf && x.telefone === formState?.telefone)
    // }


    return (
        <div className="cadastro">
            <h1>{`Lean ${submitMode}`}</h1>

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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
                />
                <div className="button-group">
                    <Button className="btn-primary" disabled={(submitMode === ESubmitMode.LOGIN)}>{(isAuthenticated) ? "Salvar" : "Cadastrar"}</Button>
                    {(!isAuthenticated) && (<Button className="btn-primary" disabled={(submitMode === ESubmitMode.CADASTRO)}>Login <ArrowRightAltIcon /> </Button>)}
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

const selector = formValueSelector('user')

const mapStateToProps = (state: ApplicationState) => ({
    users: state.user.data,
    initialValues: state.user.tmp,
    isAuthenticated: state.auth.isAuthenticated,
    formState: {
        nome: selector(state, 'nome'),
        email: selector(state, 'email'),
        cpf: selector(state, 'cpf'),
        telefone: selector(state, 'telefone'),
    }
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ saveRequest, loginRequest }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(form)