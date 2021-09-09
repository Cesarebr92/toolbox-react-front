import {Card, Form, FormControl, InputGroup} from 'react-bootstrap'


const TextItemList = (props) => {
    return (
        <Card style={{width: '60rem'}}>
            <h1>Result:</h1>
            <Form style={{margin: '1rem 13rem', textAlign: 'center', maxWidth: '60rem'}}>

                        {props.items.map((item, i) => (
                            <Form.Group key={i} className="mb-3" controlId="formBasicText" >
                                <InputGroup className="mb-2">
                                    <InputGroup.Text id="basic-addon1">{item.palindrome ? 'Palindrome' : 'Non-Palindrome'}</InputGroup.Text>
                                    <FormControl
                                        placeholder="Username"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        defaultValue={item.message}
                                    />
                                </InputGroup>
                            </Form.Group>
                        ))}
            </Form>
        </Card>
    )
}
export default TextItemList;