import { useState, useEffect } from "react";
import axios from "axios";

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getPromise = async () => {
            await fetch(API)
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((err) => console.log(err))
        }
        getPromise()
    }, [])
    return products;
};

export default useGetProducts;