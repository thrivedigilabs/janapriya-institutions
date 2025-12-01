import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const faculties = [
    { name: "Faculty of Nursing", href: "/academics#nursing" },
    { name: "Faculty of Paramedical Sciences", href: "/academics#paramedical" },
    { name: "Faculty of Allied Health Sciences", href: "/academics#allied" },
    { name: "Faculty of Physiotherapy", href: "/academics#physiotherapy" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Admissions", href: "/admissions" },
    { name: "Examinations", href: "/examinations" },
    { name: "Library", href: "/resources#library" },
    { name: "Training & Placement", href: "/resources#placement" },
    { name: "Student Welfare", href: "/students" },
    { name: "Contact Us", href: "/contact" },
  ];

  const programs = [
    { name: "Undergraduate Programs", href: "/academics#undergraduate" },
    { name: "Certificate Courses", href: "/academics#certificate" },
    { name: "Diploma Programs", href: "/academics#diploma" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Janapriya Logo" className="h-12 w-12" />
              <div>
                <div className="font-bold text-lg leading-tight">Janapriya</div>
                <div className="text-sm opacity-90">Group of Institutions</div>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-6">
              Affiliated to Rajiv Gandhi University of Health Sciences, recognized by the Government of Karnataka. Committed to excellence in health sciences education.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Faculties */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Faculties</h4>
            <ul className="space-y-2">
              {faculties.map((faculty) => (
                <li key={faculty.name}>
                  <Link to={faculty.href} className="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity">
                    {faculty.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex gap-3 text-sm">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="opacity-90">Padil, Mangaluru</p>
                  <p className="opacity-90">Karnataka 575007</p>
                </div>
              </div>
              <div className="flex gap-3 text-sm">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+919148247799" className="opacity-90 hover:opacity-100">
                  +91 91482 47799
                </a>
              </div>
              <div className="flex gap-3 text-sm">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@janapriya.edu.in" className="opacity-90 hover:opacity-100">
                  info@janapriya.edu.in
                </a>
              </div>
            </div>

            <h5 className="font-semibold mt-6 mb-3">Programs</h5>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program.name}>
                  <Link to={program.href} className="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity">
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-90">
            <p>&copy; {new Date().getFullYear()} Janapriya Group of Institutions. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:opacity-100">Privacy Policy</Link>
              <Link to="/terms" className="hover:opacity-100">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
