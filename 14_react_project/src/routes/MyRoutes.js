import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Page404 from '../pages/Page404/Page404';
import Aluno from '../pages/Aluno/Aluno';
import Alunos from '../pages/Alunos/Alunos';
import Register from '../pages/Register/Register';
import { useSelector } from 'react-redux';

const MyRoutes = () => {

    const isLoggerId = useSelector(state => state.auth.isLoggerId);
    console.log(isLoggerId);

    return (
        <Routes>
            <Route path='/' element={<Alunos />} />
            
            <Route path='/aluno/:id/edit' element={isLoggerId ? <Aluno /> : <Navigate to='/'/>} />
            
            <Route path='/aluno/' element={isLoggerId ? <Aluno /> : <Navigate to='/'/>} />
            
            <Route path='/fotos/:id' element={isLoggerId ? <Aluno /> : <Navigate to='/'/>} />

            <Route path='/login/' element={<Login />} isLoggerId={false} />

            <Route path='/register/' element={<Register />} />

            <Route path='*' element={<Page404 />} />
        </Routes>
    )
}

export default MyRoutes