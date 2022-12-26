import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import { Box, Button, Checkbox, FormControl, FormLabel, Heading, HStack, Input, List, ListItem, VStack } from '@chakra-ui/react';
import { useState } from 'react';

type Todo = {
    title: string;
    done: boolean;
};

export default function Todo() {
    const [title, setTitle] = useState('');
    const [todoList, setTodoList] = useState<Todo[]>([]);

    const handleOnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        if (title == undefined || title === '') {
            alert('やることを入力してください');
            return;
        }

        todoList.push({
            title,
            done: false,
        });

        setTitle('');
    };

    const handleOnDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        const undone = todoList.filter((todo) => todo.done === false);
        setTodoList([...undone]);
    };

    return (
        <>
            <Box mt='24px' ml='auto' mr='auto'>
                <Heading textAlign='center'>はよ、やらんかい！</Heading>
                <Box mt='24px'>
                    <VStack>
                        <HStack>
                            <FormControl>
                                <Input value={title} type='text' onChange={(e) => setTitle(e.target.value)}></Input>
                            </FormControl>
                            <Button onClick={(e) => handleOnClick(e)}>
                                <AddIcon />
                            </Button>
                            <Button
                                onClick={(e) => {
                                    handleOnDelete(e);
                                }}
                            >
                                <DeleteIcon />
                            </Button>
                        </HStack>
                        <List>
                            {todoList.map((todo, index) => (
                                <ListItem key={todo.title}>
                                    <FormControl>
                                        <HStack spacing={2}>
                                            <Checkbox
                                                size='lg'
                                                onChange={() => {
                                                    todoList[index].done = !todo.done;
                                                    setTodoList([...todoList]);
                                                }}
                                            />
                                            {todo.done ? (
                                                <FormLabel fontSize='xl' textDecoration='line-through'>
                                                    {todo.title}
                                                </FormLabel>
                                            ) : (
                                                <FormLabel fontSize='xl'>{todo.title}</FormLabel>
                                            )}
                                        </HStack>
                                    </FormControl>
                                </ListItem>
                            ))}
                        </List>
                    </VStack>
                </Box>
            </Box>
        </>
    );
}
