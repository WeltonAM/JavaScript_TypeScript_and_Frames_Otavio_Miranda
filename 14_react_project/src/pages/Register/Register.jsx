import { useState, useEffect } from 'react';
import { Form } from './styledRegister';
import { Container } from '../../styles/GlobalStyles';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import Loading from '../../components/Loading/Loading';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/modules/auth/actions';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const id = useSelector(state => state.auth.user.id);
  const nomeStored = useSelector(state => state.auth.user.nome);
  const emailStored = useSelector(state => state.auth.user.email);
  const isLoading = useSelector(state => state.auth.user.isLoading);
  

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {

    if (!id ) return;

    setNome(nomeStored);
    setEmail(emailStored);

  }, [id, nomeStored, emailStored]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formErros = false;

    if (nome.length < 3 || nome.length > 255) {
      formErros = true;
      toast.error('Nome deve ter entre 3 e 255 caracteres');
    }

    if (!isEmail(email)) {
      formErros = true;
      toast.error('Email não é válido.');
    }

    if (!id && (password.length < 6 || password.length > 50)) {
      formErros = true;
      toast.error('Senha deve ter entre 6 e 50 caracteres');
    }

    if (formErros) return;

    dispatch(actions.registerRequest({ nome, email, password, id }));

    if(!id){
      return navigate('/login');
    }
    
    return navigate('/');
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>{id ? (
        'Editar usuário'
      ) : (
        'Crie uma conta'
      )}</h1>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label htmlFor="password">
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type='submit'>{id ? ('Salvar') : ('Criar')}</button>
      </Form>
    </Container>
  )
}

export default Register