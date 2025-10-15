import { User } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from './components';

const activeTasks: number = 1; // Change number to test pluralization

const App = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('helloWorld')}</h1>
      <p>{t('activeTasks', { count: activeTasks })}</p>
      <div className="flex gap-2">
        <Button startIcon={<User />}>Primary</Button>
        <Button variant="secondary" startIcon={<User />}>
          Secondary
        </Button>
        <Button variant="ghost" startIcon={<User />}>
          Ghost
        </Button>
        <Button startIcon={<User />} size="icon" />
        <Button variant="ghost" startIcon={<User />} size="icon" />
      </div>
    </div>
  );
};

export { App };
