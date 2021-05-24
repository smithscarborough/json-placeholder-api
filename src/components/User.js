import React, { useEffect, useState } from 'react'

export default function User() {
    const [ data, setData ] = useState([]);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        await fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
            setData(result);
        })
    }


    return (
        <div>
            <h4>User:</h4>
            {
                data.map(user => {
                    return <div>
                        <div>Name: {user.name}</div>
                        <div>Email: {user.email}</div>
                        <div>Website: {user.website}</div>
                        ---
                        </div>
                })
            }
        </div>
    )
}
