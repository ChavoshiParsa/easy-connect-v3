import LocaleSelector from './LocaleSelector';
import { ModeToggle } from './ModeToggle';

export default function SettingActionButtons() {
  return (
    <div className="flex items-center justify-center gap-1">
      <LocaleSelector />
      <ModeToggle />
    </div>
  );
}
