import { Box, Stack } from '@mui/system'
import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom';

function SidebarLayout() {
    return (
        <Box sx={{display:'grid',width:"100vw",height:"100vh",gridTemplateColumns:'20% 80%'}}>
            <Sidebar />
            <Stack width={'100%'} sx={{ backgroundColor: 'rgb(246, 248, 255)' }}>
                <Navbar />
                <Outlet />
            </Stack>
        </Box>
    )
}

export default SidebarLayout