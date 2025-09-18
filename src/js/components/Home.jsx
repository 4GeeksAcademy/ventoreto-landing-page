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
                    image="https://picsum.photos/id/103/600/400" 
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
                    image="https://picsum.photos/id/113/600/400"
                    description={p}
                    label = "Aguas Tranquilas"
                    title = "Paisaje Hermoso"
                /> 
                <Card 
                    image="https://picsum.photos/id/106/600/400"
                    description ={p}
                    label ="Flores Hermosas"
                    title ="Paisaje de flores"
                />  
            </div>
            <Footer/>
        </React.Fragment>
    )
}
                

                
                    
            
            
