import { verify } from "jsonwebtoken";
import {serialize} from "cookie";

const logoutHandler = (request,response) => {
    const {myTokenName} = request.cookies;
    if (!myTokenName){
        return response.status(401).json({error: 'No Token'});
    }
    try {
        verify(myTokenName, 'SECRET_WORD_FROM_ENV');
        const serializedToken = serialize('myTokenName', null,{
            httpOnly: true,  //no se puede ver desde el navegador, solo en peticiones http
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict', // none si es un sitio externo
            maxAge: 0, //una hora
            path: "/"
        })
        response.setHeader('Set-Cookie', serializedToken)
        response.status(200).json('Logout successfully');
    } catch (error) {
        response.status(401).json({error: 'invalid token'})
    }

}
 
export default logoutHandler;