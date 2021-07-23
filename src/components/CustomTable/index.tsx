import React from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { IUser } from '../../store/ducks/User/types';
import { useHistory } from 'react-router-dom';
import { ButtonGroup, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';

const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        // head: {
        //     backgroundColor: theme.palette.common.black,
        //     color: theme.palette.common.white,
        // },
        // body: {
        //     fontSize: 14,
        // },
    }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }),
)(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});


interface Props {
    data: IUser[]
    editRequest(user: IUser): void
    removeRequest(user: IUser): void
}

export const CustomTable: React.FC<Props> = ({ data, editRequest, removeRequest }) => {
    const classes = useStyles();
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
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Nome</StyledTableCell>
                        <StyledTableCell>Email</StyledTableCell>
                        <StyledTableCell>CPF</StyledTableCell>
                        <StyledTableCell>Telefone</StyledTableCell>
                        <StyledTableCell colSpan={2}></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <StyledTableRow key={row.id}>
                            <StyledTableCell component="th" scope="row">
                                {row.nome}
                            </StyledTableCell>
                            <StyledTableCell>{row.email}</StyledTableCell>
                            <StyledTableCell>{row.cpf}</StyledTableCell>
                            <StyledTableCell>{row.telefone}</StyledTableCell>
                            <StyledTableCell>
                                <ButtonGroup disableElevation variant="contained" >
                                    <IconButton onClick={() => handleEdit(row)}>
                                        <CreateIcon />
                                    </IconButton>
                                    <IconButton onClick={() => handleDelete(row)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </ButtonGroup>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
