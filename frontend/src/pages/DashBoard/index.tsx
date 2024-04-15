import { Box, Button, Stack, TextField } from '@mui/material'
import React, { SetStateAction, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { createTest } from '../../features/Test/test.action'
import { toggleSuccess } from '../../features/Test/test.slice'
import { useNavigate } from 'react-router-dom'
import Alltext from './Alltext'

function Dashboard() {
    const [name, setname] = useState('')
    const [duration, setduration] = useState('')
    const [instruction, setinst] = useState('')
    const [marks, setMARKS] = useState('')
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const success = useAppSelector((state) => state.test.success)
    const item = useAppSelector((state) => state.test.test)

    useEffect(() => {
        if (success) {
            alert(`Test is created`)
            navigate('/addquiz', { state: { item } })
            dispatch(toggleSuccess())
        }
    }, [success])
    const handleTestSubmit = (e: any) => {
        e.preventDefault();
        const data = {
            testname: name, duration: duration,
            instructions: instruction, eachqMarks: marks
        }
        console.log('✌️data --->', data);
        dispatch(createTest(data));
        setname('')
        setMARKS('')
        setduration('')
        setinst('')
    }
    return (
        <Stack width={'100%'}>
            <Stack gap={4} p={4}>
                <Box sx={{ fontSize: '25px', fontWeight: '700' }}>Create Test</Box>
                <Stack gap={2} component={'form'} onSubmit={handleTestSubmit}>
                    <TextField onChange={(e) => setname(e.target.value)} value={name} id="outlined-basic" label="Test Name" variant="outlined" />
                    <TextField onChange={(e) => setinst(e.target.value)} value={instruction} id="outlined-basic" label="Instructions" variant="outlined" />
                    <TextField onChange={(e) => setduration(e.target.value)} value={duration} id="outlined-basic" label="Duration of Test" variant="outlined" />
                    <TextField onChange={(e) => setMARKS(e.target.value)} value={marks} id="outlined-basic" label="Marks for each question" variant="outlined" />
                    <Button sx={{ width: '100px' }} variant='contained' type='submit'>Submit</Button>
                </Stack>
                <Box sx={{ fontSize: '25px', fontWeight: '700' }}>All tests</Box>
                <Alltext />
            </Stack>
        </Stack>
    )
}

export default Dashboard
