import HeaderLayout from '../components/header'
import Head from 'next/head'
import {Form, Col, Button} from 'react-bootstrap'
function Add(){

    function clickTest(e){
        console.log("hehe")
        console.log(e)
    }
    return (
        <div>
            <Head>
                <title>Add</title>
            </Head>

            <HeaderLayout/>

            <Form.Group>
                <Col sm="4" className="mb-2">
                    <Form.Control size="sm" type="text" placeholder="English Phrase" />
                </Col>
                <Col sm="4" className="mb-2">
                    <Form.Control size="sm" type="text" placeholder="Japanese Phrase" />
                </Col>
                <Col sm="4">
                    <Form.Control size="sm" type="text" placeholder="English Word" />
                </Col>
            </Form.Group>
            <Button className="ml-3" variant="primary" type="submit" onClick={clickTest}>
                Submit
            </Button>
        </div>
    )
}
export default Add