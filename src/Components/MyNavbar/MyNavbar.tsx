import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Button,
    Row,
    Col,
} from "react-bootstrap";
import "./MyNavbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";

const MyNavbar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <FontAwesomeIcon icon={faFutbol} className="nav-icon" />
                <Navbar.Brand href="#home" className="brand-name">
                    El Equipo De Sueño <br />{" "}
                    <span className="brand-english">The Dream Team</span>{" "}
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home" className="nav-item">
                        Home
                    </Nav.Link>
                    <Nav.Link href="#register" className="nav-item">
                        Register
                    </Nav.Link>
                    <Nav.Link href="#pricing" className="nav-item">
                        Pricing
                    </Nav.Link>
                    <Nav.Link
                        href="#contact"
                        onClick={() => {
                            prompt(
                                "Give us your e-mail address, please.",
                                "E-mail"
                            );
                        }}
                        className="nav-item"
                    >
                        Contact Us
                    </Nav.Link>
                </Nav>
                {/* Disabled button and form */}
                <Form className="nav-form">
                    <Row>
                        <Col>
                            {" "}
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="mr-sm-2"
                                disabled
                            />
                        </Col>
                        <Col>
                            {" "}
                            <Button variant="outline-info" disabled>
                                Search
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Navbar>
        </div>
    );
};

export default MyNavbar;
