import { myAxios } from './fetchData';
import { URL } from './url';

const response = myAxios.get(URL)
    .then(response => console.log(response))
    .catch(err => console.log(err));

console.log(response);
