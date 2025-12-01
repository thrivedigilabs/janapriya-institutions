import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import nursingImg from "@/assets/nursing-faculty.jpg";
import labImg from "@/assets/hero-lab-1.jpg";
import studentsImg from "@/assets/hero-students-1.jpg";
import campusImg from "@/assets/hero-campus-1.jpg";
import { GraduationCap, BookOpen, Calendar, FlaskConical, Stethoscope, HeartPulse, Activity } from "lucide-react";

const Academics = () => {
  const faculties = [
    {
      id: "nursing",
      name: "Faculty of Nursing",
      image: nursingImg,
      description: "Our Faculty of Nursing is committed to developing competent, compassionate nurses who excel in patient care. With modern simulation labs, clinical partnerships with leading hospitals, and experienced faculty, we provide comprehensive nursing education.",
      programs: [
        { name: "B.Sc Nursing", duration: "4 Years + 6 Months Internship", eligibility: "10+2 with Science (PCB)" },
        { name: "GNM (General Nursing & Midwifery)", duration: "3 Years + 6 Months Internship", eligibility: "10+2 with any stream" },
        { name: "ANM (Auxiliary Nurse Midwifery)", duration: "2 Years", eligibility: "10th Pass" },
      ],
    },
    {
      id: "paramedical",
      name: "Faculty of Paramedical Sciences",
      description: "Training the next generation of paramedical professionals with state-of-the-art laboratory facilities and hands-on practical experience in medical diagnostics and laboratory technology.",
      image: labImg,
      programs: [
        { name: "B.Sc Medical Laboratory Technology", duration: "3 Years + 1 Year Internship", eligibility: "10+2 with Science (PCB)" },
        { name: "B.Sc Renal Dialysis Technology", duration: "3 Years + 1 Year Internship", eligibility: "10+2 with Science (PCB)" },
        { name: "B.Sc Medical Imaging Technology", duration: "3 Years + 1 Year Internship", eligibility: "10+2 with Science (PCB)" },
        { name: "Diploma in MLT", duration: "2 Years", eligibility: "10+2 with Science" },
      ],
    },
    {
      id: "allied",
      name: "Faculty of Allied Health Sciences",
      description: "Specialized programs in emergency care, operation theatre technology, and occupational therapy, preparing students for critical roles in healthcare delivery.",
      image: studentsImg,
      programs: [
        { name: "B.Sc Emergency Medicine & Trauma Care", duration: "3 Years + 1 Year Internship", eligibility: "10+2 with Science (PCB)" },
        { name: "B.Sc Operation Theater & Anesthesia Technology", duration: "3 Years + 1 Year Internship", eligibility: "10+2 with Science (PCB)" },
        { name: "B.Sc Occupational Therapy (BOT)", duration: "4.5 Years", eligibility: "10+2 with Science (PCB)" },
        { name: "Diploma in OT Technology", duration: "2 Years", eligibility: "10+2 with Science" },
      ],
    },
    {
      id: "physiotherapy",
      name: "Faculty of Physiotherapy",
      description: "Comprehensive physiotherapy education with modern rehabilitation facilities, experienced faculty, and extensive clinical exposure to develop skilled physiotherapy professionals.",
      image: campusImg,
      programs: [
        { name: "Bachelor of Physiotherapy (BPT)", duration: "4 Years + 6 Months Internship", eligibility: "10+2 with Science (PCB)" },
        { name: "Master of Physiotherapy (MPT)", duration: "2 Years", eligibility: "BPT Degree" },
      ],
    },
  ];

  return (
    <>
      <Header />

      <main>
        {/* Page Hero */}
        <section className="relative h-[300px] bg-gradient-to-r from-primary to-primary-dark text-primary-foreground">
          <div className="container-wide h-full flex items-center">
            <div>
              <h1 className="text-5xl font-bold mb-4">Academics</h1>
              <p className="text-xl opacity-90">Comprehensive Health Sciences Education</p>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="section-padding">
          <div className="container-wide">
            <Tabs defaultValue="faculties" className="w-full">
              <TabsList className="mb-12 w-full grid grid-cols-3 h-auto">
                <TabsTrigger value="faculties" className="py-3">Faculties</TabsTrigger>
                <TabsTrigger value="programs" className="py-3">Programs</TabsTrigger>
                <TabsTrigger value="calendar" className="py-3">Academic Calendar</TabsTrigger>
              </TabsList>

              <TabsContent value="faculties">
                <div className="space-y-16">
                  {faculties.map((faculty) => (
                    <div key={faculty.id} id={faculty.id}>
                      <Card className="overflow-hidden">
                        <div className="grid md:grid-cols-2 gap-0">
                          <img src={faculty.image} alt={faculty.name} className="w-full h-full object-cover min-h-[400px]" />
                          <div className="p-8 md:p-12">
                            <h2 className="text-3xl font-bold mb-4 text-primary">{faculty.name}</h2>
                            <p className="text-muted-foreground mb-8">{faculty.description}</p>

                            <h3 className="text-xl font-semibold mb-4 text-secondary">Programs Offered</h3>
                            <div className="space-y-4">
                              {faculty.programs.map((program, index) => (
                                <Card key={index} className="p-4 bg-accent/20">
                                  <h4 className="font-bold text-lg mb-2">{program.name}</h4>
                                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                      <Calendar className="h-4 w-4 text-secondary" />
                                      <span>{program.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <GraduationCap className="h-4 w-4 text-secondary" />
                                      <span>{program.eligibility}</span>
                                    </div>
                                  </div>
                                </Card>
                              ))}
                            </div>

                            <Button asChild className="w-full mt-6 bg-primary hover:bg-primary-dark">
                              <Link to="/apply">Apply Now</Link>
                            </Button>
                          </div>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="programs">
                <div className="space-y-12">
                  {/* Undergraduate */}
                  <div id="undergraduate">
                    <div className="flex items-center gap-3 mb-8">
                      <GraduationCap className="h-10 w-10 text-primary" />
                      <h2 className="text-3xl font-bold text-primary">Undergraduate Programs</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        { name: "B.Sc Nursing", duration: "4 Years + 6 Months Internship", eligibility: "10+2 with PCB", icon: Stethoscope },
                        { name: "Bachelor of Physiotherapy (BPT)", duration: "4 Years + 6 Months Internship", eligibility: "10+2 with PCB", icon: Activity },
                        { name: "B.Sc Medical Laboratory Technology", duration: "3 Years + 1 Year Internship", eligibility: "10+2 with PCB", icon: FlaskConical },
                        { name: "B.Sc Emergency Medicine & Trauma Care", duration: "3 Years + 1 Year Internship", eligibility: "10+2 with PCB", icon: HeartPulse },
                        { name: "B.Sc Operation Theater & Anesthesia Technology", duration: "3 Years + 1 Year Internship", eligibility: "10+2 with PCB", icon: Stethoscope },
                        { name: "B.Sc Renal Dialysis Technology", duration: "3 Years + 1 Year Internship", eligibility: "10+2 with PCB", icon: HeartPulse },
                      ].map((program, index) => (
                        <Card key={index} className="p-6 card-hover">
                          <program.icon className="h-12 w-12 text-primary mb-4" />
                          <h3 className="text-xl font-bold mb-3">{program.name}</h3>
                          <div className="space-y-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-secondary" />
                              <span>Duration: {program.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <GraduationCap className="h-4 w-4 text-secondary" />
                              <span>Eligibility: {program.eligibility}</span>
                            </div>
                          </div>
                          <Button asChild variant="outline" className="w-full mt-4">
                            <Link to="/apply">Apply Now</Link>
                          </Button>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Diploma */}
                  <div id="diploma">
                    <div className="flex items-center gap-3 mb-8">
                      <BookOpen className="h-10 w-10 text-primary" />
                      <h2 className="text-3xl font-bold text-primary">Diploma Programs</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[
                        { name: "General Nursing & Midwifery (GNM)", duration: "3 Years + 6 Months", eligibility: "10+2 any stream" },
                        { name: "Diploma in Medical Laboratory Technology", duration: "2 Years", eligibility: "10+2 with Science" },
                        { name: "Diploma in Operation Theatre Technology", duration: "2 Years", eligibility: "10+2 with Science" },
                        { name: "Diploma in Emergency Medical Technology", duration: "2 Years", eligibility: "10+2 with Science" },
                        { name: "Diploma in Dialysis Technology", duration: "2 Years", eligibility: "10+2 with Science" },
                        { name: "Auxiliary Nurse Midwifery (ANM)", duration: "2 Years", eligibility: "10th Pass" },
                      ].map((program, index) => (
                        <Card key={index} className="p-6 card-hover">
                          <h3 className="text-lg font-bold mb-3">{program.name}</h3>
                          <div className="space-y-2 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-secondary" />
                              <span>{program.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <GraduationCap className="h-4 w-4 text-secondary" />
                              <span>{program.eligibility}</span>
                            </div>
                          </div>
                          <Button asChild variant="outline" size="sm" className="w-full">
                            <Link to="/apply">Apply</Link>
                          </Button>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Certificate */}
                  <div id="certificate">
                    <div className="flex items-center gap-3 mb-8">
                      <BookOpen className="h-10 w-10 text-primary" />
                      <h2 className="text-3xl font-bold text-primary">Certificate Courses</h2>
                    </div>

                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {[
                        "Certificate in Nursing Assistant (CNA)",
                        "Certificate in ECG Technology",
                        "Certificate in Clinical Laboratory",
                        "Certificate in Patient Care",
                        "Certificate in Medical Coding",
                        "Certificate in First Aid",
                        "Certificate in Geriatric Care",
                        "Certificate in Infection Control",
                      ].map((program, index) => (
                        <Card key={index} className="p-4 text-center card-hover">
                          <p className="font-semibold text-sm mb-3">{program}</p>
                          <p className="text-xs text-muted-foreground mb-3">Duration: 6 Months</p>
                          <Button asChild variant="outline" size="sm" className="w-full">
                            <Link to="/apply">Enquire</Link>
                          </Button>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="calendar">
                <div id="calendar" className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold mb-8 text-center text-primary">Academic Calendar 2025-26</h2>

                  <div className="space-y-6">
                    <Card className="p-6">
                      <h3 className="text-xl font-bold mb-4 text-secondary">Semester 1 (July 2025 - November 2025)</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center pb-3 border-b">
                          <span className="font-semibold">Commencement of Classes</span>
                          <span className="text-muted-foreground">July 15, 2025</span>
                        </div>
                        <div className="flex justify-between items-center pb-3 border-b">
                          <span className="font-semibold">Mid-term Examinations</span>
                          <span className="text-muted-foreground">September 1-7, 2025</span>
                        </div>
                        <div className="flex justify-between items-center pb-3 border-b">
                          <span className="font-semibold">End Semester Examinations</span>
                          <span className="text-muted-foreground">November 10-25, 2025</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">Semester Break</span>
                          <span className="text-muted-foreground">November 26 - December 15, 2025</span>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6">
                      <h3 className="text-xl font-bold mb-4 text-secondary">Semester 2 (December 2025 - May 2026)</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center pb-3 border-b">
                          <span className="font-semibold">Commencement of Classes</span>
                          <span className="text-muted-foreground">December 16, 2025</span>
                        </div>
                        <div className="flex justify-between items-center pb-3 border-b">
                          <span className="font-semibold">Mid-term Examinations</span>
                          <span className="text-muted-foreground">February 15-21, 2026</span>
                        </div>
                        <div className="flex justify-between items-center pb-3 border-b">
                          <span className="font-semibold">End Semester Examinations</span>
                          <span className="text-muted-foreground">May 1-15, 2026</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">Summer Break</span>
                          <span className="text-muted-foreground">May 16 - July 14, 2026</span>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6">
                      <h3 className="text-xl font-bold mb-4 text-secondary">Important Events & Holidays</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center pb-3 border-b">
                          <span className="font-semibold">Independence Day</span>
                          <span className="text-muted-foreground">August 15, 2025</span>
                        </div>
                        <div className="flex justify-between items-center pb-3 border-b">
                          <span className="font-semibold">Gandhi Jayanti</span>
                          <span className="text-muted-foreground">October 2, 2025</span>
                        </div>
                        <div className="flex justify-between items-center pb-3 border-b">
                          <span className="font-semibold">Diwali Break</span>
                          <span className="text-muted-foreground">October 25-30, 2025</span>
                        </div>
                        <div className="flex justify-between items-center pb-3 border-b">
                          <span className="font-semibold">Republic Day</span>
                          <span className="text-muted-foreground">January 26, 2026</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">Annual Convocation</span>
                          <span className="text-muted-foreground">March 15, 2026</span>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Academics;
