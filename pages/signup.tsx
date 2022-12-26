import { Box, Button, FormControl, Heading, HStack, Input, Spacer } from '@chakra-ui/react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Layout from '../components/layout';
import firebaseApp from '../config/firebase';

export default function Signup() {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Layout>
                <Box w='80%' m='auto' mt='' h='100vh'>
                    <Heading mt='10vh' textAlign='center'>
                        Sign up
                    </Heading>
                    <Box>
                        <FormControl mt='1vh'>
                            <Input value={email} onChange={(e) => setEmail(e.target.value)} type='email' />
                        </FormControl>
                        <FormControl mt='1vh'>
                            <Input value={password} onChange={(e) => setPassword(e.target.value)} type='password' />
                        </FormControl>
                    </Box>
                    <HStack mt='2vh'>
                        <Spacer />
                        <Button
                            bg='teal.200'
                            onClick={(e) => {
                                e.preventDefault();

                                const auth = getAuth(firebaseApp);
                                createUserWithEmailAndPassword(auth, email, password)
                                    .then((userCredential) => {
                                        console.log('user create successfully!!');
                                        console.log(userCredential);
                                        router.push('/login');
                                    })
                                    .catch((error) => {
                                        const errorCode = error.code;
                                        const errorMessage = error.message;

                                        console.log(errorCode);
                                        console.log(errorMessage);
                                    });
                            }}
                        >
                            Sign up
                        </Button>
                        <Spacer />
                    </HStack>
                </Box>
            </Layout>
        </>
    );
}
