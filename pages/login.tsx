import { Box, Button, FormControl, Heading, HStack, Input, Spacer } from '@chakra-ui/react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Layout from '../components/layout';
import firebaseApp from '../config/firebase';

export default function Login() {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Layout>
                <Box w='80%' m='auto' mt='' h='100vh'>
                    <Heading mt='10vh' textAlign='center'>
                        Login
                    </Heading>
                    <FormControl mt='1vh'>
                        <Input value={email} onChange={(e) => setEmail(e.target.value)} type='email' />
                    </FormControl>
                    <FormControl mt='1vh'>
                        <Input value={password} onChange={(e) => setPassword(e.target.value)} type='password' />
                    </FormControl>
                    <HStack mt='2vh'>
                        <Spacer />
                        <Button
                            bg='teal.200'
                            onClick={(e) => {
                                e.preventDefault();

                                const auth = getAuth(firebaseApp);
                                signInWithEmailAndPassword(auth, email, password)
                                    .then((userCredential) => {
                                        // Signed in
                                        const user = userCredential.user;
                                        console.log(user);

                                        router.push('/todo');
                                    })
                                    .catch((error) => {
                                        const errorCode = error.code;
                                        const errorMessage = error.message;

                                        console.log(errorCode);
                                        console.log(errorMessage);

                                        alert('ログインに失敗しました');
                                    });
                            }}
                        >
                            Login
                        </Button>
                        <Spacer />
                    </HStack>
                </Box>
            </Layout>
        </>
    );
}
