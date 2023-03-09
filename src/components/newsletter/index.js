import { Content, Form, FormGroup } from "./styles"

import { AiOutlineMail } from 'react-icons/ai'

function Newsletter() {
    return(
        <Content>
            <Form>
                <span>
                    Get Every Tour <br /> and Package Update
                </span>

                <FormGroup>
                    <AiOutlineMail size="25px" color="#FFA118" />

                    <input type="text" placeholder="Enter your email" />
                    
                    <button>Subscribe</button>
                </FormGroup>
            </Form>
        </Content>
    )
}

export default Newsletter