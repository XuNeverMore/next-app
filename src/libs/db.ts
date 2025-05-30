import { JSONFilePreset } from "lowdb/node";
import { Net, NetFolder } from "./nets.js";

type Data = {
  nets: NetFolder[];
  copyText: string;
};
const defaultData: Data = {
  nets: [],
  copyText: "",
};
async function getDatabase() {
  const db = await JSONFilePreset<Data>("./db.json", defaultData);
  return db;
}

async function addNet(category: string, net: Net) {
  const db = await getDatabase();
  await db.update((data) => {
    let folder = data.nets.find((c) => c.title === category);
    if (folder && !folder.children.find((n) => n.url === net.url)) {
      //数组头部插入
      folder.children.unshift(net);
    }
  });
  await db.write();
  return net;
}

async function deleteNet(category: string, net: Net) {
  const db = await getDatabase();
  await db.update((data) => {
    let folder = data.nets.find((c) => c.title === category);
    if (folder) {
      folder.children = folder.children.filter((n) => n.url !== net.url);
    }
  });
  await db.write();
}

async function setCopyText(text: string) {
  const db = await getDatabase();
  await db.update((data) => {
    data.copyText = text;
  });
  await db.write();
}

export { getDatabase, addNet, deleteNet, setCopyText };
