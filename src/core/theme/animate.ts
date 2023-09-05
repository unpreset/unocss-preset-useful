/*!
 * Magic - https://www.minimamente.com
 * Licensed under the MIT license - https://opensource.org/licenses/MIT
 * Copyright (c) 2022 Christian Pucci
 */

const css = `
@keyframes puffIn {
  0% {
    opacity: 0;
    transform-origin: 50% 50%;
  }
  100% {
    opacity: 1;
    transform-origin: 100% 100%;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
`
const reg = /@keyframes\s*(?<name>.+)\s*\{.+?\}/g
