import { Typography } from '@mui/material'
import React from 'react'

interface TextProps {
    text: string,
    fontSize: string,
    fontWeight: string,
}

function TypographyText(props: TextProps) {
    return (
        <Typography fontSize={props.fontSize} fontWeight={props.fontWeight} >{props.text}</Typography>

    )
}

export default TypographyText