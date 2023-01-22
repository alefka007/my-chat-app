import React from 'react'
import classes from './Button.module.css'

interface ButtonProps extends React.ComponentProps<"button"> {
    children?: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...ButtonProps }) => {
    return (
        <button className={classes.button} {...ButtonProps}>
            {children}
        </button>
    )
}

export default Button
