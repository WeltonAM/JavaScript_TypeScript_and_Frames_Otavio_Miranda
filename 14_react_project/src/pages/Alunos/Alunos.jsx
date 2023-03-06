import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from '../../services/axios';
import { get } from 'lodash'
import { AlunoContainer, ProfileProfile, NovoAluno } from "./styledAlunos";
import { Container } from "../../styles/GlobalStyles";
import { FaUserCircle, FaEdit, FaWindowClose, FaExclamation } from 'react-icons/fa';
import Loading from "../../components/Loading/Loading";
import { toast } from 'react-toastify';

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

  const handleDeleteEsc = (e) => {
    e.preventDefault();

    const exclamation = e.currentTarget.nextSibling;
    exclamation.setAttribute('display', 'block');
    e.currentTarget.remove();
  }

  const handleDelete = async (e, alunoId, index, alunoNome) => {

    e.persist();

    try {

      setIsLoading(true);
      await axios.delete(`/alunos/${alunoId}`);
      const novosAlunos = [...alunos];
      novosAlunos.splice(index, 1)
      setAlunos(novosAlunos);
      setIsLoading(false);
      toast.success(`Aluno [ ${alunoNome} ] excluido`);
      
    } catch (e) {
      const errors = get(e, 'response.data.errors', []);
      errors.map(error => toast.error(error));
      setIsLoading(false);
    }

  }

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>Alunos</h1>

      <NovoAluno to='/aluno/'>Novo Aluno</NovoAluno>

      <AlunoContainer>
        {alunos && alunos.map((aluno, index) => (
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

            <div className="actions">
              <Link to={`/aluno/${aluno.id}/edit`}> <FaEdit size={16} /></Link>

              <Link onClick={handleDeleteEsc} to={`/aluno/${aluno.id}/edit`}> <FaWindowClose size={16} /></Link>

              <FaExclamation onClick={(e) => handleDelete(e, aluno.id, index, aluno.nome)} size={16} display="none" cursor='pointer' />
            </div>

          </div>
        ))}
      </AlunoContainer>
    </Container>
  )
}

export default Alunos