import React from 'react'

export const User = ({ id, email, name }) => {
    return (
        <div className='list'>
            <span>{name}</span>
            <span>{email}</span>
        </div>
    )
}
