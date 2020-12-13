import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav } from 'react-bootstrap'

function HeaderLayout(){
    return (
        <div>
            <Navbar>
                <Navbar.Brand href="#home">Tangoo</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#add">Add</Nav.Link>
                    <Nav.Link href="#quiz">Quiz</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default HeaderLayout