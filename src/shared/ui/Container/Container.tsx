import { ReactNode } from 'react';
import { classNames, Mods } from '../../lib/classNames/classNames';
import cls from './Container.module.scss';

interface ContainerProps {
    className?: string;
    size?: ContainerSize;
    flex?: boolean;
    children?: ReactNode;
}

export enum ContainerSize {
    FULL = 'full',
    Regular = 'regular',
}

export const Container = (props: ContainerProps) => {
    const { className, children, flex, size = ContainerSize.Regular } = props;
    const mods: Mods = {
        [cls[size]]: true,
        [cls.flex]: flex,
    };

    return (
        <div className={classNames(cls.Container, mods, [className])}>
            {children}
        </div>
    );
};
