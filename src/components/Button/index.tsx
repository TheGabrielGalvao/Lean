import { HtmlHTMLAttributes } from 'react'

import './styles.css'

interface Props extends HtmlHTMLAttributes<HTMLButtonElement> {
    disabled?: boolean
}

export const Button: React.FC<Props> = ({ children, ...props }) => {
    return (
        <button {...props} >{children}</button>
    )
}