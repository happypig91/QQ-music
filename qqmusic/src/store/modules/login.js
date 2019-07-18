import { SAVE_TOKEN } from '../type/login';
import { getSession } from '@/utils';

const getToken = () => getSession('token');
export default {
    state: {
        token: getToken() || ""
    },
    mutations: {
        SAVE_TOKEN(state, payload) {
            state.token = payload.token;
        }
    }
}