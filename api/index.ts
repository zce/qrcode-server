import QRCode from 'qrcode-svg'
import { VercelRequest, VercelResponse } from '@vercel/node'

export default async (req: VercelRequest, res: VercelResponse): Promise<any> => {
  const { text, url } = req.query
  const content = (text ?? url).toString()
  const qrcode = new QRCode({ content, padding: 0, join: true })
  if (req.headers.accept?.startsWith('image')) {
    res.setHeader('content-type', 'image/svg+xml')
    return res.send(qrcode.svg())
  }
  res.send(`<meta name="viewport" content="width=device-width"><img style="display:block;margin:auto" src="data:image/svg+xml;base64,${Buffer.from(qrcode.svg()).toString('base64')}">`)
}
