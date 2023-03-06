import { useState, useEffect } from 'react';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styledLogin';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import * as actions from '../../store/modules/auth/actions';
import { useDispatch } from 'react-redux';
import Loading from '../../components/Loading/Loading';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const isLoading = useSelector(state => state.auth.isLoading);
    const auth = useSelector(state => state.auth.token);

    const handleSubmit = (e) => {
        e.preventDefault();

        let formErros = false;

        if (!isEmail(email)) {
            formErros = true;
            toast.error('Email não é válido.');
        }

        if (password.length < 6 || password.length > 50) {
            formErros = true;
            toast.error('Senha inválida');
        }

        if (formErros) return;

        dispatch(actions.loginRequest({ email, password }));
    }

    useEffect(() => {
        if(auth !== false)
        navigate('/');
    }, [auth, navigate])
    
    return (
        <Container>
            <Loading isLoading={isLoading} />

            <h1>Entrar no sistema</h1>

            <Form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu email..."
                />

                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Sua senha..."
                />

                <button type='submit'>Entrar</button>
            </Form>
        </Container>
    )
}

export default Login