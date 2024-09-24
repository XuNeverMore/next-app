export function saveText(text: string) {
  fetch("/api/copytext", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: text }),
  }).then((res) => {
    if (res.ok) {
      // console.log("text copied");
    } else {
      // console.log("text not copied");
    }
  });
}

export function getText(callback: (text: string) => void) {
  fetch("/api/copytext", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((result) => {
      let text = result.data.text;
      // console.log("fetch text  => ", text);
      callback(text);
    });
}
