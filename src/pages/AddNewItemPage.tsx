import type { FC, ChangeEvent } from 'react';

import { useAddNewItem } from '../hooks/useAddNewItem';

export const AddNewItemPage: FC = () => {
    const { addNewItem, setTitle } = useAddNewItem();
    const handleAddNewItem = () => {
        addNewItem();
    };

    const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };
    return (
        <div className="card">
            <div className="card-body">
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">
                            Title
                        </label>
                        <input
                            onChange={handleValueChange}
                            type="text"
                            className="form-control"
                            id="title"
                            aria-describedby="title"
                        />
                    </div>

                    <button
                        onClick={handleAddNewItem}
                        type="button"
                        className="btn btn-primary"
                    >
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
};
