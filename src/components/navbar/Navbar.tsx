import { Button } from "@/components/ui/button";
import { Logo } from "@/components/navbar/Logo";
import { NavMenu } from "@/components/navbar/Nav-menu";
import { NavigationSheet } from "@/components/navbar/Navigation-sheet";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "@tanstack/react-router";

export const Navbar = () => {
  return (
    <nav className="h-16 bg-background border-b">
      <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
       <Link to="/"><Logo /></Link> 

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          {/* Login Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="hidden sm:inline-flex">
                Sign In
              </Button>
            </SheetTrigger>
            <SheetContent  className="w-full sm:max-w-md flex flex-col">
              <div className="flex-1 flex items-center justify-center overflow-y-auto py-6">
                <div className="w-full max-w-sm px-4">
                <form className="flex flex-col items-center justify-center space-y-6">
                  <div className="flex justify-center mb-4">
                    <Logo />
                  </div>
                  
                  <div className="text-center">
                    <h2 className="text-3xl text-gray-900 font-medium">Sign in</h2>
                    <p className="text-sm text-gray-500/90 mt-2">
                      Welcome back! Please sign in to continue
                    </p>
                  </div>

                  <button
                    type="button"
                    className="w-full bg-gray-500/10 flex items-center justify-center h-12 rounded-full hover:bg-gray-500/20 transition-colors"
                  >
                    <img
                      src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg"
                      alt="googleLogo"
                    />
                  </button>

                  <div className="flex items-center gap-4 w-full">
                    <div className="w-full h-px bg-gray-300/90"></div>
                    <p className="text-nowrap text-sm text-gray-500/90">
                      or sign in with email
                    </p>
                    <div className="w-full h-px bg-gray-300/90"></div>
                  </div>

                  <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
                    <svg
                      width="16"
                      height="11"
                      viewBox="0 0 16 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z"
                        fill="#6B7280"
                      />
                    </svg>
                    <input
                      type="email"
                      placeholder="Email id"
                      className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
                      required
                    />
                  </div>

                  <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
                    <svg
                      width="13"
                      height="17"
                      viewBox="0 0 13 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z"
                        fill="#6B7280"
                      />
                    </svg>
                    <input
                      type="password"
                      placeholder="Password"
                      className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
                      required
                    />
                  </div>

                  <div className="w-full flex items-center justify-between text-gray-500/80">
                    <div className="flex items-center gap-2">
                      <input className="h-5" type="checkbox" id="checkbox" />
                      <label className="text-sm" htmlFor="checkbox">
                        Remember me
                      </label>
                    </div>
                    <a className="text-sm underline hover:text-gray-700" href="#">
                      Forgot password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity"
                  >
                    Login
                  </button>
                  <p className="text-gray-500/90 text-sm">
                    Don't have an account?{" "}
                    <a className="text-indigo-400 hover:underline" href="#">
                      Sign up
                    </a>
                  </p>
                </form>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Button><Link to="/signup">Get Started</Link></Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};