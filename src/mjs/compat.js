/**
 * compat.js
 */

import {
  isString,
} from "./common.js";

/* api */
const {runtime} = browser;

/* constants */
import {
  ICON_AUTO, WEBEXT_ID,
} from "./constant.js";

/**
 * disable input
 * @param {string} id - ID
 * @returns {void}
 */
export const disableInput = async id => {
  if (isString(id)) {
    const elm = document.getElementById(id);
    if (elm) {
      elm.disabled = true;
    }
  }
};

/**
 * disable incompatible inputs
 * @returns {?AsyncFunction} - disableInput()
 */
export const disableIncompatibleInputs = async () => {
  let func;
  if (runtime.id !== WEBEXT_ID) {
    func = disableInput(ICON_AUTO);
  }
  return func || null;
};
