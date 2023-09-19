export enum STATUS_CODE {
    OK = 200,
    NO_CONTENT = 204,
    INTERNAL_SERVER_ERROR = 500,
    NOT_FOUND = 404,
}

export type Item = {
    id?: string;
    title: string;
};

export type Error = {
    message: string;
};
