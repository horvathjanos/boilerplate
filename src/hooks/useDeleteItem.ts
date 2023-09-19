import type { UseQueryResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';

import type { Item } from '../types/types';

const deleteData = async (id: Item['id']): Promise<Item> => {
    const response = await fetch(`http://localhost:9000/items/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return response.json();
};

export const useDeleteItem = () => {
    const { mutateAsync: itemDelete } = useMutation(deleteData);

    const deleteItem = async (id: Item['id'], refetch: UseQueryResult['refetch']) => {
        try {
            await itemDelete(id);
            refetch();
        } catch (e) {
            // eslint-disable-next-line no-console
            console.error(e);
        }
    };

    return {
        deleteItem,
    };
};
