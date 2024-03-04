import { classNames, Mods } from '../../lib/classNames/classNames';
import { ButtonHTMLAttributes, memo } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    OUTLINE = 'outline',
    ICON = 'icon',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    disabled?: boolean;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ButtonTheme.OUTLINE,
        disabled,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
