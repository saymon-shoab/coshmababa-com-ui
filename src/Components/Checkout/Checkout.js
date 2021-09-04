import axios from 'axios';
import React, { useContext } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import swal from 'sweetalert';
import { UserContext } from '../../App';
import Header from '../Home/Header/Header';

const Checkout = () => {
   const {loggedInUser}= useContext(UserContext);
   const{cart}=useContext(UserContext);

   axios.post('http://localhost:5000/addOrder')

   const handleCheckout = () => {
       const orderInfo ={...loggedInUser, product: cart, orderTime: new Date()};
       axios.post('http://localhost:5000/addOrder',orderInfo )
       .then(Response=> {
           Response.data ? swal("Order placed successfully", "Your order placed successfully!", "success"): alert("something wrong try again");
       })
       .catch(error =>{
           console.log(error)
       })
   }

    return (
        <>
        <Header />
        <br/>
        <br/>
        <br/>
        <Container>
            <h3>Checkout</h3>
            <div className="shadow px-4 pt-4 my-4" style={{ borderRadius: "15px" }}>
                <Table hover responsive>
                  <thead>
                      <tr>
                         <th>Product Name</th>
                         <th>Quantity</th>
                         <th>Price</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>{cart.productName}</td>
                          <td>1</td>
                          <td>${cart.productPrice}</td>
                      </tr>
                  </tbody>
                  <tfoot>
                        <tr>
                            <td colSpan="2">Total</td>
                            <td>${cart.productPrice}</td>
                        </tr>
                    </tfoot>
                </Table>
            </div>
            <div className="text-right">
                <Button onClick={handleCheckout} className="checkout-btn shadow-none">Checkout</Button>
            </div>
        </Container>
        </>
    );
};

export default Checkout;