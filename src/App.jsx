import { useState } from 'react'
import VeCHAGPT from './App.css'
import { VeCHAT } from './VeCHAT.jsx'

const users = [
    {
        userName: 'CPU369',
        name: 'Daniel Mora',
        isFollowing: false
    },
    {
        userName: 'lelott',
        name: 'Saul Mora',
        isFollowing: false
    },
    {
        userName: 'elonmusk',
        name: 'Elon Musk',
        isFollowing: false
    },
    {
        userName: 'Meta',
        name:'Mark Zuckerberg',
        isFollowing: false
    }
]

export function App ( ) {    
    return (
        <section className='App'>
            {
                users.map(user => {
                    const { userName, name, isFollowing } = user
                    return (
                        <VeCHAT
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </VeCHAT>
                    )
                })
            } 
            <button onClick={() => setState(state + 1)}></button>
        </section>
    )
}