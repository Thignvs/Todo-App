import { useState, useEffect } from 'react';

const useTheme = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            setTheme(currentTheme);
        } else {
            const userPrefersDark =
                window.matchMedia &&
                window.matchMedia('(prefers-color-scheme: dark)').matches;
            setTheme(userPrefersDark ? 'dark' : 'light');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark');
    };

    return { theme, toggleTheme };
};

export default useTheme;
