import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { useHistory, useParams } from 'react-router-dom';

const Actionitem = (props) => {
    const {_id, productName, productPrice,productImage}=props.item;
    const { adminPanel } = useParams();
    const history = useHistory();

    return (
        <>
            <tbody style={{ fontWeight: "500" }}>
                <tr>
                   
                        <td>
                            <Image height="50" src={productImage} rounded />
                        </td>
                  
                    <td>{productName}</td>
                    
                    <td>${productPrice}</td>
                    <td>
                      
                            {/* <Button
                                variant="outline-success"
                                className="p-1 shadow-none mb-0"
                                >
                                <FiEdit style={{ fontSize: "1.2rem" }} /> Edit
                            </Button> */}
                             <>
                                <Button
                                    variant="outline-success"
                                    className="p-1 mb-0 shadow-none"
                                    >
                                    <FiEdit style={{ fontSize: "1.2rem" }} />
                                </Button>
                                <Button
                                    variant="outline-danger"
                                    className="p-1 ml-2 mb-0 shadow-none"
                                    onClick={() => props.handleDeleteItem(_id)}>
                                    <RiDeleteBinLine style={{ fontSize: "1.3rem" }} />
                                </Button>
                            </>
                    
                    </td>
                </tr>
            </tbody>
        </>
    );
};

export default Actionitem;