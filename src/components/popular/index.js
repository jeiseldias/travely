import { City, Content, Places } from "./styles"

function Popular() {
    return(
        <Content>
            <h1>Popular Package</h1>
            <span>The most popular tour package presented to you</span>

            <Places>
                <City background={'/images/city/nusapenida.jpg'}>
                    <h2>Nusa Penida, Indonesia</h2>
                    <small>4 Days 3 Night</small>
                </City>

                <City background={'/images/city/pokhara.jpg'}>
                    <h2>Pokhara, Nepal</h2>
                    <small>2 Days 1 Night</small>
                </City>

                <City background={'/images/city/nusapenida2.jpg'}>
                    <h2>Nusa Penida, Indonesia</h2>
                    <small>4 Days 3 Night</small>
                </City>

                <City background={'/images/city/mustang.jpg'}>
                    <h2>Mustang, Nepal</h2>
                    <small>6 Days 5 Night</small>
                </City>
            </Places>
            
            <button>Explore more</button>
        </Content>
    )
}

export default Popular