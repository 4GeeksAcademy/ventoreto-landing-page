import React from "react";
import { JumboTron } from "./JumboTron";

export function Navbar() {
    return (
        <div>

            <nav 
                    className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid ">
                    <div className="container p-0">
                        <a className="navbar-brand" href="">
                            StartBootStrap
                        </a>
                        <button 
                            className="navbar-toggler" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="navbarNav" 
                            aria-controls="navbarNav" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        
                        <div 
                            className="collapse navbar-collapse justify-content-end" 
                            id="navbarNav ">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" href="">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="">
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="">
                                        Services
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

            </nav>

        </div>

    )
}




