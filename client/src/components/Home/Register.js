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
    Input
} from 'reactstrap';

import { register } from '../Services'

const Register = (props) => {
  
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")
    const [confirm_password, setConfirmPassword] = useState("")
    const [gender, setGender] = useState("")
    const [dob, setDob] = useState("")

    const Submit = (e) => {
        e.preventDefault()
        const newUser = {
            username, email, password, confirm_password, gender, dob
        }
        register(newUser).then(res => {
            this.props.history.push('/login')
        })
    }
    
  
    return (
            <div>
                <Button outline color="secondary" onClick={toggle}>Register</Button>
                    <Modal isOpen={modal} fade={false} toggle={toggle}>
                        <ModalHeader toggle={toggle}>Sign up to access Illumina</ModalHeader>
                        <ModalBody>
                        <Form onSubmit={Submit}>
                            <FormGroup>
                                <Input 
                                type="text" 
                                value={username} 
                                onChange={e => setUsername(e.target.value)} 
                                placeholder="Username" 
                                data-validate="Type valid username" />
                            </FormGroup>
                            <FormGroup>
                                <Input 
                                type="email" 
                                value={email} 
                                onChange={e => setEmail(e.target.value)} 
                                placeholder="Email Address" 
                                data-validate="Type valid email" />
                            </FormGroup>
                            <FormGroup>
                                <Input 
                                type="password" 
                                value={password} 
                                onChange={e => setpassword(e.target.value)} 
                                placeholder="Password" 
                                data-validate="Type valid password" />
                            </FormGroup>
                            <FormGroup>
                                <Input 
                                type="password" 
                                value={confirm_password} 
                                onChange={e => setConfirmPassword(e.target.value)} 
                                placeholder="Confirm Password" 
                                data-validate="Please confirm password" />
                            </FormGroup>
                            <FormGroup>
                                <Input 
                                type="select" 
                                value={gender} 
                                onChange={e => setGender(e.target.value)} 
                                data-validate="Select valid gender">
                                <option hidden disabled selected value>Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Input 
                                type="date" 
                                value={dob} 
                                onChange={e => setDob(e.target.value)} 
                                placeholder="Date of Birth" 
                                data-validate="Select valid date of birth" />
                            </FormGroup>
                            <ModalFooter style={{justifyContent: 'center'}}>
                                <Button type="submit" color="secondary">Sign Up</Button>
                            </ModalFooter>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
 
}

export default Register