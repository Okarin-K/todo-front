import { Box, Button, Heading, HStack } from '@chakra-ui/react';
import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import firebaseApp from '../config/firebase';
import NavigationLogo from './navigationLogo';

export default function Header() {
    const router = useRouter();

    return (
        <>
            <Box w='100%' h={['45px', '70px']} bg='teal.200'>
                <HStack h='100%'>
                    <Box mt='auto' mb='auto'>
                        <HStack ml='12px' spacing='1'>
                            <NavigationLogo />
                            <Heading size='md'>Todo App</Heading>
                            <Button
                                onClick={(e) => {
                                    const auth = getAuth(firebaseApp);
                                    signOut(auth)
                                        .then(() => {
                                            console.log('Logout successfully.');
                                            router.push('/login');
                                        })
                                        .catch((error) => {
                                            console.log(error);
                                        });
                                }}
                            >
                                Logout
                            </Button>
                        </HStack>
                    </Box>
                </HStack>
            </Box>
        </>
    );
}
