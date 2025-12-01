import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import chairmanImg from "@/assets/chairman.jpg";
import principalImg from "@/assets/principal.jpg";
import campusImg from "@/assets/hero-campus-1.jpg";

const About = () => {
  return (
    <>
      <Header />
      
      <main>
        {/* Page Hero */}
        <section className="relative h-[300px] bg-gradient-to-r from-primary to-primary-dark text-primary-foreground">
          <div className="container-wide h-full flex items-center">
            <div>
              <h1 className="text-5xl font-bold mb-4">About Us</h1>
              <p className="text-xl opacity-90">Excellence in Health Sciences Education</p>
            </div>
          </div>
        </section>

        {/* Tabbed Content */}
        <section className="section-padding">
          <div className="container-wide">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-12 w-full grid grid-cols-2 md:grid-cols-5 h-auto">
                <TabsTrigger value="overview" className="py-3">Overview</TabsTrigger>
                <TabsTrigger value="vision" className="py-3">Vision & Mission</TabsTrigger>
                <TabsTrigger value="governance" className="py-3">Governance</TabsTrigger>
                <TabsTrigger value="leadership" className="py-3">Leadership</TabsTrigger>
                <TabsTrigger value="approvals" className="py-3">Approvals</TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-3xl font-bold mb-6 text-primary">Institutional Profile</h2>
                    <p className="text-muted-foreground mb-4">
                      Janapriya Group of Institutions stands as a beacon of excellence in health sciences education in Karnataka. Established with a commitment to provide world-class healthcare education, we have grown to become one of the most trusted names in medical and allied health sciences training.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Our institution is affiliated to the prestigious Rajiv Gandhi University of Health Sciences (RGUHS) and recognized by the Government of Karnataka. We are also approved by the Indian Nursing Council (INC) and Karnataka Nursing Council (KNC), ensuring that our programs meet the highest standards of quality and relevance.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      With state-of-the-art infrastructure spread across modern campuses, we provide an ideal learning environment for aspiring healthcare professionals. Our facilities include advanced laboratories, well-stocked libraries, modern classrooms, simulation centers, and clinical training facilities in collaboration with leading hospitals.
                    </p>
                    <p className="text-muted-foreground">
                      We take pride in our experienced faculty members who are experts in their respective fields, dedicated to nurturing the next generation of healthcare professionals through innovative teaching methodologies and hands-on training.
                    </p>
                  </div>
                  <div>
                    <img src={campusImg} alt="Campus" className="rounded-lg shadow-lg w-full h-96 object-cover mb-6" />
                    <Card className="p-6 bg-accent/30">
                      <h3 className="text-xl font-bold mb-4 text-primary">Key Highlights</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <span className="text-secondary font-bold">•</span>
                          <span>RGUHS Affiliated Institution</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-secondary font-bold">•</span>
                          <span>INC & KNC Approved Programs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-secondary font-bold">•</span>
                          <span>5000+ Students Currently Enrolled</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-secondary font-bold">•</span>
                          <span>2000+ Successful Alumni</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-secondary font-bold">•</span>
                          <span>100% Placement Assistance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-secondary font-bold">•</span>
                          <span>Partnerships with Leading Hospitals</span>
                        </li>
                      </ul>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="vision">
                <div className="max-w-4xl mx-auto">
                  <Card className="p-8 mb-8 bg-gradient-to-r from-primary/5 to-secondary/5">
                    <h2 className="text-3xl font-bold mb-4 text-primary">Our Vision</h2>
                    <p className="text-lg text-muted-foreground">
                      To be a globally recognized institution of excellence in health sciences education, creating competent, compassionate, and ethical healthcare professionals who contribute significantly to improving healthcare delivery and community well-being.
                    </p>
                  </Card>

                  <Card className="p-8 mb-8 bg-gradient-to-r from-secondary/5 to-accent/10">
                    <h2 className="text-3xl font-bold mb-4 text-primary">Our Mission</h2>
                    <ul className="space-y-4 text-lg text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <span className="text-secondary font-bold text-2xl">1.</span>
                        <span>Provide quality health sciences education that meets international standards while being accessible to students from diverse backgrounds.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-secondary font-bold text-2xl">2.</span>
                        <span>Foster a culture of research, innovation, and evidence-based practice in healthcare education.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-secondary font-bold text-2xl">3.</span>
                        <span>Develop competent healthcare professionals through rigorous academic programs, practical training, and ethical values.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-secondary font-bold text-2xl">4.</span>
                        <span>Create partnerships with healthcare institutions to provide excellent clinical exposure and placement opportunities.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-secondary font-bold text-2xl">5.</span>
                        <span>Contribute to community health through outreach programs and extension activities.</span>
                      </li>
                    </ul>
                  </Card>

                  <Card className="p-8 bg-institutional/5">
                    <h2 className="text-3xl font-bold mb-4 text-primary">Core Values</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-secondary">Excellence</h3>
                        <p className="text-muted-foreground">Striving for the highest standards in education, research, and healthcare delivery.</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-secondary">Compassion</h3>
                        <p className="text-muted-foreground">Developing empathetic healthcare professionals who prioritize patient well-being.</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-secondary">Integrity</h3>
                        <p className="text-muted-foreground">Upholding ethical standards and professional conduct in all our endeavors.</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-secondary">Innovation</h3>
                        <p className="text-muted-foreground">Embracing new technologies and methodologies to enhance learning experiences.</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="governance">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold mb-8 text-center text-primary">Governance Structure</h2>
                  <p className="text-center text-muted-foreground mb-12 text-lg">
                    Our institution is governed by a dedicated board committed to maintaining the highest standards of academic excellence and institutional integrity.
                  </p>

                  <div className="space-y-6">
                    <Card className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-primary">Board of Governors</h3>
                      <p className="text-muted-foreground mb-4">
                        The Board of Governors provides strategic direction and oversight to ensure the institution maintains its commitment to excellence in health sciences education. The board comprises eminent academicians, healthcare professionals, and industry experts.
                      </p>
                    </Card>

                    <Card className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-primary">Academic Council</h3>
                      <p className="text-muted-foreground mb-4">
                        The Academic Council is responsible for academic policies, curriculum development, and maintaining academic standards across all programs. It ensures alignment with RGUHS guidelines and industry requirements.
                      </p>
                    </Card>

                    <Card className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-primary">Management Committee</h3>
                      <p className="text-muted-foreground mb-4">
                        The Management Committee oversees day-to-day operations, resource allocation, and administrative functions to ensure smooth functioning of the institution.
                      </p>
                    </Card>

                    <Card className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-primary">Quality Assurance Cell</h3>
                      <p className="text-muted-foreground mb-4">
                        Dedicated to maintaining and improving the quality of education through continuous evaluation, feedback mechanisms, and implementation of best practices.
                      </p>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="leadership">
                <div className="max-w-5xl mx-auto">
                  <h2 className="text-3xl font-bold mb-12 text-center text-primary">Message from Our Leaders</h2>

                  <div className="space-y-12">
                    <Card className="p-8 md:p-12">
                      <div className="grid md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center">
                          <img src={chairmanImg} alt="Chairman" className="w-48 h-48 rounded-full object-cover mb-4" />
                          <h3 className="text-2xl font-bold text-primary">Dr. Rajesh Kumar</h3>
                          <p className="text-muted-foreground">Chairman</p>
                        </div>
                        <div className="md:col-span-2">
                          <h4 className="text-2xl font-bold mb-4 text-primary">Chairman's Message</h4>
                          <p className="text-muted-foreground mb-4">
                            Dear Students, Faculty, and Stakeholders,
                          </p>
                          <p className="text-muted-foreground mb-4">
                            It gives me immense pleasure to welcome you to Janapriya Group of Institutions. Our journey began with a simple yet powerful vision – to provide accessible, quality healthcare education that transforms lives and communities.
                          </p>
                          <p className="text-muted-foreground mb-4">
                            Over the years, we have remained steadfast in our commitment to excellence. Our state-of-the-art infrastructure, experienced faculty, and industry partnerships create an environment where students not only learn but thrive. We believe that healthcare professionals must be equipped with both technical competence and human compassion.
                          </p>
                          <p className="text-muted-foreground">
                            As we move forward, we remain committed to innovation in education, research excellence, and community service. I invite you to be part of our growing family and embark on a rewarding journey in healthcare.
                          </p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-8 md:p-12">
                      <div className="grid md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center">
                          <img src={principalImg} alt="Principal" className="w-48 h-48 rounded-full object-cover mb-4" />
                          <h3 className="text-2xl font-bold text-primary">Dr. Priya Sharma</h3>
                          <p className="text-muted-foreground">Principal</p>
                        </div>
                        <div className="md:col-span-2">
                          <h4 className="text-2xl font-bold mb-4 text-primary">Principal's Message</h4>
                          <p className="text-muted-foreground mb-4">
                            Dear Aspiring Healthcare Professionals,
                          </p>
                          <p className="text-muted-foreground mb-4">
                            At Janapriya, we believe in holistic development. Our educational philosophy goes beyond textbooks and examinations – we focus on developing critical thinking, practical skills, ethical values, and professional excellence.
                          </p>
                          <p className="text-muted-foreground mb-4">
                            Our comprehensive curriculum, combined with extensive clinical exposure in leading hospitals, ensures that our graduates are industry-ready from day one. We emphasize evidence-based practice, patient-centered care, and lifelong learning.
                          </p>
                          <p className="text-muted-foreground">
                            I encourage all students to make the most of the opportunities available here – engage actively in learning, participate in research, join student clubs, and develop leadership skills. Your journey at Janapriya will shape not just your career, but your entire life ahead.
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="approvals">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold mb-8 text-center text-primary">Accreditations & Approvals</h2>
                  <p className="text-center text-muted-foreground mb-12 text-lg">
                    Our programs are recognized and approved by leading regulatory bodies, ensuring the highest standards of quality and credibility.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-8">
                      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-3xl font-bold text-primary">RGUHS</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-center text-primary">
                        Rajiv Gandhi University of Health Sciences
                      </h3>
                      <p className="text-muted-foreground text-center mb-4">
                        All our programs are affiliated to RGUHS, Karnataka's premier health sciences university, ensuring curriculum alignment with national standards and degree recognition across India.
                      </p>
                    </Card>

                    <Card className="p-8">
                      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-3xl font-bold text-primary">KNC</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-center text-primary">
                        Karnataka Nursing Council
                      </h3>
                      <p className="text-muted-foreground text-center mb-4">
                        Our nursing programs are approved by KNC, the state regulatory body that maintains standards of nursing education and practice in Karnataka.
                      </p>
                    </Card>

                    <Card className="p-8">
                      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-3xl font-bold text-primary">INC</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-center text-primary">
                        Indian Nursing Council
                      </h3>
                      <p className="text-muted-foreground text-center mb-4">
                        Recognition by INC ensures our nursing graduates can practice anywhere in India and meet international standards for nursing education.
                      </p>
                    </Card>

                    <Card className="p-8">
                      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-3xl font-bold text-primary">Govt.</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-center text-primary">
                        Government of Karnataka
                      </h3>
                      <p className="text-muted-foreground text-center mb-4">
                        Recognized by the Government of Karnataka, providing additional credibility and ensuring compliance with state education policies.
                      </p>
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

export default About;
