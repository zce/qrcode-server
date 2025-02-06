import { toString } from 'qrcode'

// export const config = {  runtime: 'edge' }

export const GET =  async (request: Request) => {
  const { searchParams } = new URL(request.url)
  const input = searchParams.get('value') || searchParams.get('url') || searchParams.get('text') || searchParams.get('data') || searchParams.get('content')
  if (!input) return new Response('Missing required parameter: value', { status: 400 })

  const size = searchParams.get('size') || '200'
  const scale = searchParams.get('scale') || '2'
  const margin = searchParams.get('margin') || '1'
  const dark = searchParams.get('dark') || '#000'
  const light = searchParams.get('light') || '#fff'

  const output = await toString(input, { type: 'svg', width: parseInt(size), scale: parseInt(scale), margin: parseInt(margin), color: { dark, light }  })

  if (request.headers.get('accept')?.startsWith('image')) {
    return new Response(output, { headers: { 'content-type': 'image/svg+xml' } })
  }

  return new Response(`<meta name="viewport" content="width=${size}px"><img style="display:block;margin:auto" src="data:image/svg+xml;base64,${btoa(output)}" alt="${input}">`, { headers: { 'content-type': 'text/html' } })
}
