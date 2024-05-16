import React from 'react'

const UserRole = () => {
  return (
    <div className=" ">
      <form>
        <div className="container shadow-2xl p-10 ">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-center font-semibold leading-7  text-gray-900">
               Change Your User Role
            </h2>
            {/* fprm table */}
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {/* Role */}
<div className="sm:col-span-4 lg:col-span-12">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email{" "}
                </label>
                <div className="mt-2 ">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md px-3 border-0 py-2 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Select user</option>
                    <option>Bikash@gmail.com </option>
                    <option>Raju@gmail.com </option>
                    <option>Amit@gmail.com </option>
                    <option>Jamal@gmail.com </option>
                    <option>Sanjip@gmail.com </option>
                  </select>
                </div>
              </div>
                       
{/* Role */}
<div className="sm:col-span-4 lg:col-span-12">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                 Select Role{" "}
                </label>
                <div className="mt-2 ">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md px-3 border-0 py-2 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Role</option>
                    <option>Customer </option>
                    <option>Admin </option>
                    <option>Manager </option>
                    <option>Delivery </option>
                    <option>Member </option>
                  </select>
                </div>
              </div>
              
            </div>
          </div>
          {/*  save and canccel button */}
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="submit"
              className="rounded-md  px-3 py-2 text-sm font-semibold  hover:text-white shadow-sm text-gray-900 hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md  px-3 py-2 text-sm font-semibold  hover:text-white shadow-sm text-gray-900 hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default UserRole