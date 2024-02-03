import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { add, remove } from './slice/cartSlice';

const Home = () => {
    const dispatch = useDispatch();
    const [items, setItems] = useState([
        "Abhik", "rachel", "Anju", "Rakesh"
    ])

    const [cart, setCart] = useState([]);

    const addCart = (val) => {
        dispatch(add(val));
    }

    const navigate = useNavigate();
    const toUrl = () => {
        navigate(`/cart`, { replace: true });
    }
    return (
        <>
            {
                items.map((val) => (
                    <>
                        <p>{val}</p>
                        <button onClick={() => addCart(val)}>+</button>
                    </>
                ))
            }

        </>
    )
}

export default Home