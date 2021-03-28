# qrcode-server

> A QRCode generator services.

## Endpoints

### GET `/`

Respond to an QRCode SVG picture of you.

```shell
$ curl https://qrcode.zce.me -d "url=https://zce.me"
```

#### Parameters

- `url`: qrcode contents, alias: `text`

#### Response Type

Return different types of results according to accept.

## License

[MIT](LICENSE) &copy; [zce](https://zce.me)
