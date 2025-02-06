# qrcode-server

> A QRCode generator services.

## Endpoints

### GET `/`

Respond to an QRCode SVG picture of you.

```shell
$ curl https://qrcode.zce.me -d "text=https://zce.me"
```

#### Parameters

- `text`: qrcode contents, alias: `value` | `url` | `data` | `content`, required

#### Response Type

Return different types of results according to accept.

## License

[MIT](LICENSE) &copy; [zce](https://zce.me)
