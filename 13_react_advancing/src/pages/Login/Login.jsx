import { Title } from './styledLogin';
import { Container } from '../../styles/GlobalStyles';
import { useDispatch } from 'react-redux';

const Index = () => {

    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();

        dispatch({
            type: 'BOTAO_CLICADO',
            // payload: { email, senha },
        });
    }

    return (
        <Container>
            <Title isRed={true} >
                Login
                <small>Lorem</small>
            </Title>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vitae minima perspiciatis aliquam numquam assumenda consectetur. Fugit ab nam enim praesentium aut debitis consequatur provident, modi suscipit deserunt, laborum repellendus.
            </p>

            <button onClick={handleClick}>Enviar</button>

        </Container>
    )
}

export default Index