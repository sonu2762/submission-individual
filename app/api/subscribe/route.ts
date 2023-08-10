import { NextApiResponse } from "next";
import { NextResponse } from "next/server"

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    // const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
    // headers: {
    //     'Content-Type': 'application/json',
    //     'API-Key': process.env.DATA_API_KEY,
    // },
    // })gleg
    // const product = await res.json()
    const apiServer = process.env.MAILCHIMP_API_SERVER;

    return NextResponse.json({ msg:apiServer })
}


export async function POST(req: Request, resp: NextApiResponse) {
    const { email } = await req.json();
    console.log(email);
    if (!email) {
      return resp.status(400).json({ error: "Email is empty!" });
    }
  
    const apiServer = process.env.MAILCHIMP_API_SERVER;
    const apiKey = process.env.MAILCHIMP_API_KEY;
    const mailAudienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  
    const customUrl = `https://${apiServer}.api.mailchimp.com/3.0/lists/${mailAudienceId}/members`;
  
    const response = await fetch(customUrl, {
      method: "POST",
      headers: {
        Authorization: `apikey ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
      }),
    });
    const received = await response.json();
    return NextResponse.json(received);
  }
  // api/subscribe.js

