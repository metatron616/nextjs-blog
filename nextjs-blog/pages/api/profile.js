import { verify } from "jsonwebtoken";

const ProfileHandler = (request, response ) => {
    const {myTokenName} = request.cookies;
    try{
        const profile = verify(myTokenName,'SECRET_WORD_FROM_ENV')
        console.log(profile);
        return response.json({
            userName: profile.userName
        });
    }
    catch(error){
        return response.status(401).json({error: 'invalid token'});
    }

}
 
export default ProfileHandler;