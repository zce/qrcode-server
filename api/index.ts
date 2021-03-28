import QRCode, { Options } from 'qrcode-svg'
import { VercelRequest, VercelResponse } from '@vercel/node'

export default async (req: VercelRequest, res: VercelResponse): Promise<any> => {
  const { text, url, ...options } = { ...req.query, ...req.body } as Options & { text?: string, url?: string }

  const content = text ?? url
  if (content == null) return res.send('Missing required parameters: url')

  options.content = content
  const qrcode = new QRCode(options)

  // image response
  if (req.headers.accept?.startsWith('image')) {
    res.setHeader('content-type', 'image/svg+xml')
    return res.send(qrcode.svg())
  }

  // page response
  res.send(`<meta name="viewport" content="width=device-width"><img style="display:block;margin:auto" src="data:image/svg+xml;base64,${Buffer.from(qrcode.svg()).toString('base64')}">`)
}
