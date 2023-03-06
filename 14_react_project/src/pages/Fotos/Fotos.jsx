import { useState, useEffect } from 'react';
import { Title, Form } from './styledFotos';
import { Container } from '../../styles/GlobalStyles';
import Loading from '../../components/Loading/Loading';
import axios from '../../services/axios';
import { useParams } from 'react-router-dom';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/modules/auth/actions'; 

const Fotos = () => {

  const dispatch = useDispatch()
  const { id } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState();
  const [foto, setFoto] = useState();

  const handleChange = async (e) => {
    const foto = e.target.files[0];
    const fotoUrl = URL.createObjectURL(foto);

    setFoto(fotoUrl);

    const formData = new FormData();
    formData.append('aluno_id', id);
    formData.append('foto', foto);

    try {
      setIsLoading(true);

      await axios.post('/fotos/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success('Foto enviada.')
      
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      const { status } = get(err, 'response', '');
      toast.error('Erro ao enviar a foto.');

      if(status === 401) dispatch(actions.loginFailure);
    }
  }

  useEffect(() => {

    const getData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        setFoto(get(data, 'Fotos[0].url'));
        setIsLoading(false);
      } catch (err) {
        toast.error('Erro ao obter imagem');
        setIsLoading(false);
        return navigate('/')
      }
    }

    getData();
  }, [id, navigate]);

  return (
    <Container>
      <Loading setIsLoading={isLoading} />
      <Title>Fotos</Title>

      <Form >
        <label htmlFor="foto">
          {foto ? <img crossOrigin="anonymous" src={foto} alt="Foto" /> : 'Selecionar'}
          <input 
            type="file" 
            id="foto"
            onChange={(e) => handleChange(e)}
          />
        </label>
      </Form>
    </Container>
  )
}

export default Fotos