import { Box, Stack } from '@mui/material'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getallTests } from '../../features/Test/test.action';
import TestCard from '../../components/TestCard';
import { useNavigate } from 'react-router-dom';

function Home() {
    const dispatch = useAppDispatch();
    const alltest = useAppSelector((state) => state.test.useralltests)
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getallTests(4));
    }, [])
    if (!alltest[0]) {
        return (
            <Stack width={'100%'}>
                <Stack gap={4} p={4}>
                    <Box sx={{ fontSize: '25px', fontWeight: '700' }}>All Tests</Box>

                    <Box sx={{ fontWeight: '600' }}>No test added yet</Box>

                </Stack>
            </Stack>
        )
    }
    return (

        <Stack width={'100%'}>
            <Stack gap={4} p={4}>
                <Box sx={{ fontSize: '25px', fontWeight: '700' }}>All Tests</Box>
                <Box display={'flex'} gap={2} flexWrap={'wrap'}>
                    {alltest?.map((item: any) => (<Box width={'400px'} gap={1} p={2} sx={{ backgroundColor: 'lightcyan', borderRadius: '5px', cursor: 'pointer', border: 'none' }} component={'button'}
                        onClick={() => {
                            navigate('/quiz', { state: { item } })
                        }}>
                        <TestCard key={item._id} item={item} />
                    </Box>))}
                </Box>
            </Stack>
        </Stack>
    )
}

export default Home
