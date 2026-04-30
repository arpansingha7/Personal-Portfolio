import { NextResponse } from "next/server";

const KNOWLEDGE_BASE = [
  {
    keywords: ["leetcode", "competitive programming", "dsa", "coding profile"],
    response: "Arpan is active on LeetCode! You can check out his coding profile and problem-solving stats at https://leetcode.com/u/arpansingha7/."
  },
  {
    keywords: ["tech", "stack", "skills", "languages", "programming", "tools", "frameworks"],
    response: "Arpan is highly skilled in Python, SQL, C, Java, and TypeScript. His core focus is AI/ML (TensorFlow, Pandas, Scikit-learn) and Cloud platforms (AWS, Microsoft Azure). For web development, he uses Next.js, Flask, and builds robust REST APIs."
  },
  {
    keywords: ["education", "school", "university", "college", "degree", "study"],
    response: "Arpan is pursuing a rigorous dual-degree path: a B.Tech in Computer Science Engineering at Parul University (2023–2027) AND a BS in Data Science & Applications at IIT Madras. This gives him a unique blend of core software engineering and advanced data science expertise."
  },
  {
    keywords: ["hospital", "management", "system"],
    response: "His 'Hospital Management System' is a comprehensive healthcare administration platform built using Python, Flask, and SQLite. It handles patient records, scheduling workflows, and secure billing operations."
  },
  {
    keywords: ["hyperlocal", "hiring", "network", "mern"],
    response: "The 'Hyperlocal Hiring Network' is one of his major MERN stack projects. It's a localized job discovery platform featuring secure JWT authentication, Cloudinary image handling, and a highly responsive React/Next.js frontend."
  },
  {
    keywords: ["placement", "portal"],
    response: "His 'Placement Portal App' is a centralized platform designed to streamline university recruitment, connecting students with recruiters seamlessly in real-time. It was built using Python and Flask."
  },
  {
    keywords: ["project", "work", "experience", "portfolio", "build"],
    response: "Arpan has built several high-impact projects including a 'Hyperlocal Hiring Network' (MERN stack), a 'Hospital Management System' (Flask/Python), and a 'Placement Portal App'. He also represents the Gir House at IIT Madras in technical competitions!"
  },
  {
    keywords: ["contact", "hire", "internship", "freelance", "email", "phone", "reach", "message", "open to work"],
    response: "Arpan is Open to Work starting April 2026 for internships and full-time roles! You can email him at arpansingha16703@gmail.com, call +91 7001835922, or use the Contact Form at the bottom of the page."
  },
  {
    keywords: ["location", "where", "live", "country", "city"],
    response: "Arpan is based in India (IST time zone) and is completely open to remote work opportunities."
  },
  {
    keywords: ["hello", "hi", "hey", "greetings", "who are you"],
    response: "Hello! I'm Arpan's AI Assistant. I know all about his engineering skills, his dual degrees at IIT Madras & Parul University, his LeetCode profile, and his projects. What would you like to know?"
  },
  {
    keywords: ["resume", "cv", "download"],
    response: "You can view and download Arpan's latest resume directly from the Hero section of this portfolio, just click the 'View Resume' button!"
  }
];

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // Mock processing delay for a more natural AI feel
    await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 500));

    const lowercaseMsg = message.toLowerCase();
    
    // Split message into words for better matching
    const words = lowercaseMsg.replace(/[^\w\s]/gi, '').split(/\s+/);
    
    let bestMatch = null;
    let maxScore = 0;

    for (const entry of KNOWLEDGE_BASE) {
      let score = 0;
      // Check for exact phrase matches
      for (const kw of entry.keywords) {
        if (lowercaseMsg.includes(kw)) {
          score += 2; // Phrase matches carry more weight
        }
      }
      // Check for single word overlaps
      for (const word of words) {
        if (word.length > 2 && entry.keywords.some(kw => kw.includes(word))) {
          score += 1;
        }
      }

      if (score > maxScore) {
        maxScore = score;
        bestMatch = entry;
      }
    }

    const response = bestMatch && maxScore > 0
      ? bestMatch.response 
      : "That's an interesting question! I am Arpan's AI representative. I can tell you about his dual-degree education (IIT Madras), his tech stack (Python, Next.js, AI/ML), his latest projects, or his LeetCode profile. Try asking about one of those!";

    return NextResponse.json({ reply: response });
  } catch {
    return NextResponse.json({ error: "I'm having trouble connecting right now. Please try again later." }, { status: 500 });
  }
}
