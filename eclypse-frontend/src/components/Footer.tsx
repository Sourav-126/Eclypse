import { ChevronUp } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <div
      className="absolute w-full bg-black text-white px-8 py-12"
      style={{ top: "calc(5336px - 215px)", left: 0 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start">
          <div className="flex gap-16">
            <div className="flex flex-col space-y-8">
              <div>
                <h2 className="w-[103px] h-[32px] font-[Neue_Montreal] text-[32px] leading-[100%] font-medium tracking-wide">
                  Eclypse<span className="text-xs align-super">®</span>
                </h2>
              </div>

              <nav className="flex flex-col gap-4">
                <div className="flex items-center gap-[16px]">
                  <Link
                    to="#"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Home
                  </Link>
                  <div className="opacity-[60%]">/</div>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    About
                  </a>
                  <div className="opacity-[60%]">/</div>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Buy
                  </a>
                </div>
                <div className="flex items-center gap-[16px]">
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Our Customers
                  </a>
                  <div className="opacity-[60%]">/</div>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Contacts
                  </a>
                </div>
              </nav>
            </div>

            <div className="flex gap-12">
              <div>
                <h3 className="text-xs uppercase tracking-wider text-gray-400 mb-2">
                  CONTACT
                </h3>
                <p className="text-white text-2xl font-bold ">
                  +91 123-456-7890
                </p>
                <h3 className="text-xs uppercase mt-7 tracking-wider text-gray-400 mb-2">
                  EMAIL
                </h3>
                <p className="text-white text-sm">eclypse@gmail.com</p>
              </div>
            </div>

            <div></div>
          </div>

          <div className="flex flex-col items-end">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-10 h-10 rounded-full cursor-pointer border border-gray-600 flex items-center justify-center hover:border-gray-400 transition-colors"
              aria-label="Back to top"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex justify-end">
            <p className="text-xs text-gray-500">© Eclypse 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}
