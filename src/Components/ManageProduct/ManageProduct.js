import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import ClipLoader from "react-spinners/ClipLoader";
import Actionitem from '../Actionitem/Actionitem';


const loaderStyle = `
  display: block;
  margin: 50px auto;
  color: #7386D5;
`;        


const ManageProduct = () => {
    const [items,setItems]=useState([]);
    const [loading, setLoading] =useState(true);
   
    useEffect(() => {
        axios.get('https://calm-beach-65269.herokuapp.com/products')
            .then(response => {
                setItems(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    const handleDeleteItem = () => {
        // const removedItems = items.filter(item => item._id !== id);

        // axios.delete(`https://calm-beach-65269.herokuapp.com/delete/${id}`)
        //     .then(response => {
        //         response && setItems(removedItems);;
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })
    }



    return (
        <>
            <div className="px-5 pt-4 mt-5 bg-white" style={{borderRadius:'15px'}}>
                <Table hover borderless responsive>
                <thead className="bg-light">
                   <tr>
                       <th>Product Name</th>
                       <th>Product Price</th>
                       <th>Action</th> 
                   </tr>
                </thead>
                <ClipLoader loading={loading} css={loaderStyle} />
                {
                    items.map(item=> <Actionitem item={item} key={item._id} handleDeleteItem={handleDeleteItem} />)
                }
                </Table>
            </div>
        </>
    );
};

export default ManageProduct;