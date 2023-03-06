import { useState, useEffect } from 'react';
import { Form, ProfilePicture } from './styledAluno';
import { Container } from '../../styles/GlobalStyles';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { isEmail, isInt, isFloat } from 'validator';
import Loading from '../../components/Loading/Loading';
import axios from '../../services/axios';
import { get } from 'lodash';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/modules/auth/actions';
import { FaUserCircle, FaEdit } from 'react-icons/fa'

const Aluno = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth.token);

  const { id } = useParams();
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [foto, setFoto] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    if (!auth) {
      toast.error('Usuário fora do sistema');
      navigate('/login');
    }

    if (!id) return;

    const getData = async () => {

      try {
        setIsLoading(true);

        const { data } = await axios.get(`/alunos/${id}`);
        const alunoFoto = get(data, 'Fotos[0].url', '');

        setFoto(alunoFoto);
        setNome(data.nome);
        setSobrenome(data.sobrenome);
        setEmail(data.email);
        setIdade(data.idade);
        setPeso(data.peso);
        setAltura(data.altura);
        setIsLoading(false);

      } catch (err) {
        setIsLoading(false);
        const status = get(err, 'response.status', 0);
        const errors = get(err, 'response.data.errors', []);

        if (status === 400) errors.map(error => toast.error(error));

        return navigate('/');
      }
    }

    getData();
  }, [auth, id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      toast.error('Nome precisa ter entre 3 e 255 caracteres.')
      formErrors = true;
    }

    if (sobrenome.length < 3 || sobrenome.length > 255) {
      toast.error('Nome precisa ter entre 3 e 255 caracteres.')
      formErrors = true;
    }

    if (!isEmail(email)) {
      toast.error('Email inválido.')
      formErrors = true;
    }

    if (!isInt(String(idade))) {
      toast.error('Idade inválida.')
      formErrors = true;
    }

    if (!isFloat(String(peso))) {
      toast.error('Peso inválido.')
      formErrors = true;
    }

    if (!isFloat(String(altura))) {
      toast.error('Altura inválida.')
      formErrors = true;
    }

    if (formErrors) return;

    try {

      if (id) {
        await axios.put(`/alunos/${id}`, {
          nome, sobrenome, email, idade, peso, altura
        });
        toast.success('Aluno editado!');

      } else {
        await axios.post(`/alunos/`, {
          nome, sobrenome, email, idade, peso, altura
        });
        toast.success('Aluno cadastrado!');
      }

      return navigate('/');
    } catch (err) {
      const status = get(err, 'response.status', 0);
      const errors = get(err, 'response.data.errors', []);

      if (errors.length > 0) {
        errors.map(error => toast.error(error))
      } else {
        toast.error("Erro inesperado");
      }

      if (status === 401) dispatch(actions.loginFailure());
    }

  }

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>{id ? id && 'Editar Aluno' : 'Novo Aluno'}</h1>

      {id && (
        <ProfilePicture>
          {foto && foto ? (
            <img src={foto} alt={nome} crossOrigin="anonymous" />
          ) : (
            <FaUserCircle size={100} />
          )}

          <Link to={`/fotos/${id}`}>
            <FaEdit size={15} />
          </Link>
        </ProfilePicture>
      )}

      <Form onSubmit={handleSubmit}>

        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
        />

        <input
          type="text"
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
          placeholder="Sobrenome"
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <input
          type="number"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
          placeholder="Idade"
        />

        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          placeholder="Peso"
          min="0"
          step='any'
        />

        <input
          type="number"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          placeholder="Altura"
          min="0"
          step='0.1'
        />

        <button type='submit'>Enviar</button>
      </Form>
    </Container>
  )
}

export default Aluno