import { NextRequest } from 'next/server';

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const size = req.nextUrl.searchParams.get('size');

  let googleUrl = `https://lh3.googleusercontent.com/d/${id}`;

  const response = await fetch(googleUrl);

  if (!response.ok) {
    return new Response('Image not found', { status: 404 });
  }

  const buffer = await response.arrayBuffer();

  return new Response(buffer, {
    headers: {
      'Content-Type': 'image/jpeg',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}