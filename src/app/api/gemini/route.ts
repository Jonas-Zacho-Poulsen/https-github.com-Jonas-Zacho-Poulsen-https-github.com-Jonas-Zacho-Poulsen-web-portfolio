import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from 'next/server';

const MODEL_NAME = "gemini-1.0-pro";

export const runtime = 'edge';

async function generateResponse(prompt: string): Promise<string> {
  const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

  if (!apiKey) {
    throw new Error(
      "Missing GOOGLE_GENERATIVE_AI_API_KEY environment variable"
    );
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  try {
    const result = await model.generateContent(prompt);
    const response = result.response;
    if (!response.text) {
      console.warn(response);
      throw new Error("No text in response");
    }
    return response.text();
  } catch (error) {
    console.error("LLM Error: ", error);
    throw error;
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { message } = await req.json();
    const aiResponse = await generateResponse(message);
    return NextResponse.json({ response: aiResponse });
  } catch (e: any) {
    console.error("API error", e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
