import React, { useEffect } from 'react'
import { Button, Card, CardContent, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Center from './Center'
import useForm from '../hooks/useForm'
import { createAPIEndpoint, ENDPOINTS } from '../api'
import useStateContext from '../hooks/useStateContext'
import { useNavigate } from 'react-router'
import '../Login.css';

const getFreshModel = () => ({
    name: '',
    email: ''
})

export default function Login() {

    const { context, setContext, resetContext } = useStateContext();
    const navigate = useNavigate()

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(getFreshModel);

    useEffect(() => {
        resetContext()
    }, [])
    const login = e => {
        e.preventDefault();
        if (validate())
            createAPIEndpoint(ENDPOINTS.participant)
                .post(values)
                .then(res => {
                    setContext({ participantId: res.data.participantId })
                    navigate('/quiz')
                })
                .catch(err => console.log(err))
    }
    const validate = () => {
        let temp = {}
        temp.email = (/\S+@\S+\.\S+/).test(values.email) ? "" : "Електронна адреса недійсна."
        temp.name = values.name != "" ? "" : "Це поле є обов'язковим."
        setErrors(temp)
        return Object.values(temp).every(x => x == "")
    }
        
    return (
        <Center>
            <article class="earth-demo">
                <div class="earth">
                    <img 
                    src="https://cssanimation.rocks/images/random/earth.png"/>
                </div>
                <div class="moon-container">
                <div class="moon">
                    <img 
                    src="https://cssanimation.rocks/images/random/moon.png"/>
                </div>
                </div>
            </article>
                <CardContent sx={{ textAlign: 'center', width: 400, }}>
                    <Box sx={{
                        '& .MuiTextField-root': {
                            m: 1,
                            width: '90%'
                        }
                    }}>
                        <form noValidate autoComplete="off" onSubmit={login}>
                            <TextField
                                label="Пошта"
                                name="email"
                                value={values.email}
                                onChange={handleInputChange}
                                variant="outlined"
                                {...(errors.email && { error: true, helperText: errors.email })} />
                            <TextField
                                label="Ім'я"
                                name="name"
                                value={values.name}
                                onChange={handleInputChange}
                                variant="outlined"
                                {...(errors.name && { error: true, helperText: errors.name })} />
                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                sx={{ width: '90%' }}>Розпочати</Button>
                        </form>
                    </Box>
                </CardContent>
        </Center> 
    )
}



