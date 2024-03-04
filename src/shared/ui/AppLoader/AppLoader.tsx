import { memo } from 'react';
import { Container, ContainerSize } from '../Container/Container';
import { Section } from '../Section/Section';
import { Text } from '../Text/Text';

interface AppLoaderProps {
    className?: string;
}

export const AppLoader = memo(({ className }: AppLoaderProps) => (
    <Section>
        <Container size={ContainerSize.Regular}>
            <Text title="Загрузка..." />
        </Container>
    </Section>
));
