// app/api/chat/route.ts
import { NextRequest, NextResponse } from 'next/server';

// Define TypeScript interfaces
interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface OpenRouterRequest {
  model: string;
  messages: ChatMessage[];
  temperature?: number;
  max_tokens?: number;
  stream?: boolean;
}

interface OpenRouterErrorResponse {
  error: {
    message: string;
    type: string;
    code: number;
  };
}

interface OpenRouterResponse {
  id: string;
  choices: {
    message: ChatMessage;
    finish_reason: string;
    index: number;
  }[];
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

// Consultancy information
const consultancyInfo = {
  name: "Joeun Education Consultancy",
  tagline: "Transforming dreams into global education realities",
  services: ["Study Abroad Consulting", "Visa Assistance", "Test Preparation"],
  studyDestinations: ["South Korea", "Australia", "UK"],
  testPreparations: ["IELTS Preparation", "Korean Language"],
  about: "Joeun Education Consultancy helps students achieve their dreams of studying abroad, with a special focus on South Korea. We provide end-to-end support from university selection to visa processing.",
  contact: {
    nepal: {
      address1: "Big Mart, Purano Arab Bank, Gokameshwor, Kathmandu, Nepal",
      address2: "Joeun Education Consultancy, Boudhanath, Nepal",
      phone: "+977 9808085693",
      phone2: "+977-9862358543"
    },
    korea: {
      phone: "+82 106 787 4320"
    },
    email: "joeuneducationconsultancy@gmail.com",
    email2: "info@joeuneducationconsultancy.com",
    website: "www.joeuneducation.com",
    instagram: "instagram.com/joeuneducation"
  },
  koreaPrograms: {
    d4: {
      name: "D4 Language Visa",
      requirements: ["No IELTS Required", "Minimum GPA: 2.80", "Gap Accepted: Up to 3 Years"],
      locations: ["Seoul", "Daegu"],
      intake: "December / March",
      applyBy: "August 30"
    },
    d2: {
      name: "D2 Study Visa",
      requirements: ["IELTS 5.5 Overall (Not less than 5.5)", "Minimum GPA: 3.20", "Gap Accepted: Up to 2 Years", "2024 passouts can apply"],
      locations: ["Seoul", "Daegu", "Gwangju"],
      intake: "March 2026",
      scholarship: "Scholarship Available",
      features: ["Affordable Tuition fee & Accommodation"]
    }
  },
  benefits: [
    "World's top-ranked universities",
    "Excellent career opportunities with companies like Samsung and Hyundai",
    "Affordable cost of living compared to Western nations",
    "Vibrant culture with traditional and modern influences",
    "Various scholarships available like KGSP"
  ]
};

export async function POST(req: NextRequest) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }

  try {
    const { message, conversationHistory } = await req.json();

    // Validate the request
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Valid message is required' },
        { status: 400 }
      );
    }

    // Check for consultancy-specific queries first
    const lowerCaseMessage = message.toLowerCase();
    
    // Handle specific consultancy queries without calling the AI
    if (lowerCaseMessage.includes('what') && (lowerCaseMessage.includes('service') || lowerCaseMessage.includes('offer'))) {
      return NextResponse.json({ 
        reply: `We provide ${consultancyInfo.services.join(', ')}. We specialize in study destinations like ${consultancyInfo.studyDestinations.join(', ')} and test preparations for ${consultancyInfo.testPreparations.join(' and ')}.` 
      });
    }
    
    if (lowerCaseMessage.includes('korea') || lowerCaseMessage.includes('south korea')) {
      if (lowerCaseMessage.includes('d4') || lowerCaseMessage.includes('language')) {
        return NextResponse.json({
          reply: `For the ${consultancyInfo.koreaPrograms.d4.name}:\n- Requirements: ${consultancyInfo.koreaPrograms.d4.requirements.join(', ')}\n- Locations: ${consultancyInfo.koreaPrograms.d4.locations.join(', ')}\n- Intake: ${consultancyInfo.koreaPrograms.d4.intake}\n- Apply by: ${consultancyInfo.koreaPrograms.d4.applyBy}`
        });
      }
      
      if (lowerCaseMessage.includes('d2') || lowerCaseMessage.includes('study')) {
        return NextResponse.json({
          reply: `For the ${consultancyInfo.koreaPrograms.d2.name}:\n- Requirements: ${consultancyInfo.koreaPrograms.d2.requirements.join(', ')}\n- Locations: ${consultancyInfo.koreaPrograms.d2.locations.join(', ')}\n- Intake: ${consultancyInfo.koreaPrograms.d2.intake}\n- ${consultancyInfo.koreaPrograms.d2.scholarship}\n- ${consultancyInfo.koreaPrograms.d2.features.join(', ')}`
        });
      }
      
      return NextResponse.json({
        reply: `Studying in South Korea offers many benefits: ${consultancyInfo.benefits.join(', ')}. We offer both D4 Language Visa and D2 Study Visa programs. Which one are you interested in?`
      });
    }
    
    if (lowerCaseMessage.includes('contact') || lowerCaseMessage.includes('address') || lowerCaseMessage.includes('email') || lowerCaseMessage.includes('phone')) {
      return NextResponse.json({
        reply: `You can contact us at:\nNepal Offices:\n- ${consultancyInfo.contact.nepal.address1}\n- ${consultancyInfo.contact.nepal.address2}\nPhone: ${consultancyInfo.contact.nepal.phone} / ${consultancyInfo.contact.nepal.phone2}\nKorea Office Phone: ${consultancyInfo.contact.korea.phone}\nEmail: ${consultancyInfo.contact.email} or ${consultancyInfo.contact.email2}\nWebsite: ${consultancyInfo.contact.website}`
      });
    }
    
    if (lowerCaseMessage.includes('about') || lowerCaseMessage.includes('who are you')) {
      return NextResponse.json({
        reply: `${consultancyInfo.about} We are ${consultancyInfo.name} - ${consultancyInfo.tagline}. How can I assist you with your study abroad journey?`
      });
    }

    // Check if API key is set
    if (!process.env.OPENROUTER_API_KEY) {
      console.error('OPENROUTER_API_KEY is not set in environment variables');
      return NextResponse.json(
        { error: 'Server configuration error: API key missing' },
        { status: 500 }
      );
    }

    // Build the messages array with system prompt
    const messages: ChatMessage[] = [
      {
        role: 'system',
        content: `You are Joeun AI, an assistant for Joeun Education Consultancy. 
        Company: ${consultancyInfo.name} - ${consultancyInfo.tagline}
        Services: ${consultancyInfo.services.join(', ')}
        Study Destinations: ${consultancyInfo.studyDestinations.join(', ')}
        Test Preparations: ${consultancyInfo.testPreparations.join(', ')}
        About: ${consultancyInfo.about}
        Contact Nepal: ${consultancyInfo.contact.nepal.address1}, ${consultancyInfo.contact.nepal.address2}, Phone: ${consultancyInfo.contact.nepal.phone}
        Contact Korea: Phone: ${consultancyInfo.contact.korea.phone}
        Email: ${consultancyInfo.contact.email}, Website: ${consultancyInfo.contact.website}
        
        South Korea Programs:
        - D4 Language Visa: ${consultancyInfo.koreaPrograms.d4.requirements.join(', ')}. Locations: ${consultancyInfo.koreaPrograms.d4.locations.join(', ')}. Intake: ${consultancyInfo.koreaPrograms.d4.intake}.
        - D2 Study Visa: ${consultancyInfo.koreaPrograms.d2.requirements.join(', ')}. Locations: ${consultancyInfo.koreaPrograms.d2.locations.join(', ')}. Intake: ${consultancyInfo.koreaPrograms.d2.intake}.
        
        Be helpful, friendly, and professional. Provide accurate information about studying abroad, especially in South Korea. 
        If someone asks about visa requirements, programs, or contact information, provide the specific details.`
      },
      ...(conversationHistory || [])
    ];
    
    messages.push({ role: 'user', content: message });

    // Prepare the request to OpenRouter
    const openRouterRequest: OpenRouterRequest = {
      model: 'deepseek/deepseek-chat',
      messages,
      temperature: 0.7,
      max_tokens: 1000,
      stream: false,
    };

    // Make request to OpenRouter
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'HTTP-Referer': process.env.SITE_URL || 'https://joeuneducationconsultancy.com',
        'X-Title': process.env.SITE_NAME || 'Joeun Education Consultancy',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(openRouterRequest),
    });

    const responseText = await response.text();

    if (!response.ok) {
      let errorMessage = `OpenRouter API error: ${response.status}`;
      
      try {
        const errorData: OpenRouterErrorResponse = JSON.parse(responseText);
        errorMessage = errorData.error?.message || errorMessage;
      } catch (e) {
        console.error('OpenRouter API error response:', responseText);
      }
      
      return NextResponse.json(
        { error: errorMessage },
        { status: response.status }
      );
    }

    let data: OpenRouterResponse;
    try {
      data = JSON.parse(responseText);
    } catch (parseError) {
      console.error('Failed to parse OpenRouter response:', responseText);
      return NextResponse.json(
        { error: 'Invalid response format from AI service' },
        { status: 500 }
      );
    }
    
    // Extract the assistant's reply
    const assistantReply = data.choices?.[0]?.message?.content;
    
    if (!assistantReply) {
      console.error('No assistant reply in response:', data);
      return NextResponse.json(
        { error: 'No response generated by AI' },
        { status: 500 }
      );
    }

    // Return the successful response
    return NextResponse.json({ 
      reply: assistantReply,
    });

  } catch (error) {
    console.error('Chat API unexpected error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Add this to handle preflight requests (CORS)
export async function OPTIONS() {
  return NextResponse.json({}, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}