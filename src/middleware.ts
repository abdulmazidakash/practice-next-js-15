import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest){

	const response = NextResponse.next();

	const userSetting = request.cookies.get('test');
	if(userSetting){
		console.log(userSetting);
	}else{
		response.cookies.set('abcd', '53453')
	}
	return response;
	// if(request.nextUrl.pathname == '/about'){
	// 	return NextResponse.redirect(new URL('/', request.url));
	// }
}

// export const config = {
// 	matcher: '/about'
// }