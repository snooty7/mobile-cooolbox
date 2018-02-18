import I18n from 'ex-react-native-i18n';
import en from './locales/en';
import fr from './locales/fr';
import bg from './locales/bg';

I18n.fallbacks = true;

I18n.translations = {
    en,
    fr,
    bg
};

export default I18n;
