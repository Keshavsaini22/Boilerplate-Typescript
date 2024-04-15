import { Box, Stack } from '@mui/material'
import React from 'react'
interface props { key: any; item: any; }
function TestCard(props: props) {
    return (
        <Stack gap={1}>
            <Box sx={{ display: 'flex', gap: 1, fontSize: '20px', fontWeight: '700', wordBreak: 'break-word' }}>Test Name : <Box sx={{ fontWeight: '400' }}>{props.item.testname}</Box></Box>
            <Box sx={{ display: 'flex', gap: 1, flexDirection: 'column', fontSize: '20px', alignItems: 'start', fontWeight: '700', wordBreak: 'break-word' }}>Instructions : <Box sx={{ textAlign: 'left', fontWeight: '400', wordBreak: 'break-word' }}>{props.item.instructions}</Box></Box>
            <Box sx={{ display: 'flex', gap: 1, fontSize: '20px', fontWeight: '700' }}>Duration : <Box sx={{ fontWeight: '400' }}>{props.item.duration}</Box></Box>
            <Box sx={{ display: 'flex', gap: 1, fontSize: '20px', fontWeight: '700' }}>Marks per que : <Box sx={{ fontWeight: '400' }}>{props.item.eachqMarks}</Box></Box>
        </Stack>
    )
}

export default TestCard
