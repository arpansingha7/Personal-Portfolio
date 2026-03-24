import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // Mock RAG processing delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const lowercaseMsg = message.toLowerCase();
    
    let response = "I'm a virtual agent representing Arpan. I can answer questions about his education, his skills in Data Science and CSE, and his availability. What would you like to know?";

    if (lowercaseMsg.includes("tech") || lowercaseMsg.includes("stack") || lowercaseMsg.includes("skills")) {
      response = "Arpan specializes in Python, SQL, AI/ML, and cloud platforms like AWS. He also holds a Microsoft Azure AI Fundamentals certification and has strong fundamentals in Computer Networking and Cybersecurity.";
    } else if (lowercaseMsg.includes("education") || lowercaseMsg.includes("school") || lowercaseMsg.includes("university") || lowercaseMsg.includes("college")) {
      response = "Arpan is pursuing a dual degree: a B.Tech in CSE at Parul University (2023-2027) and a BS in Data Science at IIT Madras. He previously completed his Class 12 at Satish Chandra Memorial School.";
    } else if (lowercaseMsg.includes("project") || lowercaseMsg.includes("work") || lowercaseMsg.includes("experience")) {
      response = "Arpan has built significant applications, notably two Python Flask-based backend architectures: a comprehensive 'Hospital Management System', and a university 'Placement Portal Application'.";
    } else if (lowercaseMsg.includes("contact") || lowercaseMsg.includes("hire") || lowercaseMsg.includes("internship") || lowercaseMsg.includes("freelance")) {
      response = "Arpan is looking for internships and new opportunities! You can reach him at 7001835922 or arpansingha16703@gmail.com, or through his LinkedIn: /in/-arpansingha-.";
    } else if (lowercaseMsg.includes("hello") || lowercaseMsg.includes("hi")) {
      response = "Hello! I'm Arpan's AI Agent. Ask me about his education at IIT Madras, his skills in Data Science, or his contact info.";
    }

    return NextResponse.json({ reply: response });
  } catch (_error) {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
