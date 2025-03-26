# qrcode-server

> A QRCode generator services.

## Endpoints

### GET `/`

Respond to an QRCode SVG picture of you.

```shell
$ curl https://qrcode.zce.me -d "text=https://zce.me"
```

#### Parameters


##### `value`

qrcode contents to generate.

- Type: `string` required
- Alias: `v` | `text` | `url` | `data` | `content`

##### `size`

Forces a specific size for the output image. If size is too small to contain the qr symbol, this option will be ignored. Takes precedence over scale.

- Type: `number`
- Default: `200`

##### `scale`

Scale factor. A value of `1` means 1px per modules (black dots).

- Type: `number`
- Default: `2`

##### `margin`

Define how much wide the quiet zone should be.

- Type: `number`
- Default: `1`

##### `dark`

Color of dark module. Value must be in hex format (RGBA). Note: dark color should always be darker than color.light.

- Type: `string`
- Default: `#000`

##### `light`

Color of light module. Value must be in hex format (RGBA). Note: light color should always be lighter than color.dark.

- Type: `string`
- Default: `#fff`

#### Response Type

##### `Accept: image/*`

- Type: `image/svg+xml`

##### `Accept: text/*`

- Type: `text/html`

## License

[MIT](LICENSE) &copy; [zce](https://zce.me)
