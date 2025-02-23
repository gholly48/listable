import React from "react";

export default function Header() {

  return (
    <header dir="ltr" className="bg-red-500  font-sans">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="hidden lg:flex lg:gap-x-12">
          <div className="relative">

          <a href="#" className="text-xm text-white font-irsans p-4 leading-6 ">
            پنل کاربری
          </a>
          <a href="#" className="text-xm text-white font-irsans p-4 leading-6 ">
            فروشگاه
          </a>
          <a href="#" className="text-xm text-white font-irsans p-4 leading-6 ">
            تنظیمات
          </a>
        </div>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/" className="text-3xl font-sans leading-6 text-white">
            لواسانلاین
          </a>
        </div>       
      </nav>
    </header>
  );
}