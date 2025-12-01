import { Card } from "@/components/ui/card";
import { BookOpen, Building2, Briefcase, FlaskConical, Users, HeartHandshake } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import libraryImg from "@/assets/library.jpg";
import labImg from "@/assets/hero-lab-1.jpg";
import campusImg from "@/assets/hero-campus-1.jpg";

const Resources = () => {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="relative h-[300px] bg-gradient-to-r from-primary to-primary-dark text-primary-foreground">
          <div className="container-wide h-full flex items-center">
            <div>
              <h1 className="text-5xl font-bold mb-4">Resources</h1>
              <p className="text-xl opacity-90">World-Class Facilities & Support</p>
            </div>
          </div>
        </section>

        {/* Library */}
        <section className="section-padding" id="library">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="h-10 w-10 text-primary" />
                  <h2 className="text-4xl font-bold text-primary">Library</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Our state-of-the-art library is the knowledge hub of the institution, providing access to vast resources for academic excellence and research.
                </p>
                <Card className="p-6 mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-secondary">Library Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>Over 15,000 books covering all healthcare disciplines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>200+ national and international journals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>Digital library with e-books and e-journals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>Spacious reading rooms with 200+ seating capacity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>Online database access for research</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>Computer terminals with internet facility</span>
                    </li>
                  </ul>
                </Card>
                <p className="text-muted-foreground">
                  <strong>Timings:</strong> Monday to Saturday, 8:00 AM to 8:00 PM
                </p>
              </div>
              <div>
                <img src={libraryImg} alt="Library" className="rounded-lg shadow-lg w-full h-96 object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Training & Placement */}
        <section className="section-padding bg-accent/20" id="placement">
          <div className="container-wide">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Briefcase className="h-10 w-10 text-primary" />
                <h2 className="text-4xl font-bold text-primary">Training & Placement</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our dedicated Training & Placement Cell ensures 100% placement assistance to all our graduates, connecting them with leading healthcare institutions across India.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Placement Statistics 2023-24</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="font-semibold">Students Placed</span>
                    <span className="text-2xl font-bold text-secondary">500+</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="font-semibold">Placement Rate</span>
                    <span className="text-2xl font-bold text-secondary">100%</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="font-semibold">Highest Package</span>
                    <span className="text-2xl font-bold text-secondary">₹6.5 LPA</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Average Package</span>
                    <span className="text-2xl font-bold text-secondary">₹3.8 LPA</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Placement Partners</h3>
                <p className="text-muted-foreground mb-4">We have partnerships with leading healthcare institutions:</p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Manipal Hospitals",
                    "Apollo Hospitals",
                    "Fortis Healthcare",
                    "Max Healthcare",
                    "Columbia Asia",
                    "Narayana Health",
                    "Aster DM Healthcare",
                    "Government Hospitals",
                  ].map((hospital, index) => (
                    <div key={index} className="bg-accent/30 p-3 rounded text-center text-sm font-semibold">
                      {hospital}
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Training Programs</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold mb-2 text-secondary">Skill Development</h4>
                  <p className="text-sm text-muted-foreground">Regular workshops on clinical skills, communication, and professional etiquette</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-secondary">Interview Preparation</h4>
                  <p className="text-sm text-muted-foreground">Mock interviews, resume building, and personality development sessions</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-secondary">Industry Exposure</h4>
                  <p className="text-sm text-muted-foreground">Regular visits to hospitals, seminars by industry experts, and internships</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Infrastructure */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Building2 className="h-10 w-10 text-primary" />
                <h2 className="text-4xl font-bold text-primary">Infrastructure & Facilities</h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="overflow-hidden">
                <img src={labImg} alt="Laboratories" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <FlaskConical className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl font-bold text-primary">Advanced Laboratories</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• State-of-the-art medical laboratory technology labs</li>
                    <li>• Nursing simulation lab with modern equipment</li>
                    <li>• Anatomy and physiology laboratories</li>
                    <li>• Microbiology and pathology labs</li>
                    <li>• Computer labs with internet facility</li>
                  </ul>
                </div>
              </Card>

              <Card className="overflow-hidden">
                <img src={campusImg} alt="Campus" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Building2 className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl font-bold text-primary">Campus Facilities</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Spacious air-conditioned classrooms</li>
                    <li>• Modern auditorium for seminars and events</li>
                    <li>• Separate hostels for boys and girls</li>
                    <li>• Sports facilities and gymnasium</li>
                    <li>• Cafeteria with hygienic food</li>
                    <li>• 24/7 security and medical facility</li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Research & Extension */}
        <section className="section-padding bg-accent/20">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="h-10 w-10 text-primary" />
                  <h2 className="text-3xl font-bold text-primary">Research</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  We encourage research and innovation among students and faculty. Our research initiatives focus on addressing healthcare challenges and improving patient outcomes.
                </p>
                <h3 className="font-bold mb-4 text-secondary">Research Focus Areas</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Community health and epidemiology</li>
                  <li>• Clinical nursing research</li>
                  <li>• Healthcare technology innovations</li>
                  <li>• Patient care quality improvement</li>
                  <li>• Allied health sciences advancements</li>
                </ul>
              </Card>

              <Card className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <HeartHandshake className="h-10 w-10 text-primary" />
                  <h2 className="text-3xl font-bold text-primary">Extension & Outreach</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Our extension activities connect students with communities, providing practical experience while serving society.
                </p>
                <h3 className="font-bold mb-4 text-secondary">Community Programs</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Health awareness campaigns</li>
                  <li>• Free health check-up camps</li>
                  <li>• Blood donation drives</li>
                  <li>• Rural health initiatives</li>
                  <li>• School health programs</li>
                  <li>• Elderly care services</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Resources;
