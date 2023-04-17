import { Navbar } from "flowbite-react"
import { Link } from "react-router-dom"
export default function Flownavbar() {
    return (<>
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand
            >
                <img
                    src="Images/logo.png"
                    className="mr-3 h-10 sm:h-12"
                    alt="logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-bold dark:text-black" >
                      The Alp Tour
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link>
                <Link to="/">Home </Link>
                    
                </Navbar.Link>
                <Link to="/about"> About
                </Link>
                <Navbar.Link>
                <Link to="/Departments">Services</Link>
                </Navbar.Link>
                <Navbar.Link>
                <Link to="/Pricing">Packages</Link>
                </Navbar.Link>
                <Navbar.Link>
                <Link to="/Contact">Contact</Link> 
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
        

    </>)
}
