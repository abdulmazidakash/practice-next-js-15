import { users } from "@/data/users"
import { NextRequest } from "next/server";


export async function GET(request: NextRequest){
	const searchParams = request.nextUrl.searchParams;
	const userName = searchParams.get('username');
	const filteredUsers = userName? users.find(item=> item.username == userName): users
	// return new Response('Hello users route handler')
	return  Response.json(filteredUsers)
}

export async function POST(request: Request){
	const user = await request.json();
	const newUser = {
		id: users.length + 1,
		name: user.name,
		username: user.username,
		email: user.email,
	}
	users.push(newUser)

	const resData = {
		message: 'user created successfully',
		user: newUser
	}
	return new Response(JSON.stringify(resData), {
		headers: {'Content-Type': 'application/json'},
		status: 201,
	})
}