import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        const fetchData = async () => {
            try {
                const response = await fetch(url, { signal: abortController.signal });
                if (!response.ok) {
                    throw Error('Could not fetch the data');
                }
                const responseData = await response.json();
                setData(responseData);
                setIsFetching(false);
                setError(null);
            } catch (err) {
                if (err.name === 'AbortError') {
                    console.log('Fetch Aborted');
                } else {
                    setIsFetching(false);
                    setError(err.message);
                }
            }
        };

        const timeoutId = setTimeout(fetchData, 1000);

        return () => {
            clearTimeout(timeoutId);
            abortController.abort();
        };
    }, [url]);

    return { data, isFetching, error };
};

export default useFetch;
