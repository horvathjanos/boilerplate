import type { FC } from 'react';
import { Routes, Route } from 'react-router';

import { MainPage } from './pages/MainPage';

export const Router: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<>Page not found!</>} />
        </Routes>
    );
};
