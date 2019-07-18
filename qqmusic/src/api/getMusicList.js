
import request  from '@/utils/request';

export function getMusicList(){
 return  request.get('/api/getmusiclist')
}
