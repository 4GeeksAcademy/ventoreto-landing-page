import React from "react";

export function Card(props){
    return(
        <div className="card  mb-3 p-0" style={{width: "18rem"}}>
            <img src={props.image} className="card-img-top" alt="..."/>
            <div className="card-body border-success text-success">
                <h5> {props.title}</h5>
                <p className="card-text">{props.description}</p>
            </div>
            <div className="card-footer bg-transparent border-success">
                <a href="#" className="btn btn-primary">{props.label}</a>
            </div>
       </div>

    )
}