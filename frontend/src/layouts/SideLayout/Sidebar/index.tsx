import React from 'react'
import Stack from '@mui/material/Stack';
import AcUnitIcon from '@mui/icons-material/AcUnit';
// import IconText from '../../../components/IconText';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { useAppDispatch } from '../../../app/hooks';
import TypographyText from '../../../components/TypograpgyText';
import { logoutUser } from '../../../features/Auth/auth.action';
function Sidebar() {
    const [open, setOpen] = React.useState(true);
    const data: any = localStorage.getItem('user');
    const result = JSON.parse(data)
    const handleClick = () => {
        setOpen(!open);
    };
    const role = result.role
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    return (
        <Stack width={'100%'} sx={{ borderRight: ' 2px solid rgb(236, 237, 239)' }} gap={6}>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} gap={1} mt={6}>
                <AcUnitIcon sx={{ width: '31px', height: '31px' }} />
                <TypographyText text="Quiz Adda" fontSize="25px" fontWeight="600" />
            </Stack>
            <Stack>
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                ><NavLink to={'/home'} >
                        <ListItemButton sx={{ color: 'black' }}>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </NavLink>
                    {(role === 'Admin') ?
                        <NavLink to={'/dashboard'}>
                            <ListItemButton sx={{ color: 'black' }}>
                                <ListItemIcon>
                                    <DashboardOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Dashboard" />
                            </ListItemButton></NavLink> : <></>}

                    <ListItemButton onClick={async () => {
                        console.log("handlelogout1")
                        const res = await dispatch(logoutUser())
                        if (res)
                            navigate('/')
                    }}>
                        <ListItemIcon>
                            <LogoutOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItemButton>

                </List>
            </Stack>
        </Stack>
    )
}

export default Sidebar;