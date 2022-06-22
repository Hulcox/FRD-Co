import { useRouter } from "next/router"
import { useContext, useState } from "react"
import AppContext from "./AppContext"

const ProfileMenu = ({ children }) => {
  const { setUserLevel } = useContext(AppContext)
  const router = useRouter()
  const selected = router.asPath
  const handleRoute = (href) => {
    selected = href
    router.push("/" + href)
  }

  const DeletAccount = () => {}

  const Logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("userLevel")
    setUserLevel("nc")
    router.push("/home")
  }

  console.log(selected)
  return (
    <div className="flex flex-row mx-auto w-1/2 mt-8 ">
      <div className="w-1/4 h-auto bg-slate-200 shadow-gray-100 shadow-md rounded">
        <ul className="p-1">
          <li className="my-1">
            <button
              className={
                "hover:bg-[#1f2937] hover:opacity-75 hover:text-white text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-xl"
              }
              onClick={DeletAccount}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                <path
                  fillRule="evenodd"
                  d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              My orders
            </button>
          </li>
          <li className="my-1">
            <button
              className={`${
                selected == "/profile/account"
                  ? "bg-[#1f2937] opacity-75 text-white"
                  : "hover:bg-[#1f2937] hover:opacity-75 hover:text-white text-gray-900"
              } group flex rounded-md items-center w-full px-2 py-2 text-xl`}
              onClick={() => handleRoute("profile/account")}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Account
            </button>
          </li>
          <li className="my-1">
            <button
              className={`${
                selected == "/profile/security"
                  ? "bg-[#1f2937] opacity-75 text-white"
                  : "hover:bg-[#1f2937] hover:opacity-75 hover:text-white text-gray-900"
              } group flex rounded-md items-center w-full px-2 py-2 text-xl`}
              onClick={() => handleRoute("profile/security")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Security
            </button>
          </li>
          <li className="my-1">
            <button
              className={
                "hover:bg-[#1f2937] hover:opacity-75 hover:text-white text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-xl"
              }
              onClick={DeletAccount}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                <path
                  fillRule="evenodd"
                  d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                  clipRule="evenodd"
                />
              </svg>
              My credit card
            </button>
          </li>
          <li className="my-1">
            <button
              className={
                "hover:bg-[#1f2937] hover:opacity-75 hover:text-white text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-xl"
              }
              onClick={Logout}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                  clipRule="evenodd"
                />
              </svg>
              Deconnetion
            </button>
          </li>
        </ul>
      </div>
      {children}
    </div>
  )
}

export default ProfileMenu
