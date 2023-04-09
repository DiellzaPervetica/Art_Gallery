import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './Style.css';

const Art = () => {
    //const [setAArt, setAArt] = useState("");
    const [allA, setAllA] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/Art")
            .then((response) => {
                console.log(response.data);
                setAllA(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

        return(
            <Container>
                <h1>Test</h1>
                //test2
            </Container>
        )
}
export default Art;
