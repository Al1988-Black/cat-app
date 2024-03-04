import { Container } from '../../../shared/ui/Container/Container';
import { Section } from '../../../shared/ui/Section/Section';
import { Text, TextTheme } from '../../../shared/ui/Text/Text';
import cls from './DescriptionSection.module.scss';

interface DescriptionProps {
    name?: string;
    habit?: string;
    description?: string;
    className?: string;
}

export const DescriptionSection = ({
    className = cls.description,
    name = '',
    habit = '',
    description = '',
}: DescriptionProps) => {
    return (
        <Section padding_bottom="12px" padding_top="24px">
            <Container>
                <Text title={name} text={habit} theme={TextTheme.SECONDARY} />
                <Text text={description} className={className} />
            </Container>
        </Section>
    );
};
