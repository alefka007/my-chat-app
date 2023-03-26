import React from 'react'
import classes from './Button.module.css'

interface ButtonProps extends React.ComponentProps<"button"> {
    children?: string;
    variant: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {

    return (
        <button className={classes.button + ' ' + classes[props.variant]} {...props}>
            {children}
        </button>
    )
}

export default Button
