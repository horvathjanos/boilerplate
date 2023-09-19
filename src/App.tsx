import type { FC } from 'react';

import { Router } from './Router';

export const App: FC = () => {
    return (
        <div className="container-fluid">
            <Router />
        </div>
    );
};
