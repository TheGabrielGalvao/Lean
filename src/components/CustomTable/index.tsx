import React from 'react';
import { IUser } from '../../store/ducks/User/types';
import { useHistory } from 'react-router-dom';
import { ButtonGroup, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';

import './styles.css'


interface Props {
    data: IUser[]
    editRequest(user: IUser): void
    removeRequest(user: IUser): void
}

export const CustomTable: React.FC<Props> = ({ data, editRequest, removeRequest }) => {
    const history = useHistory()

    const handleDelete = (user: IUser, event?: MouseEvent) => {
        removeRequest(user)
    }

    const handleEdit = (user: IUser, event?: MouseEvent) => {
        event?.preventDefault()

        editRequest(user)
        history.push("/cadastro")
    }

    return (

        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>CPF</th>
                    <th>Telefone</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr>
                        <td data-label="Nome">{item.nome}</td>
                        <td data-label="Email">{item.email}</td>
                        <td data-label="CPF">{item.cpf}</td>
                        <td data-label="Telefone">{item.telefone}</td>
                        <td data-label="">
                            <ButtonGroup disableElevation variant="contained" >
                                <IconButton onClick={() => handleEdit(item)}>
                                    <CreateIcon />
                                </IconButton>
                                <IconButton onClick={() => handleDelete(item)}>
                                    <DeleteIcon />
                                </IconButton>
                            </ButtonGroup>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
