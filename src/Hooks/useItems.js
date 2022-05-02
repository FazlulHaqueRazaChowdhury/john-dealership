import { useEffect, useState } from "react"
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../firebase.init";

const useItems = (no, email, urlPath) => {
    const [data, setData] = useState([]);
    const [loading2, setLoading] = useState(true);
    const navigate = useNavigate();


    useEffect(

        () => {
            axios.get(`https://calm-fortress-89942.herokuapp.com/${urlPath}?display=${no}&email=${email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            })
                .then(response => {

                    setLoading(false);
                    const { data } = response;
                    setData(data);
                })
                .catch((e) => {
                    const code = e.response.status;
                    if (code === 401 || code === 403) {
                        signOut(auth);
                        navigate('/login');
                    }
                })
        }

        , [])



    return [data, setData, loading2];
}
export default useItems;