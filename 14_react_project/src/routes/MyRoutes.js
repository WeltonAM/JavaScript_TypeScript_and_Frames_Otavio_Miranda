import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Page404 from '../pages/Page404/Page404';
import Aluno from '../pages/Aluno/Aluno';
import Alunos from '../pages/Alunos/Alunos';
import Fotos from '../pages/Fotos/Fotos';
import Register from '../pages/Register/Register';
import { useSelector } from 'react-redux';

const MyRoutes = () => {

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    return (
        <Routes>
            <Route path='/' element={<Alunos />} />
            
            <Route path='/aluno/:id/edit' element={isLoggedIn ? <Aluno /> : <Navigate to='/login'/>} />
            
            <Route path='/aluno/' element={isLoggedIn ? <Aluno /> : <Navigate to='/login'/>} />
            
            <Route path='/fotos/:id' element={isLoggedIn ? <Fotos /> : <Navigate to='/login'/>} />

            <Route path='/login/' element={<Login />} />

            <Route path='/register/' element={<Register />} />

            <Route path='*' element={<Page404 />} />
        </Routes>
    )
}

export default MyRoutes