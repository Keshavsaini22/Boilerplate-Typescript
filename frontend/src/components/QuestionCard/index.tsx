import { Box, Button, Dialog, DialogActions, DialogContentText, DialogTitle, IconButton, Menu, MenuItem, Stack, TextField } from '@mui/material';
import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';
import { useAppDispatch } from '../../app/hooks';
import { getQueTest } from '../../features/Question/question.action';

interface props { testId: any; item: any; }
function QuestionCard(props: props) {
    const dispatch = useAppDispatch();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [question, setQueq] = useState(props.item.question);
    const [options, setoptionq] = useState(props.item.options);
    const [answer, setanswerq] = useState(props.item.answer);
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleCloseDia = () => {
        setOpen(false);
    };
    return (
        <Stack p={2} direction={'row'} justifyContent={'space-between'} alignItems={'start'} sx={{ backgroundColor: 'white', borderRadius: '5px' }}>
            <Stack gap={2}>
                <Stack gap={1}>
                    <Box sx={{ fontWeight: 'bold' }}>Question :</Box>
                    <Box>{props.item.question}</Box>
                </Stack>
                <Stack>
                    <Box sx={{ fontWeight: 'bold' }}>Options :</Box>
                    {props.item.options.map((i: any) => <Box>{i}</Box>)}
                </Stack>
                <Stack>
                    <Box sx={{ fontWeight: 'bold' }}>Answer :</Box>
                    <Box>{props.item.answer}</Box>
                </Stack>
            </Stack>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => {
                    handleClickOpen()
                }}>Edit</MenuItem>
                <MenuItem onClick={async () => {
                    try {
                        const token = localStorage.getItem("token");
                        const config = {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        };
                        const res = await axios.delete(
                            `http://localhost:8081/question/${props.item._id}`,
                            config
                        );
                        const output = res.data;
                        dispatch(getQueTest(props.testId));
                        handleClose()
                    }
                    catch (error: any) {
                        console.log("error: ", error.response.data.message);
                    }

                }}>Delete</MenuItem>
            </Menu>

            <Dialog
                open={open}
                onClose={handleCloseDia}
                PaperProps={{
                    component: 'form',
                    onSubmit: async (event: React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault();
                        const str = options.toString()
                        var optarr = str.split(',');

                        const data = {
                            question: question,
                            options: optarr,
                            answer: answer
                        }
                        console.log('✌️data --->', data);
                        try {
                            const token = localStorage.getItem("token");
                            const config = {
                                headers: {
                                    Authorization: `Bearer ${token}`,
                                },
                            };
                            const res = await axios.put(
                                `http://localhost:8081/question/${props.item._id}`, data,
                                config
                            );
                            const output = res.data;
                            dispatch(getQueTest(props.testId));
                            handleClose()
                            handleCloseDia();
                        }
                        catch (error: any) {
                            console.log("error: ", error.response.data.message);
                        }

                    },
                }}
            >
                <DialogTitle>Edit Question</DialogTitle>
                <DialogContentText m={2} sx={{ width: '500px' }}>
                    <Stack gap={2}>
                        <TextField
                            autoFocus
                            required
                            label="Question"
                            fullWidth
                            value={question}
                            onChange={(e) => setQueq(e.target.value)}
                        />
                        <TextField
                            autoFocus
                            required
                            label="Options"
                            fullWidth
                            placeholder='Separated by commas'
                            value={options}
                            onChange={(e) => setoptionq(e.target.value)}
                        />
                        <TextField
                            autoFocus
                            required
                            label="Answer"
                            fullWidth
                            value={answer}
                            onChange={(e) => setanswerq(e.target.value)}
                        />
                    </Stack>
                </DialogContentText>
                <DialogActions>
                    <Button onClick={handleCloseDia}>Cancel</Button>
                    <Button variant='contained' type="submit">Post</Button>
                </DialogActions>
            </Dialog>
        </Stack>
    )
}

export default QuestionCard
