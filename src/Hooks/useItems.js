import { useEffect, useState } from "react"
import axios from 'axios';
const useItems = (no) => {
    const [data, setData] = useState([]);

    useEffect(
        () => {
            axios.get(`http://localhost:5000/items?display=${no}`)
                .then(response => {

                    const { data } = response;
                    setData(data);
                })
        }

        , [])
    return [data, setData];
}
export default useItems;