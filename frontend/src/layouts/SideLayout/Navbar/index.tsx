import styled from '@emotion/styled';
import { Avatar, Badge, IconButton, InputBase, Stack, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { Box } from '@mui/system';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TypographyText from '../../../components/TypograpgyText';

function Navbar() {
    // var utc = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
    var today = new Date();
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dayIndex = today.getDay();
    var dayName = weekdays[dayIndex];
    var date = today.getDate();
    var month = today.getMonth() + 1;
    var Month
    Month = month < 10 ? '0' + month : month;
    var year = today.getFullYear();
    var todayDateString = dayName + ", " + date + "/" + Month + "/" + year;
    return (
        <Stack height={'90px'} px={1} gap={1} direction={'row'} alignItems={'center'} justifyContent={'space-around'} sx={{ backgroundColor: 'white' }}>
            <Box sx={{ backgroundColor: 'rgb(247, 247, 247)', maxWidth: '400px', width: '40%', height: "44px", borderRadius: '12px' }}>
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1, width: '70%' }}
                    placeholder="Search...."
                    inputProps={{ 'aria-label': 'search....' }}
                />
            </Box>
            <Stack direction={'row'} maxWidth={'20%'} justifyContent={'space-between'} gap={3}>
                <Stack direction={'row'} alignItems={'center'} gap={1}>
                    <CalendarMonthOutlinedIcon sx={{ fontSize: '25px' }} />
                    <TypographyText text={todayDateString} fontSize={'15'} fontWeight={'600'} />
                </Stack>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={3} color="error">
                        <NotificationsIcon sx={{ fontSize: '30px' }} />
                    </Badge>
                </IconButton>
            </Stack>
            <Stack direction={'row'}  alignItems={'center'} gap={1}>
                <Stack>
                    <Box sx={{ textAlign: 'right', fontSize: '16px' }}> Keshav Saini</Box>
                    <Box sx={{ textAlign: 'right', fontSize: '14px' }}>Developer</Box>
                </Stack>
                <Avatar
                    alt=""
                    src=""
                    sx={{ width: 56, height: 56 }}
                />
            </Stack>
        </Stack>
    )
}

export default Navbar