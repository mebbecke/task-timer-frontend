import { useTranslation } from 'react-i18next';

const activeTasks: number = 1; // Change number to test pluralization

const App = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('helloWorld')}</h1>
      <p>{t('activeTasks', { count: activeTasks })}</p>
    </div>
  );
};

export { App };
