import { Container } from '../../styles/GlobalStyles';

const Page404 = () => {
    return (
        <Container style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '300px'}}>
            <h1 style={{marginBottom: '40px'}}>Page 404</h1>
            <p>Essa página não existe!</p>
        </Container>
    )
}

export default Page404