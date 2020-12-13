import QRCode from 'qrcode-svg'
import { NowRequest, NowResponse } from '@vercel/node'

export default (req: NowRequest, res: NowResponse) => {
  const { text, url } = req.query
  const content = (text || url || 'https://zce.me').toString()
  const qrcode = new QRCode({ content, padding: 0, join: true })
  res.setHeader('content-type', 'image/svg+xml')
  res.send(qrcode.svg({ container: 'svg-viewbox' }))
}
