import QRCode from "qrcode";

export function qrCodetoDataURL(
  text: string,
  callback: (error: Error | null | undefined, url: string) => void
) {
  QRCode.toDataURL(text, callback);
}
