export function getIPAddress(): Promise<string> {
  return new Promise((resolve, reject) => {
    fetch("/api/ip")
      .then((response) => response.json())
      .then((data) => {
        resolve(data.data.ip);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
