import request from '@/utils/request';

export function addMovie(params) {
    const url = '/api/addMovie';
    return request.post(url, params);
}

export function getMovieList(params) {
    const url = '/api/getMovieList';
    return request.get(url, {
        params: params
    });
}