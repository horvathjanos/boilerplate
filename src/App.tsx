import type { FC } from 'react';

import { Navigation } from './components/Navigation';
import { Router } from './Router';

export const App: FC = () => {
    return (
        <div className="container-fluid">
            <Navigation />
            <Router />
        </div>
    );
};
