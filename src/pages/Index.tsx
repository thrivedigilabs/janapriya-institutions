import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Award, Users, BookOpen, GraduationCap, Building2, FlaskConical, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WelcomePopup from "@/components/WelcomePopup";
import heroCampus from "@/assets/hero-campus-1.jpg";
import heroStudents from "@/assets/hero-students-1.jpg";
import heroLab from "@/assets/hero-lab-1.jpg";
import chairmanImg from "@/assets/chairman.jpg";
import principalImg from "@/assets/principal.jpg";
import nursingFaculty from "@/assets/nursing-faculty.jpg";
import libraryImg from "@/assets/library.jpg";
import statsCourses from "@/assets/stats-courses.jpg";
import statsFaculties from "@/assets/stats-faculties.jpg";
import statsLectures from "@/assets/stats-lectures.jpg";
import statsResearch from "@/assets/stats-research.jpg";
import statsBooks from "@/assets/stats-books.jpg";
import statsAlumni from "@/assets/stats-alumni.jpg";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentFacultySlide, setCurrentFacultySlide] = useState(0);

  const slides = [
    {
      image: heroCampus,
      title: "Welcome to Janapriya Group of Institutions",
      subtitle: "Excellence in Health Sciences Education Since 2010",
      cta: "Explore Programs",
      link: "/academics",
    },
    {
      image: heroStudents,
      title: "Admissions Open 2025-26",
      subtitle: "Join India's Premier Health Sciences Institution",
      cta: "Apply Now",
      link: "/apply",
    },
    {
      image: heroLab,
      title: "World-Class Infrastructure",
      subtitle: "State-of-the-Art Labs & Clinical Training Facilities",
      cta: "Virtual Tour",
      link: "/resources",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFacultySlide((prev) => (prev + 1) % faculties.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { icon: Users, value: "5000+", label: "Students Enrolled" },
    { icon: GraduationCap, value: "2000+", label: "Alumni Network" },
    { icon: Award, value: "100%", label: "Placement Rate" },
    { icon: BookOpen, value: "15+", label: "Programs Offered" },
  ];

  const faculties = [
    {
      name: "Faculty of Nursing",
      description: "Comprehensive nursing education with modern simulation labs and clinical training in leading hospitals.",
      image: nursingFaculty,
      programs: ["B.Sc Nursing", "GNM", "ANM"],
      link: "/academics#nursing",
    },
    {
      name: "Faculty of Paramedical Sciences",
      description: "Training skilled paramedical professionals with hands-on experience in medical laboratory technology.",
      image: heroLab,
      programs: ["B.Sc MLT", "B.Sc RDT", "B.Sc MIT"],
      link: "/academics#paramedical",
    },
    {
      name: "Faculty of Allied Health Sciences",
      description: "Advanced allied health programs focusing on emergency care and specialized medical technologies.",
      image: heroStudents,
      programs: ["B.Sc EMT", "B.Sc AT & OT", "BOT"],
      link: "/academics#allied",
    },
    {
      name: "Faculty of Physiotherapy",
      description: "Comprehensive physiotherapy education with modern rehabilitation facilities and clinical exposure.",
      image: heroCampus,
      programs: ["BPT", "MPT"],
      link: "/academics#physiotherapy",
    },
  ];

  const approvals = [
    { name: "RGUHS", fullName: "Rajiv Gandhi University of Health Sciences" },
    { name: "KNC", fullName: "Karnataka Nursing Council" },
    { name: "INC", fullName: "Indian Nursing Council" },
    { name: "Govt. of Karnataka", fullName: "Government of Karnataka Recognition" },
  ];

  return (
    <>
      <Header />
      <WelcomePopup />
      
      <main>
        {/* Hero Slider */}
        <section className="relative h-[600px] overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/70" />
              <div className="absolute inset-0 flex items-center">
                <div className="container-wide">
                  <div className="max-w-2xl">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
                      {slide.title}
                    </h1>
                    <p className="text-xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                      {slide.subtitle}
                    </p>
                    <Button
                      asChild
                      size="lg"
                      className="bg-secondary text-secondary-foreground hover:bg-secondary-light animate-fade-in"
                      style={{ animationDelay: "0.4s" }}
                    >
                      <Link to={slide.link}>
                        {slide.cta} <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Slider Controls */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? "bg-white w-8" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </section>

        {/* Video Section */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-primary">Experience Janapriya</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Take a virtual tour of our campus and discover what makes Janapriya the premier choice for health sciences education.
              </p>
            </div>
            
            <div className="relative aspect-video max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroCampus} 
                alt="Campus Tour" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group hover:bg-black/50 transition-colors cursor-pointer">
                <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Play className="h-10 w-10 text-secondary-foreground ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Approvals Section - Auto Scrolling */}
        <section className="bg-accent/30 py-8 overflow-hidden">
          <div className="relative">
            <div className="flex animate-scroll">
              {/* First set */}
              {approvals.map((approval, idx) => (
                <div key={`first-${idx}`} className="flex-shrink-0 px-8 text-center min-w-[250px]">
                  <div className="font-bold text-2xl text-primary mb-1">{approval.name}</div>
                  <div className="text-sm text-muted-foreground">{approval.fullName}</div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {approvals.map((approval, idx) => (
                <div key={`second-${idx}`} className="flex-shrink-0 px-8 text-center min-w-[250px]">
                  <div className="font-bold text-2xl text-primary mb-1">{approval.name}</div>
                  <div className="text-sm text-muted-foreground">{approval.fullName}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Grid with Images */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Courses */}
              <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer">
                <img src={statsCourses} alt="Courses Offered" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/60 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="text-5xl font-bold mb-2">180 +</div>
                  <div className="text-xl font-medium">Courses Offered</div>
                </div>
              </div>

              {/* Faculties */}
              <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer">
                <img src={statsFaculties} alt="Faculties" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/60 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="text-5xl font-bold mb-2">650 +</div>
                  <div className="text-xl font-medium">Faculties</div>
                </div>
              </div>

              {/* e-Lectures */}
              <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer">
                <img src={statsLectures} alt="e-Lectures" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/60 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="text-5xl font-bold mb-2">9000 +</div>
                  <div className="text-xl font-medium">e-Lectures</div>
                </div>
              </div>

              {/* Books Access */}
              <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer sm:col-span-2 lg:col-span-1">
                <img src={statsBooks} alt="Books Access" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/60 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="text-5xl font-bold mb-2">35000 +</div>
                  <div className="text-xl font-medium">Books - Access all Libraries</div>
                </div>
              </div>

              {/* Research Publications */}
              <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer">
                <img src={statsResearch} alt="Research Publications" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/60 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="text-5xl font-bold mb-2">1700 +</div>
                  <div className="text-xl font-medium">Research Publications</div>
                </div>
              </div>

              {/* Alumni Network */}
              <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer">
                <img src={statsAlumni} alt="Alumni Network" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/60 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="text-5xl font-bold mb-2">50000 +</div>
                  <div className="text-xl font-medium">Alumni Network</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Schools Carousel */}
        <section className="section-padding bg-gradient-to-br from-primary/10 to-primary-dark/10">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-primary">OUR SCHOOLS</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our specialized faculties offering comprehensive health sciences education.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="relative h-[500px] overflow-hidden rounded-2xl">
                {faculties.map((faculty, index) => (
                  <div
                    key={faculty.name}
                    className={`absolute inset-0 transition-all duration-700 ${
                      index === currentFacultySlide 
                        ? "opacity-100 translate-x-0 scale-100" 
                        : index < currentFacultySlide
                        ? "opacity-0 -translate-x-full scale-95"
                        : "opacity-0 translate-x-full scale-95"
                    }`}
                  >
                    <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
                      <img 
                        src={faculty.image} 
                        alt={faculty.name} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <h3 className="text-3xl font-bold mb-3">{faculty.name}</h3>
                        <p className="text-lg mb-4 opacity-90">{faculty.description}</p>
                        <Button asChild variant="secondary" size="lg">
                          <Link to={faculty.link}>
                            Explore Programs <ArrowRight className="ml-2 h-5 w-5" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel Controls */}
              <button
                onClick={() => setCurrentFacultySlide((prev) => (prev - 1 + faculties.length) % faculties.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-secondary hover:bg-secondary-light rounded-full shadow-lg transition-colors z-10"
              >
                <ChevronLeft className="h-6 w-6 text-secondary-foreground" />
              </button>
              <button
                onClick={() => setCurrentFacultySlide((prev) => (prev + 1) % faculties.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-secondary hover:bg-secondary-light rounded-full shadow-lg transition-colors z-10"
              >
                <ChevronRight className="h-6 w-6 text-secondary-foreground" />
              </button>

              {/* Carousel Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {faculties.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFacultySlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentFacultySlide ? "bg-primary w-8" : "bg-primary/30 w-2"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-primary">About Janapriya Group of Institutions</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Established with a vision to provide world-class healthcare education, Janapriya Group of Institutions has emerged as a leading institution in Karnataka for health sciences education.
                </p>
                <p className="text-muted-foreground mb-6">
                  Affiliated to Rajiv Gandhi University of Health Sciences (RGUHS) and recognized by the Government of Karnataka, we offer comprehensive programs in Nursing, Paramedical Sciences, Allied Health Sciences, and Physiotherapy. Our state-of-the-art infrastructure, experienced faculty, and industry partnerships ensure that our students receive the best education and practical training.
                </p>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">Learn More About Us <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img src={libraryImg} alt="Library" className="rounded-lg shadow-lg w-full h-64 object-cover" />
                <img src={nursingFaculty} alt="Campus" className="rounded-lg shadow-lg w-full h-64 object-cover mt-8" />
              </div>
            </div>
          </div>
        </section>

        {/* Faculties Section */}
        <section className="section-padding bg-accent/20">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-primary">Our Faculties</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Four specialized faculties offering comprehensive health sciences education with modern facilities and expert guidance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {faculties.map((faculty) => (
                <Card key={faculty.name} className="overflow-hidden card-hover">
                  <img src={faculty.image} alt={faculty.name} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-primary">{faculty.name}</h3>
                    <p className="text-muted-foreground mb-4">{faculty.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {faculty.programs.map((program) => (
                        <span key={program} className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full">
                          {program}
                        </span>
                      ))}
                    </div>
                    <Button asChild variant="link" className="p-0 text-primary">
                      <Link to={faculty.link}>
                        Explore Programs <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Messages */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-primary">Message from Leadership</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <img src={chairmanImg} alt="Chairman" className="w-32 h-32 rounded-full mx-auto mb-6 object-cover" />
                <h3 className="text-2xl font-bold text-center mb-2 text-primary">Chairman's Message</h3>
                <p className="text-center text-sm text-muted-foreground mb-4">Dr. Rajesh Kumar, Chairman</p>
                <p className="text-muted-foreground text-center">
                  "At Janapriya, we are committed to nurturing the next generation of healthcare professionals with excellence, compassion, and integrity. Our vision is to provide accessible, quality education that transforms lives and communities."
                </p>
              </Card>

              <Card className="p-8">
                <img src={principalImg} alt="Principal" className="w-32 h-32 rounded-full mx-auto mb-6 object-cover" />
                <h3 className="text-2xl font-bold text-center mb-2 text-primary">Principal's Message</h3>
                <p className="text-center text-sm text-muted-foreground mb-4">Dr. Priya Sharma, Principal</p>
                <p className="text-muted-foreground text-center">
                  "We believe in holistic development of our students, combining rigorous academic training with practical exposure and ethical values. Our goal is to create healthcare professionals who are skilled, compassionate, and ready to serve society."
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Programs Preview */}
        <section className="section-padding bg-gradient-to-r from-secondary/20 to-accent/30">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-primary">Programs Offered</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose from our diverse range of undergraduate and diploma programs in health sciences.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 card-hover">
                <Building2 className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-primary">Undergraduate Programs</h3>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• B.Sc Nursing (4 Years + 6 Months Internship)</li>
                  <li>• Bachelor of Physiotherapy (BPT)</li>
                  <li>• B.Sc Medical Laboratory Technology</li>
                  <li>• B.Sc Emergency Medicine & Trauma Care</li>
                  <li>• B.Sc Allied Health Sciences</li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/academics#undergraduate">View All</Link>
                </Button>
              </Card>

              <Card className="p-6 card-hover">
                <FlaskConical className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-primary">Diploma Programs</h3>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• Diploma in Medical Laboratory Technology</li>
                  <li>• Diploma in Operation Theatre Technology</li>
                  <li>• Diploma in Emergency Medical Technology</li>
                  <li>• Diploma in Dialysis Technology</li>
                  <li>• General Nursing & Midwifery (GNM)</li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/academics#diploma">View All</Link>
                </Button>
              </Card>

              <Card className="p-6 card-hover">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-primary">Certificate Courses</h3>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• Certificate in Nursing Assistant (CNA)</li>
                  <li>• Certificate in ECG Technology</li>
                  <li>• Certificate in Clinical Laboratory</li>
                  <li>• Certificate in Patient Care</li>
                  <li>• Certificate in Medical Coding</li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/academics#certificate">View All</Link>
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-wide text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of successful healthcare professionals who started their careers at Janapriya Group of Institutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary-light">
                <Link to="/apply">Apply Now for 2025-26</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/contact">Contact Admissions</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Latest News/Notices */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-primary">Latest Updates</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  date: "January 15, 2025",
                  title: "Admissions Open for Academic Year 2025-26",
                  description: "Applications are now open for all undergraduate and diploma programs. Apply before March 31, 2025.",
                },
                {
                  date: "January 10, 2025",
                  title: "Annual Convocation 2024 Held Successfully",
                  description: "Over 500 students received their degrees in a grand ceremony attended by distinguished guests.",
                },
                {
                  date: "January 5, 2025",
                  title: "New Clinical Partnership Announced",
                  description: "Janapriya ties up with leading hospitals in Mangaluru for enhanced clinical training facilities.",
                },
              ].map((notice, index) => (
                <Card key={index} className="p-6 card-hover">
                  <div className="text-sm text-secondary font-semibold mb-2">{notice.date}</div>
                  <h3 className="text-xl font-bold mb-3 text-primary">{notice.title}</h3>
                  <p className="text-muted-foreground text-sm">{notice.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Index;
