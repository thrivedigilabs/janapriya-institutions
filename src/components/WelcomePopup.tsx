import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after a short delay
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem("hasSeenWelcomePopup");
      if (!hasSeenPopup) {
        setIsOpen(true);
        sessionStorage.setItem("hasSeenWelcomePopup", "true");
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
        
        <div className="relative">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground p-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Admissions Open</h2>
            <p className="text-xl mb-1">Batch 2025-26</p>
            <p className="text-sm opacity-90">
              Affiliated to Rajiv Gandhi University of Health Sciences
            </p>
            <p className="text-sm opacity-90">Recognized by Government of Karnataka</p>
          </div>

          {/* Content Section */}
          <div className="p-8 bg-accent/30">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 text-primary">Available Programs</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>B.Sc Nursing (4 Years + 6 Months Internship)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>BPT - Bachelor of Physiotherapy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>B.Sc Medical Laboratory Technology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>B.Sc Emergency Medicine & Trauma Care</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Diploma Programs in Allied Health</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3 text-primary">Why Choose Us?</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">✓</span>
                    <span>RGUHS Affiliated Programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">✓</span>
                    <span>State-of-the-Art Infrastructure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">✓</span>
                    <span>Experienced Faculty</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">✓</span>
                    <span>100% Placement Assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">✓</span>
                    <span>Scholarship for Meritorious Students</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
                <a href="/apply">Apply Now</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="/admissions">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomePopup;
