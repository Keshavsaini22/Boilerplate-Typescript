import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { getQueTest } from '../../features/Question/question.action';
import { useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { toggleQuestionNo } from '../../features/Question/question.slice';
import Score from './Score';

function TestPage() {
    // const quennumber = useAppSelector((state) => state.quest.number)
    const location = useLocation();
    const [queno, setQuestionno] = useState(0)
    const allquestions: any = useAppSelector((state) => state.quest.allquestions)
    const [score, setscore] = useState<number>(0);
    const [over, setOver] = useState(false);
    const [answer, setAnswer] = React.useState<string>('')
    const { state } = location;
    const item = state.item
    var eachmark = item.eachqMarks;
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getQueTest(item._id));
    }, [])
    console.log(score)
    return (
        <Stack width={'100%'}>
            <Stack gap={4} p={4}>
                <Box sx={{ fontSize: '25px', fontWeight: '700' }}>Welcome To Quiz</Box>
                <Stack gap={1}>
                    <Stack gap={2} fontSize={'20px'} direction={'row'}><Box fontWeight={'600'}>Test Name :</Box> {item.testname}</Stack>
                    <Stack fontSize={'20px'} direction={'column'} sx={{ wordBreak: 'break-word' }}><Box fontWeight={'600'}>Test Instructions: </Box >{item.instructions}</Stack>
                    <Stack gap={2} fontSize={'20px'} direction={'row'}><Box fontWeight={'600'}>Test Duration:</Box>{item.duration}</Stack>
                    <Stack gap={2} fontSize={'20px'} direction={'row'}><Box fontWeight={'600'}>Each question marks :</Box> {item.eachqMarks}</Stack>
                </Stack>
                {!over ?
                    (<Stack gap={2} component={'form'} onSubmit={(e) => {
                        e.preventDefault();
                        if (allquestions[queno].answer === answer) {
                            setscore(a => Number(a) + Number(eachmark))
                            // setscore((prev) => { return (prev + item.eachqMarks).toString })
                        }
                        setQuestionno(queno + 1)
                        if (queno + 1 == allquestions.length) {
                            setOver(true);
                        }
                    }}>
                        <Stack gap={2} direction={'row'}><Box fontWeight={'600'}>Question :</Box> {allquestions[queno]?.question}</Stack>
                        <FormControl >
                            <FormLabel sx={{ fontWeight: '600' }}>Options:</FormLabel>
                            <RadioGroup
                                onChange={(e) => setAnswer(e.target.value)}
                            >
                                {allquestions[queno]?.options?.map((i: any) => (<FormControlLabel value={i} control={<Radio />} label={i} />))}
                            </RadioGroup>
                        </FormControl>
                        <Button variant='contained' type='submit' sx={{ width: '100px' }}>Submit</Button>
                    </Stack>)
                    : (
                        <Score score={score} />
                    )
                }
            </Stack>
        </Stack>
    )
}

export default TestPage
