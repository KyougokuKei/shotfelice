import { keys } from "./localStorageKeys";

const sortedKeys = [
  keys.category,
  keys.category_detail,
  keys.number_of_shots,
  keys.data_type,
  keys.prefecture,
  keys.month,
  keys.day,
  keys.time,
  keys.prefecture,
  keys.address,
  keys.phone,
  keys.email,
];
const hasKey = (key) => {
  const target = JSON.parse(localStorage.getItem("hooks:" + key));
  return !(
    target === null ||
    target === undefined ||
    target === "" ||
    target === [] ||
    target.length === 0
  );
};

const hasAllkeys = (keys) => {
  return keys.every((key) => hasKey(key));
};

export const formsAreInputed = () => {
  if (typeof window !== "undefined") {
    let step = 0;
    for (let i = 0; i < sortedKeys.length; i++) {
      if (!hasKey(sortedKeys[i])) {
        break;
      } else {
        step += 1;
      }
    }

    if (step === 0) {
      return 0;
    } else if (step <= 1) {
      return 1;
    } else if (step <= 10) {
      return 2;
    } else {
      return 10;
    }
  } else {
    return 0;
  }
};
