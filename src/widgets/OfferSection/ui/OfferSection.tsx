import { Container } from '../../../shared/ui/Container/Container';
import { Img } from '../../../shared/ui/Img/Img';
import { Section } from '../../../shared/ui/Section/Section';
import { Text } from '../../../shared/ui/Text/Text';
import cls from './OfferSection.module.scss';

interface OfferSectionProps {
    name?: string;
    breed?: string;
    image?: string;
    className?: string;
}

export const OfferSection = ({
    className = cls.avatar,
    name = '',
    breed = '',
    image = '',
}: OfferSectionProps) => {
    return (
        <Section className={''}>
            <Container flex>
                <Img src={image} round className={className} alt="" />
                <Text title={name} text={breed} />
            </Container>
        </Section>
    );
};
