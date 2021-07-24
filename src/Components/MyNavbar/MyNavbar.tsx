// Style Sheet
import "./MyNavbar.css";
// React Bootstrap
import { Navbar, Nav, Form, FormControl, Row, Col } from "react-bootstrap";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";

// Prop Type
interface IProps {
    searchString: string;
    setSearchString: React.Dispatch<React.SetStateAction<string>>;
}

const MyNavbar = ({ searchString, setSearchString }: IProps) => {
    return (
        <Navbar bg="dark" variant="dark">
            <FontAwesomeIcon icon={faFutbol} className="nav-icon" />
            <Navbar.Brand href="#home" className="brand-name">
                gotta fantastic elevens <br />{" "}
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
            <Form className="nav-form">
                <Row>
                    <Col>
                        {" "}
                        <FormControl
                            value={searchString}
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2"
                            onChange={(e) => setSearchString(e.target.value)}
                        />
                    </Col>
                </Row>
            </Form>
        </Navbar>
    );
};

export default MyNavbar;
