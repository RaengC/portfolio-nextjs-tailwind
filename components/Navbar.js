import Link from "next/Link"

export default function Navbar() {
    return (
      <>
        <nav class="bg-gray-800" x-data="{ open: false }">
          <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between h-16">
              <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* <!-- Mobile menu button--> */}
                <button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
                  <span class="sr-only">Open main menu</span>
                  {/* <!-- Icon when menu is closed. -->
                  <!--
                    Heroicon name: menu

                    Menu open: "hidden", Menu closed: "block"
                  --> */}
                  <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  {/* <!-- Icon when menu is open. -->
                  <!--
                    Heroicon name: x

                    Menu open: "block", Menu closed: "hidden"
                  --> */}
                  <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div class="flex-shrink-0 flex items-center">
                  <img class="block lg:hidden h-8 w-auto" src="images/Logo.jpg" alt="Workflow" />
                  <img class="hidden lg:block h-8 w-auto" src="images/Logo.jpg" alt="Workflow" />
                </div>
                <div class="hidden sm:block sm:ml-6">
                  <div class="ml-10 flex items-baseline space-x-4">
                    <Link href="/content/about">
                      <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        About
                      </a>
                    </Link>
                    <Link href="/content/portfolio">
                      <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Portfolio
                      </a>
                    </Link>
                    <Link href="#">
                      <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Contact
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </nav>
    </>
    )
}