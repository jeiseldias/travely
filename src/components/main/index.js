import { Bar, Content, Highlights, Logo, Menu, Profile, Search, SearchButton } from './styles'

import { MdKeyboardArrowDown } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FiMapPin, FiCalendar, FiUser, FiSearch } from 'react-icons/fi'

function Main() {
    return(
        <Content>
            <Bar>
                <Logo>
                    <img src="" alt="Logo" />
                </Logo>

                <Menu>
                    <ul>
                        <li><a href="#">Discover</a></li>
                        <li><a href="#">Destination</a></li>
                        <li><a href="#">Saved</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>

                    <span>Language</span>

                    <img src="./images/usa.png" alt="language flag" />

                    <MdKeyboardArrowDown />

                    <Profile>
                        <GiHamburgerMenu color="black" size="16px" />

                        <img src="./images/avatar.png" alt="language flag" />
                    </Profile>
                </Menu>
            </Bar>

            <Highlights>
                <h2>
                    Explore The Huge World & Enjoy It's Beauty
                </h2>

                <span>
                    discover new things in exploring the world & make <br /> your vacation memorable to remember forever
                </span>

                <Search>
                    <div>
                        <FiMapPin size="30px" />
                        <label>
                            <span>
                                Location <MdKeyboardArrowDown />
                            </span>
                            
                            <small>Kathmandu, Nepal</small>
                        </label>
                    </div>

                    <div>
                        <FiCalendar size="30px" />
                        <label>
                            <span>
                                Date <MdKeyboardArrowDown />
                            </span>
                            
                            <small>26 Jan 2021</small>
                        </label>
                    </div>

                    <div>
                        <FiUser size="30px" />
                        <label>
                            <span>
                                Guest <MdKeyboardArrowDown />
                            </span>
                            
                            <small>4 Person</small>
                        </label>
                    </div>

                    <SearchButton>
                        <FiSearch size="24px" color="white" />
                    </SearchButton>
                </Search>
            </Highlights>
        </Content>
    )
}

export default Main