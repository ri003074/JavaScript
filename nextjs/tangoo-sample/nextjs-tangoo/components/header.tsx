import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'
import { Navbar, Nav } from 'react-bootstrap'

function HeaderLayout(){
    return (
        <div>
            <Navbar>
                <Navbar.Brand>
                    <Link href="/">Tangoo</Link>
                </Navbar.Brand>
                    <Link href="/">Home</Link>
                    <Link href="/add">Add</Link>
                    <Link href="/quiz">Quiz</Link>
            </Navbar>
        </div>
    )
}

export default HeaderLayout