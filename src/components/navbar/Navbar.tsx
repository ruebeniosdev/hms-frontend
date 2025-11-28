import { Button } from "@/components/ui/button";
import { Logo } from "@/components/navbar/Logo";
import { Link } from "@tanstack/react-router";

export const Navbar = () => {
  return (
    <nav className="h-16 bg-background border-b">
      <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/">
          <Logo />
        </Link>

        <div className="flex items-center gap-3">
          {/* Login Sheet */}

          <Button>
            <Link to="/">Get Started</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};
