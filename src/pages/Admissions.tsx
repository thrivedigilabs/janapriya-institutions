import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, FileText, CreditCard, ClipboardCheck, Mail, Download, IndianRupee } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Admissions = () => {
  const admissionSteps = [
    { number: 1, title: "Register Yourself", icon: ClipboardCheck, description: "Fill the online application form with accurate details" },
    { number: 2, title: "Verify Email", icon: Mail, description: "Confirm your email address for further communication" },
    { number: 3, title: "Fill Application", icon: FileText, description: "Complete the detailed application form online" },
    { number: 4, title: "Pay Application Fee", icon: CreditCard, description: "Submit non-refundable application fee online" },
    { number: 5, title: "Submit Application", icon: CheckCircle2, description: "Review and submit your completed application" },
  ];

  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="relative h-[400px] bg-gradient-to-r from-institutional to-primary text-primary-foreground">
          <div className="container-wide h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold mb-4">Admissions Open</h1>
              <p className="text-2xl mb-2">Batch 2025-26</p>
              <p className="text-lg opacity-90 mb-6">Join India's Premier Health Sciences Institution</p>
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary-light">
                <Link to="/apply">Apply Now</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Steps to Follow */}
        <section className="section-padding bg-accent/20">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-primary">Steps to Follow</h2>
              <p className="text-lg text-muted-foreground">Complete your application in 5 simple steps</p>
            </div>

            <div className="grid md:grid-cols-5 gap-6">
              {admissionSteps.map((step) => (
                <Card key={step.number} className="p-6 text-center card-hover">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {step.number}
                  </div>
                  <step.icon className="h-10 w-10 text-secondary mx-auto mb-3" />
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Admission Guidelines */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary">Admission Guidelines</h2>
                <Card className="p-6 mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-secondary">Important Information</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Online application is for admission to programs offered at Janapriya Group of Institutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Application fee is non-refundable</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Email ID submitted during registration will be used for all correspondences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Changes in email ID will not be permitted under any circumstances</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-secondary">Eligibility Criteria</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold mb-2">Undergraduate Programs</h4>
                      <p className="text-sm text-muted-foreground">Passed 10+2 with Science (PCB) with minimum 50% marks from recognized board</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Diploma Programs</h4>
                      <p className="text-sm text-muted-foreground">Passed 10+2 with any stream or equivalent from recognized board</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Age Limit</h4>
                      <p className="text-sm text-muted-foreground">Minimum 17 years as on December 31 of admission year</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary">Fee Structure & Payment</h2>
                <Card className="p-6 mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-secondary">Application Fee</h3>
                  <div className="bg-accent/30 p-4 rounded-lg mb-4">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-lg">Application Fee</span>
                      <span className="text-2xl font-bold text-primary flex items-center">
                        <IndianRupee className="h-6 w-6" />
                        500
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">Non-refundable application processing fee</p>
                  </div>
                </Card>

                <Card className="p-6 mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-secondary">Program Fees (Annual)</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-3 border-b">
                      <span>B.Sc Nursing</span>
                      <span className="font-bold">₹ 1,00,000</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b">
                      <span>BPT</span>
                      <span className="font-bold">₹ 1,20,000</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b">
                      <span>B.Sc Paramedical Sciences</span>
                      <span className="font-bold">₹ 80,000</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b">
                      <span>Diploma Programs</span>
                      <span className="font-bold">₹ 60,000</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">* Fees subject to change. Final fees will be communicated at time of admission</p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-secondary">Payment Modes</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Online payment via Credit/Debit Card</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Net Banking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>UPI Payment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Demand Draft in favor of "Janapriya Group of Institutions"</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Scholarships & Education Loan */}
        <section className="section-padding bg-accent/20">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-primary">Scholarships</h2>
                <p className="text-muted-foreground mb-6">
                  Janapriya Group of Institutions offers merit-based scholarships to deserving students to support their educational journey.
                </p>
                <div className="space-y-4">
                  <div className="bg-accent/30 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Merit Scholarship</h3>
                    <p className="text-sm text-muted-foreground">Up to 50% tuition fee waiver for students scoring above 90% in 10+2</p>
                  </div>
                  <div className="bg-accent/30 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Sports Quota</h3>
                    <p className="text-sm text-muted-foreground">Special scholarships for state/national level sports persons</p>
                  </div>
                  <div className="bg-accent/30 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Financial Assistance</h3>
                    <p className="text-sm text-muted-foreground">Need-based financial support for economically disadvantaged students</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-primary">Education Loan Facilities</h2>
                <p className="text-muted-foreground mb-6">
                  We have tie-ups with leading banks to facilitate easy education loans for students.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold">Partner Banks</h4>
                      <p className="text-sm text-muted-foreground">Tie-ups with SBI, HDFC, ICICI, and more</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold">Easy Processing</h4>
                      <p className="text-sm text-muted-foreground">Assistance with loan application and documentation</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold">Competitive Interest Rates</h4>
                      <p className="text-sm text-muted-foreground">Attractive interest rates and flexible repayment options</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Documents Required */}
        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-3xl font-bold mb-8 text-center text-primary">Documents Required</h2>
            <Card className="p-8 max-w-3xl mx-auto">
              <ul className="space-y-3">
                {[
                  "10th Mark sheet and Certificate",
                  "12th Mark sheet and Certificate",
                  "Transfer Certificate",
                  "Migration Certificate (if applicable)",
                  "Aadhar Card",
                  "Recent Passport size photographs (6 copies)",
                  "Caste Certificate (if applicable)",
                  "Income Certificate (for scholarship)",
                  "Medical Fitness Certificate",
                ].map((doc, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-r from-primary to-primary-dark text-primary-foreground">
          <div className="container-wide text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Healthcare Career?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Apply now for Academic Year 2025-26 and take the first step towards a successful career in healthcare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary-light">
                <Link to="/apply">Apply Online</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <a href="#" className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Download Prospectus
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Admissions;
