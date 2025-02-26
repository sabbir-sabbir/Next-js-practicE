import {users} from '@/data/users'
export async function GET(){
    return Response.json(users)
}


// POST request
export async function POST(request: Request){
    const user = await request.json() 

    const newUser = {
        id: users.length + 1,
        name: user.name,
        email: user.email,
        age: user.age
    }
    users.push(newUser)
    
    const resData = {
        message: 'User created successfully',
        user: newUser
    }

    return new Response(JSON.stringify(newUser), {
        status: 201,
        headers: {
            'Content-Type': 'application/json'
        }
    })

}


// Patch Request

