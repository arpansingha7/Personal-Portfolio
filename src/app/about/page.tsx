import { Navbar } from "@/components/organisms/Navbar";
import { Chatbot } from "@/components/organisms/Chatbot";
import { Card } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/30 pb-20">
      {/* Abstract Background Glow */}
      <div className="fixed top-0 left-0 w-full h-screen overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] mix-blend-multiply dark:mix-blend-color-dodge animate-pulse" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] rounded-full bg-secondary/20 blur-[120px] mix-blend-multiply dark:mix-blend-color-dodge animate-pulse delay-1000" />
      </div>

      <Navbar />

      <main className="pt-32 px-6 max-w-5xl mx-auto space-y-8">
        <h1 className="text-5xl font-bold tracking-tight mb-12 text-foreground">
          About <span className="bg-gradient-to-r from-blue-500 via-primary to-green-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">Arpan Singha</span>
        </h1>

        {/* Profile Card */}
        <Card className="bg-card/50 backdrop-blur border-foreground/10 flex flex-col md:flex-row hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 overflow-hidden">
          <div className="md:w-1/4 bg-foreground/5 p-6 border-b md:border-b-0 md:border-r border-foreground/10 flex items-center justify-center">
            <h2 className="text-2xl font-bold text-foreground">Profile</h2>
          </div>
          <div className="md:w-3/4 p-6 text-muted-foreground space-y-4">
            <p className="font-bold text-foreground text-lg">Dual Degree CS & Data Science — AI/ML Practitioner</p>
            <p>A driven and enthusiastic computer science student pursuing a dual degree: B.Tech in Computer Science Engineering from Parul University and BS in Data Science from IIT Madras.</p>
            <p>Skilled in Python, SQL, Microsoft Azure, and AWS with hands-on experience in data analysis, machine learning, and cloud-based development. Passionate about building real-world solutions through technology, innovation, and data-driven insights. Seeking opportunities to apply technical expertise in impactful projects, internships, or entry-level software/data roles.</p>
          </div>
        </Card>

        {/* Education Card */}
        <Card className="bg-card/50 backdrop-blur border-foreground/10 flex flex-col md:flex-row hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 overflow-hidden">
          <div className="md:w-1/4 bg-foreground/5 p-6 border-b md:border-b-0 md:border-r border-foreground/10 flex items-center justify-center">
            <h2 className="text-2xl font-bold text-foreground">Education</h2>
          </div>
          <div className="md:w-3/4 p-6 text-muted-foreground space-y-6">
            <div>
              <h3 className="text-xl font-bold text-foreground">Parul University, Vadodara</h3>
              <p className="text-sm text-primary font-medium">B.Tech in Computer Science Engineering</p>
              <p className="text-sm mt-1">Emphasizes core computer science principles, software development, AI, and practical problem-solving.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">IIT Madras, Chennai</h3>
              <p className="text-sm text-primary font-medium">BS in Data Science and Applications</p>
              <p className="text-sm mt-1">Equips students with essential skills in data analysis, machine learning, and programming.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-foreground/10">
              <div>
                <h3 className="text-md font-bold text-foreground">Satish Chandra Memorial School</h3>
                <p className="text-sm">Class 12 (CBSE) – PCM + CS</p>
                <p className="text-xs text-primary font-bold mt-1">Percentage: 91.6%</p>
              </div>
              <div>
                <h3 className="text-md font-bold text-foreground">Chakdaha Model School</h3>
                <p className="text-sm">Class 10 (CBSE)</p>
                <p className="text-xs text-primary font-bold mt-1">Percentage: 91.6%</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Experience Card */}
        <Card className="bg-card/50 backdrop-blur border-foreground/10 flex flex-col md:flex-row hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 overflow-hidden">
          <div className="md:w-1/4 bg-foreground/5 p-6 border-b md:border-b-0 md:border-r border-foreground/10 flex items-center justify-center">
            <h2 className="text-2xl font-bold text-foreground">Experience</h2>
          </div>
          <div className="md:w-3/4 p-6 text-muted-foreground space-y-4">
            <h3 className="text-xl font-bold text-foreground">Member, Gir House</h3>
            <p className="text-sm text-primary font-medium">IITM BS Degree Program (Oct 2023 - Present)</p>
            <p className="text-sm">Contributed to peer collaboration and group learning as part of the BS Data Science cohort. Represented Gir House in technical competitions during IIT Madras’s Paradox and Margazhi fests. Participated in academic discussions, project showcases, and supported team efforts that led to multiple house-level wins.</p>
          </div>
        </Card>

        {/* Technical Skills and Languages Card */}
        <Card className="bg-card/50 backdrop-blur border-foreground/10 flex flex-col md:flex-row hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 overflow-hidden">
          <div className="md:w-1/4 bg-foreground/5 p-6 border-b md:border-b-0 md:border-r border-foreground/10 flex items-center justify-center">
            <h2 className="text-2xl font-bold text-foreground">Skills</h2>
          </div>
          <div className="md:w-3/4 p-6 grid grid-cols-1 sm:grid-cols-2 gap-8 text-muted-foreground">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4 border-b border-foreground/10 pb-2">Technical Core</h3>
              <ul className="space-y-2 text-sm">
                <li><span className="font-semibold text-foreground">Programming:</span> Python, SQL, C, Java</li>
                <li><span className="font-semibold text-foreground">Cloud:</span> Microsoft Azure, AWS</li>
                <li><span className="font-semibold text-foreground">Concepts:</span> Machine Learning, Data Analysis, Networking</li>
                <li><span className="font-semibold text-foreground">Tools:</span> GitHub, Jupyter, VS Code</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4 border-b border-foreground/10 pb-2">Languages</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary" /> English (Full Professional)</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary" /> Hindi (Full Professional)</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary" /> Bengali (Native)</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Certifications Card */}
        <Card className="bg-card/50 backdrop-blur border-foreground/10 flex flex-col md:flex-row hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 overflow-hidden">
          <div className="md:w-1/4 bg-foreground/5 p-6 border-b md:border-b-0 md:border-r border-foreground/10 flex items-center justify-center">
            <h2 className="text-2xl font-bold text-foreground">Certifications</h2>
          </div>
          <div className="md:w-3/4 p-6 flex flex-wrap gap-3">
            <span className="bg-primary/10 text-foreground px-4 py-2 rounded-lg text-sm font-medium border border-primary/20 shadow-sm hover:bg-primary/20 hover:text-primary transition-colors cursor-default">Azure AI Fundamentals (Microsoft)</span>
            <span className="bg-primary/10 text-foreground px-4 py-2 rounded-lg text-sm font-medium border border-primary/20 shadow-sm hover:bg-primary/20 hover:text-primary transition-colors cursor-default">Software Development (LinkedIn)</span>
            <span className="bg-primary/10 text-foreground px-4 py-2 rounded-lg text-sm font-medium border border-primary/20 shadow-sm hover:bg-primary/20 hover:text-primary transition-colors cursor-default">Internet Protocols (NPTEL)</span>
            <span className="bg-primary/10 text-foreground px-4 py-2 rounded-lg text-sm font-medium border border-primary/20 shadow-sm hover:bg-primary/20 hover:text-primary transition-colors cursor-default">Cybersecurity (Cisco)</span>
            <span className="bg-primary/10 text-foreground px-4 py-2 rounded-lg text-sm font-medium border border-primary/20 shadow-sm hover:bg-primary/20 hover:text-primary transition-colors cursor-default">Blockchain (HCL GUVI)</span>
          </div>
        </Card>
        
      </main>

      <Chatbot />
    </div>
  );
}
