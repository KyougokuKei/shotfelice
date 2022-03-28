const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const yaml = require("js-yaml");

const footerDataPath = path.join(process.cwd(), "components/footer/data.js");
const footerData = require(footerDataPath);
const headerDataPath = path.join(process.cwd(), "components/header/data.js");
const headerData = require(headerDataPath);

const postsPath = path.join(process.cwd(), "posts");
const imgPath = path.join(process.cwd(), "public/img/slider");

async function loadYaml(p) {
  const obj = yaml.load(fs.readFileSync(p, "utf-8"));
  return obj;
}

// 再起的にフォルダの中身を取得する
function allFileNames(dir) {
  const files = fs.readdirSync(dir);
  const result = [];
  for (let file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      result.push(...allFileNames(fullPath));
    } else {
      result.push(fullPath);
    }
  }
  return result;
}

const main = async () => {
  let result = "";
  const files = allFileNames(postsPath);
  for (let file of files) {
    const data = await loadYaml(file);
    const str = JSON.stringify(data);
    result += str;
  }
  const headerTxt = JSON.stringify(headerData);
  const footerTxt = JSON.stringify(footerData);
  const category = fs.readdirSync(imgPath);
  const imgfoldername = String(category.join(""));
  const add =
    "ヴガギグゲゴザジズゼゾダヂヅデドバビブベボ0123456789asdfghjklqertyuiopmnbvcxz!\\{}¥*+>?><\"#$%&'()0=~複数選択可任意必須月火水木金土日（）()年日月時分？?";
  result += headerTxt + footerTxt + imgfoldername + add;
  fs.writeFileSync("./public/fonts/subset.txt", result);
};

main();
