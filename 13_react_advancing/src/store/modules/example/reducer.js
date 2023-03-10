import * as types from '../types';

const initialState = {
    botaoClicado: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.BOTAO_CLICADO_SUCCESS: {
            console.log('Sucesso!');
            const newState = { ...state };
            newState.botaoClicado = !newState.botaoClicado;
            console.log(newState);
            return newState;
        }

        case types.BOTAO_CLICADO_FAILURE: {
            console.log('Deu erro!');
            return state
        }

        case types.BOTAO_CLICADO_REQUEST: {
            console.log('Estou fazendo a requisição.');
            return state;
        }

        default:
            return state;
    };
}

export default reducer;