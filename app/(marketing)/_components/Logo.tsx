import Image from 'next/image';
import { Poppins } from 'next/font/google';

import { cn } from '@/lib/utils';

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
});

export const DeepNotes = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src="/deepnotes.png"
        height="40"
        width="40"
        alt="deepnotes"
        className="dark:hidden"
      />
      <Image
        src="/deepnotes-dark.png"
        height="40"
        width="40"
        alt="deepnotes"
        className="hidden dark:block"
      />
      <p className={cn('font-semibold', font.className)}>DeepNotes</p>
    </div>
  );
};
