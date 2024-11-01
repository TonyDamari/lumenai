import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className="bg-dark_blue w-full mt-10">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left px-16 py-7 sm:py-16 text-sm sm:px-24 ">
        <p className="text-white text-xs sm:text-sm mb-4 capitalize sm:mb-0 order-3 sm:order-1 opacity-40">
          &copy;{year} Lumenai Investments LLC All Rights Reserved
        </p>

        <div className="flex items-center justify-center mb-4 sm:mb-0 order-1 sm:order-2">
          <Link href="#" className="text-white">
            <Image src="./svgs/icon-x.svg" width={20} height={20} alt="X" className="w-2 h-2 sm:w-5 sm:h-5" />
          </Link>
          <Link href="#" className="text-white ml-3 sm:ml-5">
            <Image
              src="./svgs/icon-linkedin.svg"
              width={20}
              height={20}
              alt="LinkedIn"
              className="w-2 h-2 sm:w-5 sm:h-5"
            />
          </Link>
        </div>

        <div className="flex justify-center sm:justify-end order-2 text-sx sm:text-sm sm:order-3 opacity-40">
          <Link href="#" className="text-white text-xs sm:text-sm">
            Privacy Policy
          </Link>
          <span className="text-white mx-2 text-sm">|</span>
          <Link href="#" className="text-white text-xs sm:text-sm">
            Terms of Use
          </Link>
        </div>
      </div>
      <hr className="border-white opacity-20" />
      <div className="flex flex-col items-center justify-center p-6 sm:px-24 sm:py-16 sm:px-20">
        <div className="flex justify-center mb-4 h-4 sm:h-20">
          <Image src="./svgs/logos/lumenai-logo-footer.svg" alt="Lumenai Logo" width={100} height={80} />
        </div>
        <p className="text-center text-xs sm:text-sm text-white mt-2 sm:mt-5 opacity-40">
          Lumenai revolutionizes investment management through AI. Partnering with ETS Asset Factory, Lumenai combines
          cutting-edge artificial intelligence with deep wealth management expertise. Investors and advisors use
          Lumenai&apos;s platform to achieve superior results, save valuable time, and scale their operations
          efficiently.
        </p>
      </div>
    </div>
  )
}

export default Footer
