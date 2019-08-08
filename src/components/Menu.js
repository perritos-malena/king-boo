import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Inicio</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/razas">Razas</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/generic">Generic</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/acercade">Acerca De</Link></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
