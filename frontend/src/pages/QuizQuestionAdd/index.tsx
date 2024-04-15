import { Box, Button, Dialog, DialogActions, DialogContentText, DialogTitle, Stack, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { createquestion, getQueTest } from '../../features/Question/question.action';
import AllQuestions from './AllQuestions';

function QuizQuestionAdd() {
    const location = useLocation();
    const { state } = location;
    const item = state.item
    const [question, setQue] = useState('');
    const [options, setoption] = useState('');
    const [answer, setanswer] = useState('');
    const dispatch = useAppDispatch();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        dispatch(getQueTest(item._id));
    }, [])
    return (
        <Box width={'100%'}>
            <Stack gap={4} p={4}>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Box sx={{ fontSize: '25px', fontWeight: '700' }}>Create Quix</Box>
                    <Button variant='contained' onClick={handleClickOpen} sx={{ width: '150px' }}>Add question</Button>
                </Stack>
                <AllQuestions testId={item._id} />
            </Stack>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault();
                        const optarr = options.split(',');
                        const data = {
                            testId: item._id,
                            question: question,
                            options: optarr,
                            answer: answer
                        }
                        console.log('✌️data --->', data);
                        dispatch(createquestion(data));
                        setQue('')
                        setoption('')
                        setanswer('')
                        handleClose();
                        // dispatch(getQueTest(item._id));
                    },
                }}
            >
                <DialogTitle>Question</DialogTitle>
                <DialogContentText m={2} sx={{ width: '500px' }}>
                    <Stack gap={2}>
                        <TextField
                            autoFocus
                            required
                            label="Question"
                            fullWidth
                            value={question}
                            onChange={(e) => setQue(e.target.value)}
                        />
                        <TextField
                            autoFocus
                            required
                            label="Options"
                            fullWidth
                            placeholder='Separated by commas'
                            value={options}
                            onChange={(e) => setoption(e.target.value)}
                        />
                        <TextField
                            autoFocus
                            required
                            label="Answer"
                            fullWidth
                            value={answer}
                            onChange={(e) => setanswer(e.target.value)}
                        />
                    </Stack>
                </DialogContentText>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button variant='contained' type="submit">Post</Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default QuizQuestionAdd
