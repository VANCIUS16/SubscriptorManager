import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export default function DatepickerComponent(props) {

    return (
        <Box
            noValidate
            autoComplete="off"
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
        >
            <Stack component="form" noValidate spacing={0}>
                <TextField
                    label={props.titulo}
                    id="date"
                    type="date"
                    sx={{ width: 220 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={props.change}
                />      
            </Stack>
        </Box>
    );
}