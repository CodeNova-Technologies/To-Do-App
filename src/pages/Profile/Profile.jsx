import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, TextField, Typography, Avatar, Paper } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useState } from 'react';
import image from '../../assets/motivation.png'

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export default function ProfilePage() {

    const [profileImage, setProfileImage] = useState(image);

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <Box
            sx={{
                height: '100vh',
                overflow: 'hidden',
                backgroundColor: '#e3f2fd',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 2,
            }}
        >
            <Paper elevation={6} sx={{ p: 4, borderRadius: 4, width: 400, textAlign: 'center' }}>
                <Typography variant="h5" gutterBottom>
                    Profile Settings
                </Typography>
                <Box sx={{ position: 'relative', width: 120, height: 120, mx: 'auto', mb: 3 }}>
                    <Avatar
                        src={profileImage}
                        sx={{
                            width: 120,
                            height: 120,
                            border: '3px solid #1976d2',
                        }}
                    />
                    <Button
                        component="label"
                        sx={{
                            position: 'absolute',
                            bottom: -10,
                            right: -10,
                            minWidth: 0,
                            width: 36,
                            height: 36,
                            borderRadius: '50%',
                            bgcolor: '#1976d2',
                            color: 'white',
                            '&:hover': {
                                bgcolor: '#1565c0',
                            },
                        }}
                    >
                        <CloudUploadIcon fontSize="small" />
                        <VisuallyHiddenInput type="file" accept="image/*" onChange={handleFileChange} />
                    </Button>
                </Box>

                <TextField
                    label="Username"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                />

                <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                />

                <Button
                    variant="contained"
                    fullWidth
                    sx={{ mt: 2, bgcolor: '#1976d2', '&:hover': { bgcolor: '#1565c0' } }}
                >
                    Save Changes
                </Button>
            </Paper>
        </Box>
    );
}
