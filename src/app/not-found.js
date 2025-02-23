import React from 'react'

export default function notfound() {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
       <div className="text-center">
         <p className="text-base font-semibold text-indigo-600">404</p>
         <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">صفحه پیدا نشد!</h1>
         <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">متأسفیم، ما نتوانستیم صفحه مورد نظر شما را پیدا کنیم</p>
       <div className="mt-10 flex items-center justify-center gap-x-6">
        <a href="/" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">صفحه اصلی</a>
        <a href="#" className="text-sm font-semibold text-gray-900">پشتیبانی <span aria-hidden="true">&rarr;</span></a>
      </div>
   </div>
</main>
  )
}
