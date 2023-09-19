import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import type { Item } from '../types/types';

const postData = async ({ title }: Item): Promise<Item> => {
    const response = await fetch('http://localhost:9000/items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
    });

    return response.json();
};

export const useAddNewItem = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const { mutateAsync: createNewItem } = useMutation(postData);

    const addNewItem = async () => {
        const payload = {
            title,
        } as Item;

        try {
            await createNewItem(payload);
            navigate('/');
        } catch (e) {
            // eslint-disable-next-line no-console
            console.error(e);
        }
    };

    return {
        setTitle,
        addNewItem,
    };
};
