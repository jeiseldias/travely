import { Benefit, Box, Content, Description, Icon, Thumb1, Thumb2, Thumbs, Topics } from "./styles"

import { HiCheck, HiOutlineSquares2X2 } from 'react-icons/hi2'
import { Ri24HoursLine } from 'react-icons/ri'

function Benefits() {
    return(
        <Content>
            <Box>
                <Thumbs>
                    <Thumb1 background="/images/benefits/redhouse.jpg"></Thumb1>
                    <Thumb2 background="/images/benefits/desert.jpg"></Thumb2>
                </Thumbs>

                <Topics>
                    <h1>We Offer Best Services</h1>

                    <span>Try a variety of benefits when using our services.</span>

                    <Benefit>
                        <Icon>
                            <HiOutlineSquares2X2 size="20px" color="#FF6e32" />
                        </Icon>

                        <Description>
                            <h2>Lot of choices</h2>
                            <small>
                                You can find total 500+ detination listed in our website.
                            </small>
                        </Description>
                    </Benefit>

                    <Benefit>
                        <Icon>
                            <HiCheck size="20px" color="#FF6e32"  />
                        </Icon>

                        <Description>
                            <h2>Easy booking</h2>
                            <small>
                                You can simply booking your destination ticket from our website.
                            </small>
                        </Description>
                    </Benefit>

                    <Benefit>
                        <Icon>
                            <Ri24HoursLine size="20px" color="#FF6e32"  />
                        </Icon>

                        <Description>
                            <h2>24*7 Customer service</h2>
                            <small>
                                We provide well customized service to our customer.
                            </small>
                        </Description>
                    </Benefit>
                </Topics>
            </Box>
        </Content>
    )
}

export default Benefits