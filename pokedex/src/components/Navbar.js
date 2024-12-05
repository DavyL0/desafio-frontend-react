import React from "react"
const imgLogo = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
const Navbar = () => {
    return( 
        <nav>
            <div>
                <img 
                alt="PokéAPI" 
                src={imgLogo}
                className="navbar-img"
                />

            </div>
        </nav>
    )
}

export default Navbar