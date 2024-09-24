import QRCode from "qrcode";

export function qrCodetoDataURL(text: string, callback: (url: string) => void) {
  QRCode.toDataURL(text, (err: Error, url: string) => {
    if (err) {
      throw err;
    }
    callback(url);
  });
}
