import { useEffect, useState } from "react"
import axios from 'axios';
const useItems = () => {
    const [data, setData] = useState([]);

    useEffect(
        () => {
            axios.get('http://localhost:5000/items')
                .then(response => {

                    const { data } = response;
                    setData(data);
                })
        }

        , [])
    return [data, setData];
}
export default useItems;