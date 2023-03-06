import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from '../../services/axios';
import { get } from 'lodash'
import { AlunoContainer, ProfileProfile } from "./styledAlunos";
import { Container } from "../../styles/GlobalStyles";
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';
import Loading from "../../components/Loading/Loading";

const Alunos = () => {

  const [alunos, setAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const res = await axios.get('/alunos');
      setAlunos(res.data);
      setIsLoading(false);
    }
    
    getData();
  }, []);

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>Alunos</h1>

      <AlunoContainer>
        {alunos && alunos.map(aluno => (
          <div key={String(aluno.id)}>
            <ProfileProfile>
              {get(aluno, 'Fotos[0].url', false) ? (
                <img 
                  src={aluno.Fotos[0].url} 
                  alt=''
                  crossOrigin="anonymous"
                />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfileProfile>

            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>

            <Link to={`/aluno/${aluno.id}/edit`}> <FaEdit size={16} /></Link>
            <Link to={`/aluno/${aluno.id}/edit`}> <FaWindowClose size={16} /></Link>
          </div>
        ))}
      </AlunoContainer>
    </Container>
  )
}

export default Alunos