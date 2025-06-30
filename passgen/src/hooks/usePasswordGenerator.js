// hooks/usePasswordGenerator.js
import { useState, useCallback, useEffect } from 'react';

function usePasswordGenerator() {
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");

    const generatePassword = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (numberAllowed) str += "0123456789";
        if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

        for (let i = 1; i <= length; i++) {
            const char = Math.floor(Math.random() * str.length);
            pass += str.charAt(char);
        }

        setPassword(pass);
    }, [length, numberAllowed, charAllowed]);

    useEffect(() => {
        generatePassword();
    }, [generatePassword]);

    return {
        password,
        length,
        setLength,
        numberAllowed,
        setNumberAllowed,
        charAllowed,
        setCharAllowed,
        generatePassword,
    };
}

export default usePasswordGenerator;
