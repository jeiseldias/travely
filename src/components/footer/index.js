import { Column, Copy, Content, Links, Logo, SearchButton, Social } from "./styles"

import { CiFacebook, CiInstagram, CiYoutube, CiTwitter } from 'react-icons/ci'
import { BsAirplaneEngines } from 'react-icons/bs'

function Footer() {
    return(
        <Content>
            <Links>
                <Column>
                    <Logo>
                        <SearchButton>
                            <BsAirplaneEngines color="#FFFFFF" size="24px" />
                        </SearchButton>

                        <h2>Travely</h2>
                    </Logo>

                    <Social>
                        <CiFacebook color="#9e9e9e" size="25px" /> 
                        <CiInstagram color="#9e9e9e" size="25px" /> 
                        <CiYoutube color="#9e9e9e" size="25px" /> 
                        <CiTwitter color="#9e9e9e" size="25px" />
                    </Social>
                </Column>

                <Column>
                    <h2>About</h2>

                    <ul>
                        <li>About Us</li>
                        <li>Destination</li>
                        <li>Testimonial</li>
                        <li>News & Article</li>
                    </ul>
                </Column>

                <Column>
                    <h2>Features</h2>

                    <ul>
                        <li>Payment</li>
                        <li>Acount</li>
                        <li>Referal Bonus</li>
                        <li>Go-Pay</li>
                    </ul>
                </Column>

                <Column>
                    <h2>Help</h2>

                    <ul>
                        <li>Contact</li>
                        <li>Report</li>
                        <li>FAQ</li>
                        <li>Privacy policy</li>
                    </ul>
                </Column>

                <Column>
                    <h2>Company</h2>

                    <ul>
                        <li>Careers</li>
                        <li>Privacy</li>
                        <li>Policy</li>
                        <li>FAQ</li>
                        <li>Partners</li>
                    </ul>
                </Column>
            </Links>

            <Copy>
                Copyright @ 2023 <a href="http://uiabhishek.com" target="_blank">uiabhishek.com</a>
            </Copy>
        </Content>
    )
}

export default Footer