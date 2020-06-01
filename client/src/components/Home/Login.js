import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    Button,
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    Form, 
    FormGroup, 
    Label, 
    Input
} from 'reactstrap';

import { login } from '../Services'

const Login = (props) => {
    
  
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const Submit = (e) => {
        e.preventDefault()

        const user = { email, password }

        login(user).then(res => {
            // if(!res.error){
                // props.history.push('/dash')
                alert('done')
            // }
        })
    }
  
    return (        
        <div>
            <Button outline color="secondary" onClick={toggle}>Sign In</Button>
            <Modal isOpen={modal} fade={false} toggle={toggle}>
                <ModalHeader toggle={toggle}>Fill in your credentials</ModalHeader>
                <ModalBody>
                    <Form>
                        <form onSubmit={Submit}>
                        <FormGroup>
                            <Input
                            type="email"
                            placeholder="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)} 
                            data-validate="Type valid email"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)} 
                            data-validate="Type valid password"
                            />
                        </FormGroup>
                        <FormGroup check inline>
                            <Label check>
                            <Input type="checkbox" /> Remember me
                            </Label>
                        </FormGroup>
                        <ModalFooter>
                            <a href="forgot-password" className="mr-auto">Forgot password?</a>
                            {/* <Button color="secondary" onClick={toggle} type="submit"> */}
                                <button type='submit'>Sign In</button>
                            {/* </Button> */}
                        </ModalFooter>
                        
                        </form>
                    </Form>
                </ModalBody>
            </Modal>
    </div>
    )
    
}

export default Login