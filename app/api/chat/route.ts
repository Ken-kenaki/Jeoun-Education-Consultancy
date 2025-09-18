// // app/api/chat/route.ts
// import { NextResponse } from "next/server";
// import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY!, // put your key in .env.local
// });

// export async function POST(req: Request) {
//   try {
//     const { messages } = await req.json();

//     const response = await openai.chat.completions.create({
//       model: "gpt-4o-mini", // or "gpt-3.5-turbo"
//       messages: [
//         { role: "system", content: "You are a helpful AI for an education consultancy website. Answer questions about study abroad, admissions, and guidance." },
//         ...messages,
//       ],
//     });

//     return NextResponse.json({
//       reply: response.choices[0].message?.content,
//     });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
//   }
// }
