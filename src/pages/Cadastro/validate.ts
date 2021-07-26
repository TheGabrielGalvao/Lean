import { FormErrors } from "redux-form"
import { IUser } from "../../store/ducks/User/types"

const required = (field: string) => (`O campo ${field} é obrigatório`)


export const validate = (client: IUser) => {
    const errors: FormErrors<IUser> = {}

    if (!client.nome) { errors.nome = required("Nome") }
    if (!client.email) { errors.email = required("Email") }
    if (!client.cpf) { errors.cpf = required("CPF") }
    if (!client.telefone) { errors.telefone = required("Telefone") }

    return errors
}

