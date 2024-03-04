import { CSSProperties, ReactNode, useMemo } from 'react';

interface SectionProps {
    className?: string;
    padding_top?: string;
    padding_bottom?: string;
    children: ReactNode;
}

export const Section = ({
    className,
    padding_top,
    padding_bottom,
    children,
}: SectionProps) => {
    const styles = useMemo<CSSProperties>(
        () => ({
            paddingTop: padding_top || '16px',
            paddingBottom: padding_bottom || '16px',
        }),
        [padding_top, padding_bottom]
    );
    return (
        <section style={styles} className={className}>
            {children}
        </section>
    );
};
