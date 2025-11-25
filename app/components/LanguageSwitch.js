'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LanguageSwitcher() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLocale, setCurrentLocale] = useState('en');
  const router = useRouter();
  const pathname = usePathname();

  //  locale list with flag icons
  const locales = {
    en: { label: 'English', flag: '/assets/en.png' },
    mm: { label: 'မြန်မာ', flag: '/assets/mm.png' },
  };

  // detect locale from URL
  useEffect(() => {
    if (!pathname) return;
    const pathSegments = pathname.split('/').filter(Boolean);
    const firstSegment = pathSegments[0];
    if (Object.keys(locales).includes(firstSegment)) {
      setCurrentLocale(firstSegment);
    } else {
      setCurrentLocale('en');
    }
  }, [pathname]);

  // change language
  const changeLocale = (locale) => {
    const pathSegments = pathname.split('/').filter(Boolean);
    const current = pathSegments[0];
    if (Object.keys(locales).includes(current)) {
      pathSegments[0] = locale;
    } else {
      pathSegments.unshift(locale);
    }
    const newPath = '/' + pathSegments.join('/');
    router.push(newPath);
    setIsLangOpen(false);
  };

  return (
    <div className="relative">
      {/* --- Main Button --- */}
      <button
        onClick={() => setIsLangOpen(!isLangOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-md  transition"
      >
        <Image
          src={locales[currentLocale].flag}
          alt={locales[currentLocale].label}
          width={20}
          height={20}
          className="rounded-sm"
        />
        <span className="uppercase font-medium">{currentLocale}</span>
      </button>

      {/* --- Dropdown --- */}
      <div
        className={`absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform ${
          isLangOpen
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col">
          {Object.entries(locales).map(([key, { label, flag }]) => (
            <li
              key={key}
              onClick={() => changeLocale(key)}
              className={`flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer transition ${
                key === currentLocale ? 'bg-gray-50 font-semibold' : ''
              }`}
            >
              <Image
                src={flag}
                alt={label}
                width={20}
                height={20}
                className="rounded-sm"
              />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
