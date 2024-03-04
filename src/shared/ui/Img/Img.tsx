import { CSSProperties, memo, useMemo } from 'react';
import { classNames, Mods } from '../../lib/classNames/classNames';
import cls from './Img.module.scss';

interface ImgProps {
    className?: string;
    src: string;
    width?: string | number;
    height?: string | number;
    alt?: string;
    round?: boolean;
}

export const Img = memo((props: ImgProps) => {
    const { className, src, width, height, alt, round = false } = props;
    const mods: Mods = { [cls.round]: round };

    const styles = useMemo<CSSProperties>(
        () => ({
            width: width || '32px',
            height: height || '32px',
        }),
        [height, width]
    );

    return (
        <img
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Img, mods, [className])}
        />
    );
});
