import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Apply = () => {
  return (
    <>
      <Header />
      <main>
        <section className="relative h-[300px] bg-gradient-to-r from-institutional to-primary text-primary-foreground">
          <div className="container-wide h-full flex items-center">
            <div>
              <h1 className="text-5xl font-bold mb-4">Apply Now</h1>
              <p className="text-xl opacity-90">Begin Your Healthcare Career Journey</p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide max-w-4xl">
            <Card className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8 text-primary text-center">Application Form</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name *</label>
                    <Input placeholder="Enter first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name *</label>
                    <Input placeholder="Enter last name" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Mobile Number *</label>
                  <Input type="tel" placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Select Program *</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Choose a program</option>
                    <option>B.Sc Nursing</option>
                    <option>BPT - Physiotherapy</option>
                    <option>B.Sc Medical Laboratory Technology</option>
                    <option>Diploma Programs</option>
                  </select>
                </div>
                <div>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span className="text-sm">I agree to receive information via email and phone</span>
                  </label>
                </div>
                <Button className="w-full bg-primary hover:bg-primary-dark" size="lg">Submit Application</Button>
              </form>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Apply;
