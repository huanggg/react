import icon_1 from "@/static/images/icon-1.png";
import icon_2 from "@/static/images/icon-2.png";
export function userProductList(data) {
  const obj = {};
  for (const i of data) {
    obj[i.type] ? obj[i.type].push(i) : (obj[i.type] = [i]);
  }
  return obj;
}

export function objDeepCopy(data) {
  const sourceCopy = data instanceof Array ? [] : {};
  for (const item in data) {
    if (!data[item]) {
      sourceCopy[item] = null;
    } else {
      sourceCopy[item] =
        typeof data[item] === "object" ? objDeepCopy(data[item]) : data[item];
    }
  }
  return sourceCopy;
}
// 结构树
export function treeContruct(list, type) {
  const tree = [];
  const tree2 = [];
  const a = function(data) {
    for (const i of data) {
      if (i.checked) {
        if (i.chirlds && i.chirlds.length) {
          a(i.chirlds);
        } else {
          tree.push(i.id);
        }
        tree2.push(i.id);
      }
    }
  };
  a(list);
  return type ? tree2 : tree;
}

export function treeStatus(list) {
  const a = function(data) {
    for (const i of data) {
      if (i.chirlds && i.chirlds.length) {
        i.disabled = true;
        i.icon = icon_1;
        a(i.chirlds);
      } else {
        i.icon = icon_2;
        i.disabled = true;
      }
    }
    return data;
  };
  return a(list);
}
