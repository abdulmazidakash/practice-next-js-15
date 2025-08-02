import { users } from "@/data/users"


export async function GET(){
	// return new Response('Hello users route handler')
	return  Response.json(users)
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