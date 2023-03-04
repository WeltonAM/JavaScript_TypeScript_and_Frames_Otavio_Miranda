import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';

const requisicao = () => new Promise((res, rej) => {
    setTimeout(() => {
        res();
    }, 600);
});

function* exampleRequest() {
    try {
        yield call(requisicao);
        yield put(actions.clicaBotaoSuccess());
    } catch {
        toast.error('Não foi possível recuperar dados da API');
        yield put(actions.clicaBotaoFailure());
    }
}

export default all([
    takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest),
]);