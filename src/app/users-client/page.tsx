"use client"
import { useState, useEffect } from "react"

type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string
};

export default function UsersClient() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState("");
    
    useEffect(()=> {
      async function fetchUsers() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            if(!response.ok) throw new Error("Failed to fetch data");
            const data = await response.json();
            setUsers(data); 
        } catch (err) {
            if(err instanceof Error) {
                setError(err.message);
            } else {
                setError("An unexpected error occurred");
            }
        } finally {
            setLoading(false);
        }
      }
      fetchUsers()
    }, [])

    if (loading) return <div><h1>Loading...</h1></div>
    if(error) return <div>{error}</div>

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <strong>Name:</strong> {user.name}<br/>
                        <strong>Username:</strong> {user.username}<br/>
                        <strong>Email:</strong> {user.email}<br/>
                        <strong>Phone:</strong> {user.phone}
                    </li>
                ))}
            </ul>
        </div>
    );
}
    
