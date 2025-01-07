import React from 'react'

export default function Message() {
    const name = "Atharva";
    if (name) 
        return (
            <h1>Hello {name}</h1>
        )
    return (
        <h1>Hello World!</h1>
    )
}
