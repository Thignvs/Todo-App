import React from 'react'
import useTheme from '../components/hooks/Theme'
import light from '../images/icon-moon.svg'
import dark from '../images/icon-sun.svg'

const ThemeToggle = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <div>
            <button onClick={toggleTheme} className='bg-gradient-to-br from-GradientPurple border to-GradientBlue dark:border-DarkGrayishBlueDark  flex gap-3 p-1 rounded-full'>

                <img className={`transition duration-300 ${theme === 'dark' ? 'translate-x-10 opacity-100' : ' opacity-0'}`} src={light} />
                <img className={`transition duration-300 ${theme === 'dark' ? 'opacity-0' : '-translate-x-10 opacity-100'}`} src={dark} />
                


            </button>
        </div>
    )
}

export default ThemeToggle