import { Button } from '@/components/ui/button';
import { DeepNotes } from './Logo';

export function Footer() {
  return (
    <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#rgb(10,13,17)]">
      <DeepNotes />
      <div
        className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2
        text-muted-foreground"
      >
        {/* <Button variant="ghost" size="sm">
          Privacy Policy
        </Button> */}
        <Button variant="ghost" size="sm">
          ©Abhyudaya 2023-2025
        </Button>
      </div>
    </div>
  );
}
