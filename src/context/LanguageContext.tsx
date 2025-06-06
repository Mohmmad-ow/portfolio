import React, { createContext, useState, useEffect, type ReactNode } from 'react';
import i18n from '../i18n';

interface LanguageContextProps {
    language: string;
    toggleLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState<string>('en');

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') || 'en';
        setLanguage(savedLanguage);
        i18n.changeLanguage(savedLanguage);
        document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = savedLanguage;
    }, []);

    const toggleLanguage = () => {
        const newLanguage = language === 'en' ? 'ar' : 'en';
        setLanguage(newLanguage);
        localStorage.setItem('language', newLanguage);
        i18n.changeLanguage(newLanguage);
        document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = newLanguage;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};