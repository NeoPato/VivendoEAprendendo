import { Card } from "./components/card"
import Menu from "./components/menu"

export const Consumo = () => {
    return(
        <div>
            <Menu/>
            <br />
            Consumo JSON
            {data.map((item) => {
                return(
                    <Card 
                    name={item.name}
                    desc={item.desc}
                    value={item.value} 
                    image={item.image}
                    />
                )
            })}
            
        </div>
    )
}