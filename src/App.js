import React, { useState } from 'react';
import Icon from './components/Icon';

import 'bootstrap/dist/css/bootstrap.css';
import { Button, Col, Row, Container, Card, CardBody } from 'reactstrap';

import './App.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const itemArray = new Array(9).fill('empty');

const App = () => {

    const [isCross, setIsCross] = useState(false);
    const [message, setMessage] = useState("");

    const reload=()=>{
        setIsCross(false);
        setMessage("");
        itemArray.fill('empty',0,9);
    }

    const checkIsWinner=()=>{
        if(itemArray[0]===itemArray[1] && 
            itemArray[1]===itemArray[2] && 
            itemArray[0]!='empty'){
                setMessage(`${itemArray[0]} won`);
            }
    else if(itemArray[0]===itemArray[3] && 
        itemArray[3]===itemArray[6] && 
        itemArray[0]!=='empty'){
            setMessage(`${itemArray[0]} won`);
        }else if(itemArray[1]===itemArray[4] && 
            itemArray[4]===itemArray[7] && 
            itemArray[1]!='empty'){
                setMessage(`${itemArray[1]} won`);
        }else if(itemArray[2]===itemArray[5] && 
            itemArray[5]===itemArray[8] && 
            itemArray[2]!='empty'){
                setMessage(`${itemArray[2]} won`);
        }else if(itemArray[3]===itemArray[4] && 
            itemArray[4]===itemArray[5] && 
            itemArray[3]!='empty'){
                setMessage(`${itemArray[3]} won`);
        }else if(itemArray[6]===itemArray[7] && 
            itemArray[7]===itemArray[8] && 
            itemArray[6]!='empty'){
                setMessage(`${itemArray[6]} won`);
        }else if(itemArray[0]===itemArray[4] && 
            itemArray[4]===itemArray[8] && 
            itemArray[0]!='empty'){
                setMessage(`${itemArray[0]} won`);
        }else if(itemArray[2]===itemArray[4] && 
            itemArray[4]===itemArray[6] && 
            itemArray[2]!='empty'){
                setMessage(`${itemArray[2]} won`);
        }else  if(itemArray[0]!='empty' && itemArray[1]!='empty' &&
        itemArray[3]!='empty' && itemArray[2]!='empty' &&
        itemArray[4]!='empty' && itemArray[8]!='empty' &&
        itemArray[5]!='empty' && itemArray[7]!='empty' &&
        itemArray[6]!='empty'){
            setMessage( "draw");
        }
}


    const changeItem= itemNumber=>{
        if(message){
            return toast(message, {type:'success'});
        }

        if(itemArray[itemNumber]==='empty'){
            itemArray[itemNumber]=isCross?'cross':'circle';
            setIsCross(!isCross);
        }else{
            return toast("already filled",{type:'error'});
        }
        checkIsWinner();
    }

    return (
        <div>
            <Container className='p-5'>
                <ToastContainer position='bottom-center' />
                <Row>
                    <Col md={6} className='offset-md-3'>
                        {message?(
                            <div className='mb-2 mt-2'>
                                <h1 className='text-success text-uppercase text-center'>
                                    {message}
                                </h1>
                                <Button color="success" block 
                                onClick={reload}>
                                    RELOAD
                                </Button>
                            </div>
                        ):(<h1 className='text-warning text-uppercase text-center'>
                        {isCross?'cross':'circle'} truns
                    </h1>)}
                        <div className='grid'>
                            {
                                itemArray.map((item, index) => (
                                    <Card color='warning'
                                    onClick={()=>{
                                        changeItem(index);
                                    }}>
                                        <CardBody className='box'>
                                        <Icon name={item}></Icon>
                                    </CardBody></Card>
                                )
                                )
                            }
                        </div>
                    </Col>
                </Row>
            </Container>


        </div>
    );

}

export default App;