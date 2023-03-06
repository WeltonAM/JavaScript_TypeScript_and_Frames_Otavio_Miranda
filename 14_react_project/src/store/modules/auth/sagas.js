import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';
import { get } from 'lodash';

function* loginRequest({ payload }) {

    try {
        const res = yield call(axios.post, '/tokens', payload);
        yield put(actions.loginSuccess({ ...res.data }));

        toast.success('Bem-vindo!');

        axios.defaults.headers.Authorization = `Bearer ${res.data.token}`;
    } catch (e) {
        toast.error('Usuário ou senha inválidos.');

        yield put(actions.loginFailure());
    }

}

const persistRehydrate = ({ payload }) => {
    const token = get(payload, 'auth.token', '');

    if (!token) return;

    axios.defaults.headers.Authorization = `Bearer ${token}`;
}

function* registerRequest({ payload }) {
    const { id, nome, password, email } = payload;

    try {
        if (id) {
            yield call(axios.put, '/users', {
                nome, email, password
            });

            toast.success('Usuário atualizado.');
            
            yield put(actions.registerSuccess({ nome, email, password }));
        }
    } catch (e) {
        const errors = get(e, 'response.data.errors', []);
        const status = get(e, 'response.status', 0);

        if (errors.length > 0) {
            errors.map(err => toast.error(err))
        } else {
            toast.error('Erro desconhecido.');
        }

        yield put(actions.registerFailure());
    }
}

export default all([
    takeLatest(types.LOGIN_REQUEST, loginRequest),
    takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
    takeLatest(types.REGISTER_REQUEST, registerRequest),
]);