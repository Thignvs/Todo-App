import React from 'react'
import useTheme from '../components/hooks/Theme'
import light from '../images/icon-moon.svg'
import dark from '../images/icon-sun.svg'

const ThemeToggle = () => {

    const {theme, toggleTheme} = useTheme ();

    return (
        <div>
            <button onClick={toggleTheme}> <img className={`${theme === 'dark' ? 'block' : 'hidden'}`} src={light} />
            <img className={`${theme === 'dark' ? 'hidden' : 'block'}`} src={dark} />
            </button>
        </div>
    )
}

export default ThemeToggle