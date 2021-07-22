import { IconBaseProps } from "react-icons";

export interface INavigation {
    Name?: string
    Caption?: string
    Description?: string
    Icon?: React.ComponentType<IconBaseProps>
    Route?: string
    exact?: boolean
    Component: React.ComponentType<any>
    Items?: INavigation[]
}
