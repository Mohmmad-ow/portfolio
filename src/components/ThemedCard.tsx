import { useAppContext } from '../context/useAppContext';

function ThemedCard() {
  const { theme, language } = useAppContext();

  return (
    <div className={`
      max-w-md rounded overflow-hidden shadow-lg
      ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}
      ${language === 'ar' ? 'text-right' : 'text-left'}
    `}>
      <div className="px-6 py-4">
        <div className={`font-bold text-xl mb-2 ${theme === 'dark' ? 'text-purple-300' : 'text-purple-700'}`}>
          Themed Card Title
        </div>
        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} text-base`}>
          This card automatically adapts to your selected theme and language direction.
        </p>
      </div>
    </div>
  );
}

export default ThemedCard;