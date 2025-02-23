import React from 'react'
import Image from "next/image"
import Logo from "/public/logo.png"

export default function SignIn() {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <Image className="mx-auto h-20 w-auto " src={Logo} alt="Your Company" />
    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">وارد حساب کاربری خود شوید</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST">
      <div>
        <label for="email" className="block text-sm/6 font-medium text-gray-900">ایمیل</label>
        <div className="mt-2">
          <input type="email" name="email" id="email" autocomplete="email" required className="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label for="password" className="block text-sm/6 font-medium text-gray-900">رمز عبود</label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">فراموشی رمز عبور</a>
          </div>
        </div>
        <div className="mt-2">
          <input type="password" name="password" id="password" autocomplete="current-password" required className="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>

    <p classNameName="mt-10 text-center text-sm/6 text-gray-500">
      عضو نیستید ؟
      < br/>
      <a href="#" className="font-Vazir text-indigo-600 hover:text-indigo-500"> یک دوره آزمایشی رایگان 14 روزه را شروع کنید</a>
    </p>
  </div>
</div>
  )
}
