import { TextField } from "@material-ui/core"


export const ReduxFormInput: React.FC = (field: any) => {
    return (
        <TextField
            {...field.input}
            required
            error={(!field.message ? false : true)}
            fullWidth
            id={field.id}
            name={field.name}
            label={field.label}
            placeholder={(field.value) ? "" : field.placeholder}
            variant={field.variant}
            helperText={field.message}
            className={field.className}
        />
    )
}
