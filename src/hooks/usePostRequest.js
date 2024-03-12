import React, {useCallback, useState} from 'react';
import axios from "axios";

const UsePostRequest = (url) => {

    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

        const postRequest = useCallback(async (data) => {

            setIsLoading(true);
            setError(null);

            try {
                const result = await axios.post(url, data);
                setResult(result.data.jwt);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }, [url]);

        return { postRequest, error, isLoading, result };

    }
;

export default UsePostRequest;