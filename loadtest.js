import http from 'k6/http';
export let options=
{
vus : 50,
duration: '50s'
}
export default function() {
    let res= http.get('http://localhost:3000')
    //console.log(res.status);
}
