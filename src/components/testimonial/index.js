import { Avatar, Content, InfoHeader, Infos, Map, Name, Quote, Rate, Speak } from './styles'

import { BsFillEmojiHeartEyesFill } from 'react-icons/bs'
import { AiFillHeart, AiFillStar } from 'react-icons/ai'

function Testimonial() {
    return(
        <Content>
            <h2>Testimonial</h2>
            <span>What our customer say about us?</span>
            
            <Infos>
                <Quote>
                    <InfoHeader>
                        <Avatar src="/images/avatar.png" alt="Testimonial map" />
                        <Name>
                            <span>Binimesh Pant</span>
                            <small>Kahalpur, Nepal</small>
                        </Name>
                    </InfoHeader>

                    <Speak>
                        "I am a traveler and Travely helps me a lot in finding and choosing a best destination and offcourse the price is worth" <BsFillEmojiHeartEyesFill color="#FFCB4C" /> <AiFillHeart color="red" />
                    </Speak>

                    <Rate>
                        <span>
                            CEO of Bikemandu
                        </span>
                            
                        <span>
                            <AiFillStar size="18px" color="#FFCB4C" /> 4.6
                        </span>
                    </Rate>
                </Quote>

                <Map>
                    <picture>
                        <img src="/images/map.png" alt="Testimonial map" width='auto' height='280px' />
                    </picture>
                </Map>
            </Infos>
        </Content>
    )
}

export default Testimonial