import { useQuery } from '@tanstack/react-query';

const fetchData = async () => {
    const res = await fetch('http://localhost:9000/items');
    return res.json();
};
export const useItems = () => {
    return useQuery(['items'], fetchData, { retry: false, refetchOnWindowFocus: false });
};
