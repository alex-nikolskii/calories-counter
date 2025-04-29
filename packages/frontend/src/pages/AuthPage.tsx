import { useState } from 'react';
import { auth } from '../firebase/firebase.ts';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import {
    Container,
    Typography,
    TextField,
    Button,
    Box,
    Alert
} from '@mui/material';

export function AuthPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (err: any) {
            setError(err.message);
        }
    };

    const handleRegister = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>
                Авторизация
            </Typography>

            <Box display="flex" flexDirection="column" gap={2}>
                <TextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    fullWidth
                />
                <TextField
                    label="Пароль"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    fullWidth
                />

                {error && <Alert severity="error">{error}</Alert>}

                <Button variant="contained" onClick={handleLogin} fullWidth>
                    Войти
                </Button>
                <Button variant="outlined" onClick={handleRegister} fullWidth>
                    Зарегистрироваться
                </Button>
            </Box>
        </Container>
    );
}
