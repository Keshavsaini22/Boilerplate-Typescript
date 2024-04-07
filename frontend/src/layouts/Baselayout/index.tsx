import React from 'react'
import { Outlet } from 'react-router-dom'

function Baselayout() {
    return (
        <>
            <Outlet />
            Hello
        </>
    )
}

export default Baselayout