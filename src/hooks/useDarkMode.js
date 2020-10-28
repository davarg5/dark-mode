import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = key => {
    const [someValue, setSomeValue] = useLocalStorage(key, false);
    
    const toggleDarkMode = (value) => {
        setSomeValue(value);
    }

    return [someValue, toggleDarkMode];
}