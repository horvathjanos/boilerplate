import type { FC } from 'react';
import { Routes, Route } from 'react-router';

import { MainPage } from './pages/MainPage';
import { AddNewItemPage } from './pages/AddNewItemPage';

export const Router: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/create" element={<AddNewItemPage />} />
            <Route path="*" element={<>Page not found!</>} />
        </Routes>
    );
};
