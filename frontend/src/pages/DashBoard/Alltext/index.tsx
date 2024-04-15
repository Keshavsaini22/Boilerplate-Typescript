import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getTestbyUser } from '../../../features/Test/test.action';
import TestCard from '../../../components/TestCard';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Alltext() {
    const dispatch = useAppDispatch();
    const Alltest = useAppSelector((state) => state.test.alltests)
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getTestbyUser(1));
    }, [])
    if (!Alltest[0]) {
        return (
            <Box sx={{ fontWeight: '600' }}>No test added yet</Box>
        )
    }
    return (
        <Box display={'flex'} gap={2} flexWrap={'wrap'}>
            {Alltest?.map((item: any) => (<Box width={'400px'} gap={1} p={2} sx={{ backgroundColor: 'lightcyan', borderRadius: '5px', cursor: 'pointer', border: 'none' }} component={'button'} 
            onClick={() => {
                navigate('/addquiz', { state: { item } })
            }}>
                <TestCard key={item._id} item={item} />
            </Box>))}
        </Box>
    )
}

export default Alltext
