import {Button, Col, Form, FormControl, Navbar} from "react-bootstrap";
import { useDispatch } from "react-redux";
import './MainNavigation.css'
import {useRef, useState} from "react";

const MainNavigation = () => {
    const dispatch = useDispatch();
    const inputText = useRef(null);
    const [validText, setValidText] = useState(false);

    const onchangeInputHandler = () => {
        if (inputText.current.value) {
            setValidText(true);
        }
        else {
            setValidText(false);
        }
    }

    const changeTextHandler = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const enteredText = inputText.current.value
        fetch(`http://localhost:4000/iecho?text=${enteredText}`)
            .then(res => res.json())
            .then(data => {
                dispatch({type: 'ADD_NEW_ITEMS', item: data})
                inputText.current.value = null
                onchangeInputHandler();
            })
    }
    return (
            <Navbar bg='custom' expand="md">
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse className="justify-content-md-center" id="responsive-navbar-nav">
                    <Form className="d-flex" onSubmit={changeTextHandler}>
                        <Col md='12'>
                            <FormControl
                                ref={inputText}
                                type="search"
                                placeholder="Search"
                                className="mr-2"
                                aria-label="Search"
                                onChange={onchangeInputHandler}
                            />
                        </Col>
                        <Button type='submit' variant="custom" disabled={!validText}>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
    )
}

export default MainNavigation;