import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { useItems } from '../hooks/useItems';
import type { Item } from '../types/types';
import { useDeleteItem } from '../hooks/useDeleteItem';

export const MainPage: FC = () => {
    const navigate = useNavigate();
    const { error, data, isFetching, refetch } = useItems();
    const { deleteItem } = useDeleteItem();

    if (error) {
        return <>Error!</>;
    }

    if (isFetching) {
        return <>Loading...</>;
    }

    const handleDeleteItem = (id?: Item['id']) => {
        deleteItem(id, refetch);
    };
    const navigateToAddNewItemPage = () => {
        navigate('/create');
    };

    const items = data.map((item: Item) => {
        return (
            <div className="row p-2" key={item.id}>
                <div className="col-sm">
                    {item.id}: {item.title}
                </div>
                <div className="col-sm">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => handleDeleteItem(item.id)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        );
    });

    const itemList = items.length === 0 ? <p>Empty Items list</p> : items;

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <button
                        onClick={navigateToAddNewItemPage}
                        type="button"
                        className="btn btn-primary"
                    >
                        Add new item
                    </button>
                </div>
            </div>
            <div className="card">
                <div className="card-body">{itemList}</div>
            </div>
        </>
    );
};
