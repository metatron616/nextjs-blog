import {NextResponse} from 'next/server';
import {jwtVerify} from 'jose'  ;

export const middleware = async (request) => {
    //if (request.nextUrl.pathname.includes("/dashboard")) {
        const tokenCookie = request.cookies.get("myTokenName")
        console.log(tokenCookie);
        const secret = new TextEncoder().encode("SECRET_WORD_FROM_ENV",)
        if (tokenCookie === undefined){
            return NextResponse.redirect(new URL('/login', request.url))
        }
        try {
            const { payload } = await jwtVerify(
                tokenCookie.value, 
                secret
            );
            console.log(payload)
            return NextResponse.next()
        } catch (error) {
            console.log('the error: ' + error);
            return NextResponse.redirect(new URL('/login', request.url));
        }
        //console.log(tokenCookie)
    //}
    //return NextResponse.next()
}

export const config = {
    matcher: ['/dashboard', '/admin/:path*']
}