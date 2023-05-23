import jwt from "jsonwebtoken";
import {serialize} from "cookie";

const loginHandler = (request,response) => {
    const {userName, password} = request.body;
    let token = {};

    if (userName === 'analista' && password === 'lielv08') {  /// Sustituir por consulta al backent


        token =  jwt.sign({
            exp: Math.floor(Date.now() / 1000) + 60 * 60, //una hora
            userName: 'USER_FROM_DATABASE'
        },'SECRET_WORD_FROM_ENV');
        const serializeToken = serialize('myTokenName', token,{
            httpOnly: true,  //no se puede ver desde el navegador, solo en peticiones http
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict', // none si es un sitio externo
            maxAge: 1000 * 60 * 60, //una hora
            path: "/"
        })
        response.setHeader('Set-Cookie', serializeToken);
        return response.json('login succesfully');
    }
    return response.status(401).json({error: 'invalid username or password'});




}
 
export default loginHandler;