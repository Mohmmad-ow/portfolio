import { useAppContext } from '../context/useAppContext';
import { useTranslation } from 'react-i18next';

function ProfileCard() {
  const { theme, toggleTheme, language, toggleLanguage } = useAppContext();
  const { t } = useTranslation();

  return (
    <div className={`
      p-6 rounded-lg shadow
      ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'}
      ${language === 'ar' ? 'text-right' : 'text-left'}
    `}>
      <h2 className="text-xl font-bold mb-4">{t('profile')}</h2>
      <p className="mb-4">{t('welcome_message')}</p>
      
      <div className="flex gap-2">
        <button 
          onClick={toggleTheme}
          className="px-3 py-1 bg-blue-500 text-white rounded"
        >
          {t('toggle_theme')}
        </button>
        <button 
          onClick={toggleLanguage}
          className="px-3 py-1 bg-green-500 text-white rounded"
        >
          {t('toggle_language')}
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;