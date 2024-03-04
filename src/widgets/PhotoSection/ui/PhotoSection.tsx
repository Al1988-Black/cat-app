import {
    Container,
    ContainerSize,
} from '../../../shared/ui/Container/Container';
import { Img } from '../../../shared/ui/Img/Img';
import { Section } from '../../../shared/ui/Section/Section';
import cls from './PhotoSection.module.scss';

interface PhotoSectionProps {
    image?: string;
    className?: string;
}

export const PhotoSection = ({
    className = cls.avatar,
    image = '',
}: PhotoSectionProps) => {
    return (
        <Section padding_bottom="0" padding_top="0">
            <Container size={ContainerSize.FULL}>
                <Img
                    src={image}
                    width={'100%'}
                    height={'100%'}
                    className={className}
                    alt=""
                />
            </Container>
        </Section>
    );
};
