import React from 'react'
import useTheme from '../components/hooks/Theme'
import light from '../images/icon-moon.svg'
import dark from '../images/icon-sun.svg'

const ThemeToggle = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <div>
            <button onClick={toggleTheme} className='bg-gradient-to-br from-GradientPurple border to-GradientBlue dark:border-DarkGrayishBlueDark  flex gap-3 p-1 rounded-full'>
                <img className={`transition duration-300 ${theme === 'dark' ? 'opacity-100' : 'translate-x-10 opacity-0'}`} src={dark} />
                <img className={`transition duration-300 ${theme === 'dark' ? '-translate-x-10 opacity-0' : 'opacity-100'}`} src={light} />
            </button>
        </div>
    )
}

export default ThemeToggle