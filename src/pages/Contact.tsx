import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <main>
        <section className="relative h-[300px] bg-gradient-to-r from-primary to-primary-dark text-primary-foreground">
          <div className="container-wide h-full flex items-center">
            <div>
              <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl opacity-90">Get in Touch with Janapriya</p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary">Send Us a Message</h2>
                <Card className="p-8">
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <Input placeholder="Enter your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <Input type="email" placeholder="your.email@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number *</label>
                      <Input type="tel" placeholder="+91 98765 43210" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Program of Interest</label>
                      <Input placeholder="e.g., B.Sc Nursing" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Message *</label>
                      <Textarea placeholder="Write your message here..." rows={5} />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary-dark">Send Message</Button>
                  </form>
                </Card>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary">Contact Information</h2>
                <div className="space-y-6">
                  <Card className="p-6">
                    <div className="flex gap-4">
                      <MapPin className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-bold mb-2">Address</h3>
                        <p className="text-muted-foreground">Janapriya Group of Institutions<br />Padil, Mangaluru<br />Karnataka 575007</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex gap-4">
                      <Phone className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-bold mb-2">Phone</h3>
                        <p className="text-muted-foreground">+91 91482 47799</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex gap-4">
                      <Mail className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-bold mb-2">Email</h3>
                        <p className="text-muted-foreground">info@janapriya.edu.in</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
