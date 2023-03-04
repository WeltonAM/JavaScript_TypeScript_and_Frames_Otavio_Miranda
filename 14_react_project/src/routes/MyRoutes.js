import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Page404 from '../pages/Page404/Page404';
import Aluno from '../pages/Aluno/Aluno';
import Fotos from '../pages/Fotos/Fotos';
import Alunos from '../pages/Alunos/Alunos';
import Register from '../pages/Register/Register';

const MyRoutes = () => {

    // const isLoggerId = false;

    return (
        <Routes>
            <Route path='/' element={<Alunos />} />
            <Route path='/aluno/:id/edit' element={<Aluno />}  />
            <Route path='/aluno/' element={<Aluno />}  />
            <Route  path='/fotos/:id' element={<Fotos />}  />
            <Route path='/login/' element={<Login />} />
            <Route path='/register/' element={<Register />} />
            <Route path='*' element={<Page404 />} />
        </Routes>
    )
}

export default MyRoutes