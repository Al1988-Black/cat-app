import { Button, ButtonTheme } from '../../../shared/ui/Button/Button';
import {
    Container,
    ContainerSize,
} from '../../../shared/ui/Container/Container';
import { Section } from '../../../shared/ui/Section/Section';
import cls from './ButtonSection.module.scss';
import { ReactComponent as Like } from '../../../shared/assets/icons/like.svg';

interface ButtonSectionProps {
    className?: string;
    isNotliked: boolean | undefined;
    onLike?: () => void;
    onNext?: () => void;
}

export const ButtonSection = ({
    className,
    isNotliked,
    onLike,
    onNext,
}: ButtonSectionProps) => {
    return (
        <Section padding_top="12px" padding_bottom="24px">
            <Container
                size={ContainerSize.Regular}
                className={cls?.containerabsol}
            >
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={cls?.next}
                    onClick={onNext}
                >
                    Следующий
                </Button>
                {!isNotliked && (
                    <Button
                        theme={ButtonTheme.ICON}
                        className={cls?.icon}
                        onClick={onLike}
                    >
                        <Like />
                    </Button>
                )}
            </Container>
        </Section>
    );
};
