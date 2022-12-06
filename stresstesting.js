import http from 'k6/http';
export let options=
{
vus : 1000,
duration: '20s'
}
export default function() {
    let res= http.get('http://localhost:3000')
    //console.log(res.status);
}
