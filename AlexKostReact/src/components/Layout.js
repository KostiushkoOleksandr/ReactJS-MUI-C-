import { AppBar, Button, Container, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { Outlet, useNavigate } from 'react-router'
import useStateContext from '../hooks/useStateContext'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleIcon from '@mui/icons-material/People';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import LaptopChromebookOutlinedIcon from '@mui/icons-material/LaptopChromebookOutlined';
import Sidebar from './Sidebar';

import InfoIcon from '@mui/icons-material/Info';
import Add from './Add';

export default function Layout() {
    const { resetContext } = useStateContext()
    const navigate = useNavigate()

    const logout = () => {
        resetContext()
        navigate("/")
    }

    const MuiTable = () => {
        navigate("/MuiTable")
    }

    const Result = () => {
        navigate("/Result")
    }

    const About = () => {
        navigate("/About")
    }

    const Resume = () => {
        navigate("/Resume")
    }

    const Schedule = () => {
        navigate("/Schedule")
    }

    return (
        <>
            <AppBar position="static">
                <Toolbar sx={{ width: 1600, m: 'auto' }}>
                    <IconButton>
                        <LaptopChromebookOutlinedIcon />
                    </IconButton>
                    <Typography
                        variant="h5"
                        align="left"
                        sx={{ flexGrow: 1 }}
                        >
                        Alex Kost
                    </Typography>
                    <Button onClick={logout}>Авторизація</Button>
                    <Button onClick={Schedule}>Розклад</Button>
                    {/* <Button onClick={Result}>Назад</Button> */}
                    {/* <Button onClick={MuiTable}>Результати</Button> */}
                    <Tooltip title='Повернутися до результату'>
                    <IconButton onClick={Result}>
                        <ArrowCircleLeftOutlinedIcon />
                    </IconButton>
                    </Tooltip>
                    <Tooltip title='Результати студентів'>
                    <IconButton onClick={MuiTable}>
                        <PeopleIcon />
                    </IconButton>
                    </Tooltip>
                    <Tooltip title='Інформація про додаток'>
                    <IconButton onClick={About}>
                        <InfoIcon  />
                    </IconButton>
                    </Tooltip>
                    <Tooltip title='Профіль користувача'>
                    <IconButton onClick={Resume}>
                        <AccountCircleIcon  />
                    </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
            <Sidebar />
            <Add />
            <Container>
                <Outlet />
            </Container>
        </>
    )
}
