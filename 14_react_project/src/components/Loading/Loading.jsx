import { Container } from './styledLoading';

const Loading = ({ isLoading }) => {
    if (!isLoading) return <></>;

    return (
        <Container>
            <div />
            <span>Carregando...</span>
        </Container>
    );
}

export default Loading