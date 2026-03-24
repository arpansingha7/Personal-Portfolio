To run the website locally on your computer through the terminal, you have two options depending on what you want to achieve:

Option 1: Development Mode (Recommended for Editing)
If you want to make changes to the code and see them update instantly in the browser without restarting the server, run this command in your terminal inside the Personal Portfolio folder:

bash
npm run dev
After running this, open your browser and go to http://localhost:3000.

Option 2: Production Mode (Recommended for Final Testing)
If you want to test the website exactly how it will run when deployed live to the internet (which is fully compiled and optimized for speed), you need to run two commands.

First, build the project:

bash
npm run build
Once the build is successful, start the production server:

bash
npm run start
Then, just like before, open your browser and go to http://localhost:3000.

(Note: I currently have a production server npm run start running in the background for our testing! If you try running it yourself and get a "port in use" error, just let me know and I'll shut down my background process for you.)


--------------------------------------------------------------------------------



This portfolio is built using some of the most cutting-edge and modern web technologies currently available. Here is the tech stack used:

Tech Stack
Framework: Next.js 16 (using the new App Router architecture)
Library: React 19 (leveraging React Server Components)
Language: TypeScript (for type safety and robust code)
Styling: Tailwind CSS v4 (utility-first, zero-runtime CSS)
Animations: Framer Motion (for smooth, hardware-accelerated scroll and layout animations)
UI Components: ShadCN UI / Base UI (for accessible, headless components)
Icons: Lucide React
Is this website scalable?
Yes, it is highly scalable and production-ready. The architecture naturally supports both high-traffic distribution and long-term codebase maintainability. Here's why:

React Server Components (RSC): Because you are using the Next.js App Router, the majority of the UI (like 

HeroSection.tsx
 framework, or 

LiveActivity.tsx
 container) is rendered entirely on the server. This drastically reduces the amount of JavaScript shipped to the user's browser, leading to lightning-fast load times even on mobile devices.
Built-in Advanced Caching: If you look at your GitHub integration (

src/components/organisms/LiveActivity.tsx
), it uses Next.js's Data Cache fetch(..., { next: { revalidate: 3600 } }). This means Next.js fetches the data and serves a static cached version to users. It only magically updates the cache once every hour in the background, making it impossible for high traffic to hit GitHub API rate limits.
Serverless Infrastructure Ready: Your chatbot API route (

src/app/api/chat/route.ts
) is structured as a stateless serverless function. If deployed to a platform like Vercel or AWS, this function spins up instantly and scales horizontally — handling 10 users or 10,000 users simultaneously without any configuration or server-crashing bottlenecks.
Edge Delivery: Next.js compiles page components down to static HTML and CSS by default. When deployed, your portfolio will instantly populate global Edge Networks (CDNs), meaning a visitor from Tokyo or New York will pull the site from a server closest to their physical location.
Because you aren't fighting a bloated monolith and rely entirely on serverless architecture alongside static incremental regeneration, this codebase can easily handle massive enterprise-level scale while maintaining ultra-low computing costs!