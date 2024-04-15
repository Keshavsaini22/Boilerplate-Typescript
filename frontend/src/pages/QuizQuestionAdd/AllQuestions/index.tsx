import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { AccountCircle } from '@mui/icons-material';
import axios from 'axios';
import { getQueTest } from '../../../features/Question/question.action';
import QuestionCard from '../../../components/QuestionCard';
import { Stack } from '@mui/material';
interface props { testId: any; }
function AllQuestions(props: props) {

    const allquestions = useAppSelector((state) => state.quest.allquestions)
    
    
    return (
        <Stack gap={2}>
            {allquestions?.map((item: any) => (

                <QuestionCard testId={props.testId} item={item} />
            ))}
        </Stack>
    )
}

export default AllQuestions
