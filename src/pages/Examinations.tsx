import { Card } from "@/components/ui/card";
import { FileText, Calendar, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Examinations = () => {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="relative h-[300px] bg-gradient-to-r from-primary to-primary-dark text-primary-foreground">
          <div className="container-wide h-full flex items-center">
            <div>
              <h1 className="text-5xl font-bold mb-4">Examinations</h1>
              <p className="text-xl opacity-90">Assessment & Evaluation System</p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-6 text-center">
                <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Examination Notices</h3>
                <p className="text-muted-foreground">Stay updated with the latest examination schedules and notifications</p>
              </Card>
              <Card className="p-6 text-center">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Result Declaration</h3>
                <p className="text-muted-foreground">Access your examination results as soon as they are published</p>
              </Card>
              <Card className="p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Academic Excellence</h3>
                <p className="text-muted-foreground">Recognition for outstanding academic performance</p>
              </Card>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-primary">Examination System</h2>
                <p className="text-muted-foreground mb-6">
                  Janapriya Group of Institutions follows the examination pattern prescribed by Rajiv Gandhi University of Health Sciences (RGUHS). Our assessment system is designed to evaluate both theoretical knowledge and practical skills comprehensively.
                </p>
                
                <h3 className="text-xl font-semibold mb-4 text-secondary">Assessment Components</h3>
                <div className="space-y-4">
                  <div className="bg-accent/20 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Internal Assessment (30%)</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>Mid-term examinations</li>
                      <li>Assignments and presentations</li>
                      <li>Practical assessments</li>
                      <li>Attendance and participation</li>
                    </ul>
                  </div>
                  <div className="bg-accent/20 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">University Examinations (70%)</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>End semester theory examinations</li>
                      <li>Practical examinations</li>
                      <li>Clinical assessments</li>
                      <li>Viva voce</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-primary">Recent Examination Notices</h2>
                <div className="space-y-4">
                  {[
                    {
                      date: "January 20, 2025",
                      title: "Semester 2 End Examinations 2024-25",
                      description: "University examinations will be conducted from February 1-15, 2025. Hall tickets available from January 25."
                    },
                    {
                      date: "January 10, 2025",
                      title: "Mid-term Examination Results",
                      description: "Mid-term examination results for all programs are now available on the student portal."
                    },
                    {
                      date: "December 15, 2024",
                      title: "Practical Examination Schedule",
                      description: "Practical examinations for clinical subjects scheduled from January 5-20, 2025."
                    },
                  ].map((notice, index) => (
                    <div key={index} className="border-l-4 border-secondary pl-4 py-2">
                      <div className="text-sm text-secondary font-semibold mb-1">{notice.date}</div>
                      <h3 className="font-bold mb-2">{notice.title}</h3>
                      <p className="text-sm text-muted-foreground">{notice.description}</p>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-primary">Result Information</h2>
                <p className="text-muted-foreground mb-4">
                  Examination results are published on the RGUHS official website as well as on our institution portal. Students can access their results using their registration number.
                </p>
                <div className="bg-accent/20 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">How to Check Results</h4>
                  <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-2">
                    <li>Visit the student portal or RGUHS website</li>
                    <li>Enter your registration number and date of birth</li>
                    <li>Click on "View Results"</li>
                    <li>Download and save your result for future reference</li>
                  </ol>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Examinations;
