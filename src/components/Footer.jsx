import {
  FaFacebookF,
  FaTwitter,
  FaDiscord,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Main footer */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo (descargar como png) */}
          <div className="md:col-span-1 flex items-start">
            <img src="/Logo2.png" alt="Logo" className="h-[57px] w-[168px]" />
          </div>

          {/* Columnas */}
          {/* Marketplace */}
          <div>
            <h3 className="text-white font-manrope font-medium text-lg mb-4">
              Marketplace
            </h3>
            <ul className="space-y-2 text-[#FFFFFF87] font-azeret-mono text-sm font-normal">
              <li>
                <a href="#" className="hover:text-white transition">
                  All NFTs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Virtual worlds
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Domain names
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Photography
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Digital art
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Music
                </a>
              </li>
            </ul>
          </div>

          {/* Resource */}
          <div>
            <h3 className="text-white font-manrope font-medium text-lg mb-4">
              Resource
            </h3>
            <ul className="space-y-2 text-[#FFFFFF87] font-azeret-mono text-sm font-normal">
              <li>
                <a href="#" className="hover:text-white transition">
                  Help center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Platform status
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Discount community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Live auctions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Discover
                </a>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-white mb-4 font-manrope font-medium text-lg">
              Account
            </h3>
            <ul className="space-y-2 text-[#FFFFFF87] font-azeret-mono text-sm font-normal">
              <li>
                <a href="#" className="hover:text-white transition">
                  Authors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  My Collection
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Author Profile
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Go to dashboard
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Collection
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Create Collection
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-medium text-lg mb-4 font-manrope">
              Company
            </h3>
            <ul className="space-y-2 text-[#FFFFFF87] font-azeret-mono text-sm font-normal">
              <li>
                <a href="#" className="hover:text-white transition">
                  Help center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Platform status
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <h3 className="text-white mb-4 font-manrope font-medium text-lg">
                Join the community
              </h3>
              <div className="flex space-x-2.5 max-w-[180px]">
                <a
                  href="#"
                  className="bg-[#222222] text-white p-2 rounded-full flex items-center justify-center hover:bg-[#292929] transition"
                >
                  <FaFacebookF size={17} />
                </a>
                <a
                  href="#"
                  className="bg-[#222222] text-white p-2 rounded-full flex items-center justify-center hover:bg-[#292929] transition"
                >
                  <FaTwitter size={17} />
                </a>
                <a
                  href="#"
                  className="bg-[#222222] text-white p-2 rounded-full flex items-center justify-center hover:bg-[#292929] transition"
                >
                  <FaDiscord size={17} />
                </a>
                <a
                  href="#"
                  className="bg-[#222222] text-white p-2 rounded-full flex items-center justify-center hover:bg-[#292929] transition"
                >
                  <FaTiktok size={17} />
                </a>
                <a
                  href="#"
                  className="bg-[#222222] text-white p-2 rounded-full flex items-center justify-center hover:bg-[#292929] transition"
                >
                  <FaYoutube size={17} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* 2da section (abajo) */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0 text-[#FFFFFF87] font-azeret-mono font-normal">
            © 2023 OpeN9 - Made By Themesflat
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="font-azeret-mono text-sm font-normal hover:text-white transition text-[#FFFFFF87]"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-azeret-mono text-sm font-normal hover:text-white transition text-[#FFFFFF87]"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
