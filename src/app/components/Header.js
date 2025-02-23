"use client"

import { useState } from 'react';

export default function Header() {
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);

  const toggleProductMenu = () => {
    setIsProductMenuOpen(!isProductMenuOpen);
  };

  return (
    <header dir="ltr" className="bg-white font-irsans">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="hidden lg:flex lg:gap-x-12">
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
              onClick={toggleProductMenu}
              aria-expanded={isProductMenuOpen}
            >
              محصولات
              <svg
                className="h-5 w-5 flex-none text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Flyout Menu */}
            {isProductMenuOpen && (
              <div dir="rtl" className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <svg
                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.5 6a7.5 7.5 0 100 15h7.5a7.5 7.5 0 000-15h-7.5zM13.5 10.5H21a7.5 7.5 0 010 15h-7.5V10.5z"
                        />
                      </svg>
                    </div>
                    <div className="flex-auto">
                      <a href="#" className="block font-semibold text-gray-900">
                        آنالیتیک
                        <span className="absolute inset-0" aria-hidden="true"></span>
                      </a>
                      <p className="mt-1 text-gray-600">باعث میشه بهتر ترافیک رو بفهمی</p>
                    </div>
                  </div>
                  {/* سایر آیتم‌های منو */}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  <a href="#" className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
                    نمایش دمو
                  </a>
                  <a href="#" className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
                    ارتباط با فروش
                  </a>
                </div>
              </div>
            )}
          </div>

          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            پنل کاربری
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            فروشگاه
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            تنظیمات
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            ورود<span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
}