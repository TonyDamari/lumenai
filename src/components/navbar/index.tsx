"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"

import { useArticlesContext } from "@/app/context/ArticlesContext"
import debounce from "@/utils/helpers"

const Navbar = () => {
  const { setSearchTerm, setFilters, filters, setLatest, setPage } = useArticlesContext()
  const [activeTab, setActiveTab] = useState("All")
  const router = useRouter()
  const pathname = usePathname()

  const handleTabClick = (tab: "All" | "Latest" | "Featured") => {
    setPage(1)
    setActiveTab(tab)
    if (pathname !== "/articles") {
      router.push("/articles")
    }
    if (tab === "All") {
      setFilters({ ...filters, featured: false })
      setLatest(false)
    } else if (tab === "Latest") {
      setLatest(true)
    } else if (tab === "Featured") {
      setFilters({ ...filters, featured: true })
      setLatest(false)
    }
  }

  return (
    <nav className="bg-dark_blue p-6 sm:px-24 sm:py-20 relative overflow-hidden z-0">
      {/* Mobile layout */}
      <div className="flex flex-col sm:hidden">
        <div className="absolute inset-0 -z-10">
          <div className="radial-gradient-blue left-10 top-20 rotate-75" />
          <div className="radial-gradient-blue -left-32 top-28 rotate-75" />
        </div>
        <div className="flex items-center justify-between mb-4">
          <Image src="./svgs/logos/lumenai-logo-navigation.svg" width={100} height={20} alt="Lumenai Logo" />
          <Image src="./svgs/icon-nav.svg" width={20} height={20} alt="Nav Icon" />
        </div>

        <div className="my-8">
          <p className="text-5xl font-semibold text-white text-center">News</p>
          <p className="text-5xl font-semibold text-white text-center">& Events</p>
        </div>

        <div className="flex justify-center">
          <div className="border border-1 border-white rounded-full flex min-w-[290px]  justify-between">
            <div className="px-4 py-1 flex items-center justify-center gap-5">
              <Image
                src="./svgs/icon-search.svg"
                width={20}
                height={20}
                alt="Arrow Right"
                className="-rotate-90rounded-full"
              />
              <input
                onChange={debounce(300, (e) => {
                  setSearchTerm(e.target.value)
                })}
                type="text"
                placeholder="SEARCH"
                className="text-white placeholder:text-white placeholder:text-xs placeholder:leading-3 placeholder:tracking-widest placeholder:font-semibold bg-transparent outline-none"
              />
            </div>
            <button className="relative cursor-pointer ">
              <div className=" absolute bg-white opacity-20 w-8 h-8 top-0 right-0 bottom-0  rounded-full flex items-center justify-center">
                <Image
                  src="./svgs/icon-arrow-down-grey.svg"
                  width={32}
                  height={32}
                  alt="Arrow Right"
                  className="-rotate-90"
                />
              </div>
            </button>
          </div>
        </div>

        <ul className="flex items-center justify-center gap-3 text-center mt-5">
          <li>
            <button
              onClick={() => handleTabClick("All")}
              className={`text-white text-xs ${activeTab === "All" ? "font-bold" : ""}`}
            >
              All
            </button>
          </li>
          <li>
            <button
              onClick={() => handleTabClick("Latest")}
              className={`text-white text-xs ${activeTab === "Latest" ? "font-bold" : ""}`}
            >
              Latest
            </button>
          </li>
          <li>
            <button
              onClick={() => handleTabClick("Featured")}
              className={`text-white text-xs ${activeTab === "Featured" ? "font-bold" : ""}`}
            >
              Featured
            </button>
          </li>
        </ul>
      </div>

      {/*  Larger Screens */}
      <div className="hidden sm:flex items-center justify-between">
        <div className="absolute inset-0 -z-10">
          <div className="radial-gradient-green left-1/2 -top-48 rotate-6" />
          <div className="radial-gradient-blue -left-1/4 top-1/2 rotate-25" />
        </div>
        <Link href="/">
          <Image src="./svgs/logos/lumenai-logo-navigation.svg" width={180} height={50} alt="Lumenai Logo" />
        </Link>
        <div className="flex items-center justify-between">
          <div className="border border-1 border-white rounded-full flex min-w-[390px]  justify-between">
            <div className="px-7 py-3 flex items-center justify-center gap-5">
              <Image
                src="./svgs/icon-search.svg"
                width={20}
                height={20}
                alt="Arrow Right"
                className="-rotate-90rounded-full"
              />
              <input
                onChange={debounce(300, (e) => {
                  setSearchTerm(e.target.value)
                })}
                type="text"
                placeholder="SEARCH"
                className="text-white flex-grow placeholder:text-white placeholder:text-xs placeholder:leading-3 placeholder:tracking-widest placeholder:font-semibold bg-transparent outline-none"
              />
            </div>
            <button className="relative cursor-pointer ">
              <div className=" absolute bg-white opacity-20 w-12 h-12 top-0 right-0 bottom-0  rounded-full flex items-center justify-center">
                <Image
                  src="./svgs/icon-arrow-down-grey.svg"
                  width={50}
                  height={50}
                  alt="Arrow Right"
                  className="-rotate-90"
                />
              </div>
            </button>
          </div>
          <Image src="./svgs/icon-nav.svg" width={20} height={20} alt="Nav Icon" className="ml-12 cursor-pointer" />
        </div>
      </div>
      <div className="hidden sm:flex items-center justify-between mt-10">
        <h1 className="text-7xl font-bold text-white">News & Events</h1>
        <ul className="flex items-center gap-11">
          <li>
            <button
              onClick={() => handleTabClick("All")}
              className={`text-white text-xl cursor-pointer ${activeTab === "All" ? "font-bold" : ""}`}
            >
              All
            </button>
          </li>
          <li>
            <button
              onClick={() => handleTabClick("Latest")}
              className={`text-white text-xl cursor-pointer ${activeTab === "Latest" ? "font-bold" : ""}`}
            >
              Latest
            </button>
          </li>
          <li>
            <button
              onClick={() => handleTabClick("Featured")}
              className={`text-white text-xl cursor-pointer ${activeTab === "Featured" ? "font-bold" : ""}`}
            >
              Featured
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
