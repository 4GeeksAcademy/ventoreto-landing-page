import React from "react"
import { Navbar } from "./Navbar"
import { JumboTron } from "./JumboTron"
import { Card } from "./Card"
import {Footer} from "./Footer"


export function Home(){
    const p = ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quidem totam quod 
                  cum veritatis qui eligendi vitae itaque amet.`
              
    return(
        <React.Fragment>
            <Navbar/>
            <JumboTron/>
            <div className ="d-flex container gap-3 pt-3 px-0">
                <Card 
                    image="../image/Cascada01.jpg" 
                    description={p} 
                    label="Rio Momtañoso"
                    title="Paisaje de Valle"
                />
                <Card 
                    image="https://previews.123rf.com/images/scimmery/scimmery1908/scimmery190800051/128699220-the-krimml-waterfalls-in-the-high-tauern-national-park-salzburg-austria.jpg"
                    description={p}
                    label = "Pinos Grandes"
                    title ="Paisaje de Pino"
                />
                <Card 
                    image="https://www.wideopenspaces.com/wp-content/uploads/sites/3/2025/08/Guests-Potentially-Exposed-To-Deadly-Virus-While-Staying-At-Grand-Teton-National-Park.jpg?w=1056"
                    description={p}
                    label = "Aguas Tranquilas"
                    title = "Paisaje Hermoso"
                /> 
                <Card 
                    image="../image/Rio01.jpg"
                    description ={p}
                    label ="Piedras Preciosa"
                    title ="Paisaje de Piedras"
                />  
            </div>
            <Footer/>
        </React.Fragment>
    )
}
                

                
                    
            
            
