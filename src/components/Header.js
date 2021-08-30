import React from 'react'
import 'semantic-ui-css/semantic.min.css'

const Header = (props) => {
    return (
        <div className="Header">
            <div className="ui menu">
                <div className="ui compact menu">
                <a className="item" href="/">
                    Home
                </a>
                    <div className="ui simple dropdown item">
                        Projects
                        <i className="dropdown icon"></i>
                        <div className="menu">
                            <div className="item">
                                <a href="/premier">Premier Reviews</a>
                            </div>
                            <div className="item">
                                <a href="/ftg">Flatiron The Gathering</a>
                            </div>
                            <div className="item">
                                <a href="/charakeep">Charakeep</a>
                            </div>
                            <div className="item">
                                <a href="/magneto">Magneto</a>
                            </div>
                            <div className="item">
                                <a href="/pokedoption">Pokedoption Center</a>
                            </div>
                        </div>
                        </div>
                </div>
                <a className="item" href="https://github.com/chrisgk47/">
                    Github
                </a>
                <a className="item" href="https://medium.com/@chris-kim1990">
                    Blog
                </a>
                <a className="item" href="https://www.linkedin.com/in/christopher-kim-0737b0149/">
                    LinkedIn
                </a>
            </div>
        </div>

    )
}

export default Header;


