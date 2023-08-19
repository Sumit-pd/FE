import React from 'react'
import { useSelector } from 'react-redux'

const Data = () => {
    const name = useSelector(state => state.name)
    const age = useSelector(state => state.age)
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "70vh",
            fontSize: "3vh"
        }}>
            Your name {name} aged {age} has been added to student system. You may now exit.
        </div>
    )
}

export default Data
