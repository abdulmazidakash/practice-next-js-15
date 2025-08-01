import { users } from "@/data/users"


export async function GET(){
	// return new Response('Hello users route handler')
	return  Response.json(users)
}
