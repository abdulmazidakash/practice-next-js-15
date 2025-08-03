import { headers } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest){
	const reqHeaders = new Headers(request.headers);
	console.log(reqHeaders.get('abc'));

	const userCookie = request.cookies.get('test');
	console.log(userCookie);

	return new Response('<h2>Hello next.js route handlers</h2>', {
		headers: {
			'content-type': 'text/html',
			'Set-Cookie': 'test=12345',
		}
	})
}

