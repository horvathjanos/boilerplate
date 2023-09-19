import express from 'express';
import bodyParser from 'body-parser';

export enum STATUS_CODE {
    OK = 200,
    NO_CONTENT = 204,
    INTERNAL_SERVER_ERROR = 500,
    NOT_FOUND = 404,
}

export type Item = {
    id: number;
    title: string;
};

export type Error = {
    message: string;
};
const PORT = 9000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CORS middleware
const allowCrossDomain = (
    _req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    res.header(`Access-Control-Allow-Origin`, `http://localhost:5173`);
    res.header(`Access-Control-Allow-Methods`, `OPTIONS,GET,PUT,POST,DELETE`);
    res.header(
        `Access-Control-Allow-Headers`,
        `Origin, X-Requested-With, Content-Type, Accept`,
    );
    next();
};

app.use(allowCrossDomain);

const ITEMS = [
    { id: '1', title: 'title-1' },
    { id: '2', title: 'title-2' },
    { id: '3', title: 'title-3' },
    { id: '4', title: 'title-4' },
    { id: '5', title: 'title-5' },
];

app.get('/items', (_req: express.Request, res: express.Response) => {
    res.send(ITEMS);
});

app.post('/items', (req: express.Request, res: express.Response) => {
    const newTitle = req.body.title;
    const newId = String(ITEMS.length + 1);
    ITEMS.push({ id: newId, title: newTitle });

    res.json(ITEMS);
    if (res.headersSent !== true) {
        res.sendStatus(STATUS_CODE.OK);
    }
});

app.delete('/items/:id', (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    const itemIndex = ITEMS.findIndex((item) => {
        return item.id === id;
    });

    ITEMS.splice(itemIndex, 1);

    res.json(ITEMS);
    if (res.headersSent !== true) {
        res.sendStatus(STATUS_CODE.OK);
    }
});

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
