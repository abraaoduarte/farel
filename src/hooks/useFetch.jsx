import { useState, useEffect } from 'react'
import { message } from 'antd';
import api from '../services/api'

const useFetch = (url, errorMessage = '') => {

    const [data, setData] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
                try {
                    setLoading(true);
                    const response = await api.get(url);
                    setData(response.data);
                 } catch (err) {
                    setError(err);
                    setLoading(false);
                    message.error(errorMessage);
                } finally {
                    setLoading(false);
                }
            }
        fetchData();
    }, [])

    const paginate = async (page) => {
        try {
            setLoading(true);
            const response = await api.get(`${url}?page=${page}`);
            setData(response.data);
            } catch (err) {
            setError(err);
            setLoading(false);
            message.error(errorMessage);
        } finally {
            setLoading(false);
        }
    }

    const destroy = async (id) => {
        try {
            setLoading(true);
            await api.delete(`${url}/${id}`);
            const newObj = {
                ...data,
                result: data.result.filter(obj => obj.id !== id)
            }
            setData(newObj)
            } catch (err) {
            setError(err);
            setLoading(false);
            message.error(errorMessage);
        } finally {
            setLoading(false);
        }
    }

    return { data, error, loading, paginate, destroy }

}

export default useFetch;