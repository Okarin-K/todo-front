import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Signup from './signup';

const Home: NextPage = () => {
    return (
        <Box>
            <Head>
                <title>Todo</title>
                <meta name='description' content='Todo app.' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Box w='80%' ml='auto' mr='auto'>
                <Signup />
            </Box>
        </Box>
    );
};

export default Home;
