import { JSONFilePreset } from "lowdb/node";
import { Net, NetFolder } from "./nets.js";

type Data = {
  nets: NetFolder[];
};
const defaultData: Data = {
  nets: [],
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
      folder.children.push(net);
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

export { getDatabase, addNet , deleteNet };
