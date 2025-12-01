import { Card } from "@/components/ui/card";
import { GraduationCap, Users, Trophy, Heart, Palette, Music } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import convocationImg from "@/assets/convocation.jpg";
import studentsImg from "@/assets/hero-students-1.jpg";

const Students = () => {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="relative h-[300px] bg-gradient-to-r from-primary to-primary-dark text-primary-foreground">
          <div className="container-wide h-full flex items-center">
            <div>
              <h1 className="text-5xl font-bold mb-4">Student Life</h1>
              <p className="text-xl opacity-90">Beyond Academics - Holistic Development</p>
            </div>
          </div>
        </section>

        {/* Convocation */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="h-10 w-10 text-primary" />
                  <h2 className="text-4xl font-bold text-primary">Annual Convocation</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Our annual convocation ceremony celebrates the achievements of our graduating students. It's a momentous occasion where students receive their degrees and embark on their professional journeys.
                </p>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-secondary">Convocation 2024 Highlights</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>Over 500 students conferred degrees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>Distinguished chief guest from medical field</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>Gold medals awarded to top performers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>Cultural performances by students</span>
                    </li>
                  </ul>
                </Card>
              </div>
              <div>
                <img src={convocationImg} alt="Convocation" className="rounded-lg shadow-lg w-full h-96 object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Student Clubs */}
        <section className="section-padding bg-accent/20">
          <div className="container-wide">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Users className="h-10 w-10 text-primary" />
                <h2 className="text-4xl font-bold text-primary">Student Clubs & Activities</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We believe in holistic development. Our student clubs provide platforms for students to explore their interests, develop leadership skills, and create lasting memories.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Heart,
                  name: "NSS Unit",
                  description: "National Service Scheme activities focused on community service and social awareness",
                  activities: ["Health camps", "Blood donation", "Environmental drives"]
                },
                {
                  icon: Trophy,
                  name: "Sports Club",
                  description: "Promoting physical fitness and sportsmanship through various athletic activities",
                  activities: ["Cricket", "Volleyball", "Athletics"]
                },
                {
                  icon: Palette,
                  name: "Cultural Club",
                  description: "Celebrating diversity through cultural events, festivals, and artistic expressions",
                  activities: ["Annual Day", "Cultural fest", "Inter-college events"]
                },
                {
                  icon: Music,
                  name: "Music & Dance",
                  description: "Platform for musically and artistically inclined students to showcase their talents",
                  activities: ["Music competitions", "Dance performances", "Drama"]
                },
                {
                  icon: Users,
                  name: "Literary Club",
                  description: "Fostering reading, writing, and critical thinking through debates and discussions",
                  activities: ["Debates", "Elocution", "Essay competitions"]
                },
                {
                  icon: Heart,
                  name: "Healthcare Club",
                  description: "Student-led initiatives for health awareness and community healthcare programs",
                  activities: ["Health awareness", "First aid training", "Community outreach"]
                },
              ].map((club, index) => (
                <Card key={index} className="p-6 card-hover">
                  <club.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-primary">{club.name}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{club.description}</p>
                  <div className="space-y-2">
                    {club.activities.map((activity, i) => (
                      <div key={i} className="text-xs bg-accent/30 px-3 py-1 rounded-full inline-block mr-2">
                        {activity}
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Student Counseling */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-primary">Student Counseling</h2>
                <p className="text-muted-foreground mb-6">
                  We understand that student life can be challenging. Our counseling services provide support for academic, personal, and career-related concerns.
                </p>
                <h3 className="font-bold mb-4 text-secondary">Services Offered</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Academic counseling and guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Career counseling and mentorship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Personal counseling for stress management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Peer support programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Confidential one-on-one sessions</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-primary">Student Achievements</h2>
                <p className="text-muted-foreground mb-6">
                  Our students consistently excel in academics, sports, and cultural activities, bringing laurels to the institution.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      title: "University Toppers",
                      description: "15 students secured ranks in RGUHS examinations 2023-24"
                    },
                    {
                      title: "Sports Champions",
                      description: "Won 8 medals in inter-collegiate sports meet"
                    },
                    {
                      title: "Research Excellence",
                      description: "5 papers published in peer-reviewed journals"
                    },
                    {
                      title: "Cultural Awards",
                      description: "Best cultural team award at state-level festival"
                    },
                  ].map((achievement, index) => (
                    <div key={index} className="bg-accent/20 p-4 rounded-lg">
                      <h4 className="font-bold mb-1">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Student Welfare */}
        <section className="section-padding bg-accent/20">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-primary">Student Welfare</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We are committed to ensuring the well-being and safety of all our students through comprehensive welfare measures.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Hostel Facilities",
                  description: "Separate hostels for boys and girls with modern amenities and 24/7 security"
                },
                {
                  title: "Medical Support",
                  description: "On-campus medical facility with qualified doctor and emergency services"
                },
                {
                  title: "Transportation",
                  description: "College buses connecting major areas of the city with safe routes"
                },
                {
                  title: "Cafeteria",
                  description: "Hygienic cafeteria serving nutritious meals at subsidized rates"
                },
                {
                  title: "Library Access",
                  description: "Extended library hours and digital resources for enhanced learning"
                },
                {
                  title: "Wi-Fi Campus",
                  description: "High-speed internet connectivity across the campus"
                },
                {
                  title: "Grievance Cell",
                  description: "Dedicated cell for addressing student concerns promptly"
                },
                {
                  title: "Alumni Network",
                  description: "Strong alumni association for mentorship and networking"
                },
              ].map((welfare, index) => (
                <Card key={index} className="p-6 text-center">
                  <h3 className="font-bold mb-3 text-primary">{welfare.title}</h3>
                  <p className="text-sm text-muted-foreground">{welfare.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Students;
