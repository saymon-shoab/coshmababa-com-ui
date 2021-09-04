import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../../Share/Footer/Footer';
import Banar from '../Banar/Banar';
import Header from '../Header/Header';
import PuffLoader from "react-spinners/PuffLoader";
import Products from '../Products/Products';
const loaderStyle = `
  display: block;
  margin: auto;
`;

const Home = () => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/products')
        .then(Response => {
         setProducts(Response.data);
         setLoading(false)
        })
        .catch(error => {
         console.log(error)
        })
    },[])



    return (
        <div>
            <Header /> <br/> <br/>
            <Banar /><br/>
            <Container>
            <PuffLoader loading={loading} css={loaderStyle} color={"#FF4B2B"} size={150} />
            <Row xs={1} md={2} lg={3} className="g-4 my-5">
                {
                    products.map(product => <Products key={product._id} product={product} />)
                }
            </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Home;