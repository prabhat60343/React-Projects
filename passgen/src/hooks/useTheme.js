import { useState } from 'react';

function useTheme(initialTheme = 'light') {
    const [theme, setTheme] = useState(initialTheme);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return { theme, toggleTheme };
}

export default useTheme;
