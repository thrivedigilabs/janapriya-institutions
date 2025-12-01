import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "About",
      href: "/about",
      submenu: [
        { name: "Overview", href: "/about#overview" },
        { name: "Vision & Mission", href: "/about#vision" },
        { name: "Governance", href: "/about#governance" },
        { name: "Leadership", href: "/about#leadership" },
        { name: "Approvals", href: "/about#approvals" },
      ],
    },
    {
      name: "Academics",
      href: "/academics",
      submenu: [
        { name: "Faculties", href: "/academics#faculties" },
        { name: "Programs", href: "/academics#programs" },
        { name: "Academic Calendar", href: "/academics#calendar" },
      ],
    },
    { name: "Admissions", href: "/admissions" },
    { name: "Examinations", href: "/examinations" },
    { name: "Resources", href: "/resources" },
    { name: "Students", href: "/students" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background">
      {/* Top Bar */}
      <div className="bg-institutional text-institutional-foreground py-2">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm gap-2">
            <div className="flex items-center gap-6">
              <a href="mailto:info@janapriya.edu.in" className="flex items-center gap-2 hover:opacity-80">
                <Mail className="h-4 w-4" />
                <span>info@janapriya.edu.in</span>
              </a>
              <a href="tel:+919148247799" className="flex items-center gap-2 hover:opacity-80">
                <Phone className="h-4 w-4" />
                <span>+91 91482 47799</span>
              </a>
            </div>
            <div className="text-xs">
              Affiliated to Rajiv Gandhi University of Health Sciences
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container-wide">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Janapriya Logo" className="h-14 w-14" />
              <div>
                <div className="font-bold text-lg text-primary leading-tight">Janapriya</div>
                <div className="text-sm text-muted-foreground">Group of Institutions</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1"
                  >
                    {item.name}
                    {item.submenu && <ChevronDown className="h-3 w-3" />}
                  </Link>
                  {item.submenu && (
                    <div className="absolute top-full left-0 w-56 bg-background border shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          to={subitem.href}
                          className="block px-4 py-3 text-sm hover:bg-accent transition-colors"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button asChild className="bg-primary hover:bg-primary-dark">
                <Link to="/apply">Apply Now</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <button className="p-2">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[85%] sm:w-[400px] p-0">
                <div className="flex flex-col h-full">
                  {/* Logo Section */}
                  <div className="p-6 border-b">
                    <Link to="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                      <img src={logo} alt="Janapriya Logo" className="h-12 w-12" />
                      <div>
                        <div className="font-bold text-base text-primary leading-tight">Janapriya</div>
                        <div className="text-xs text-muted-foreground">Group of Institutions</div>
                      </div>
                    </Link>
                  </div>

                  {/* Navigation */}
                  <nav className="flex-1 overflow-y-auto py-4 px-4 space-y-1">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        <Link
                          to={item.href}
                          className="flex items-center justify-between px-4 py-3 text-base font-medium hover:bg-accent rounded-md transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span>{item.name}</span>
                          {item.submenu && <ChevronDown className="h-4 w-4" />}
                        </Link>
                        {item.submenu && (
                          <div className="ml-4 mt-1 space-y-1">
                            {item.submenu.map((subitem) => (
                              <Link
                                key={subitem.name}
                                to={subitem.href}
                                className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {subitem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </nav>

                  {/* Apply Now Button */}
                  <div className="p-4 border-t">
                    <Button asChild className="w-full bg-primary hover:bg-primary-dark">
                      <Link to="/apply" onClick={() => setIsMobileMenuOpen(false)}>
                        Apply Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
