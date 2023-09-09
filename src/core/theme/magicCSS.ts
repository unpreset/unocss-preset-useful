export const magicCSS = `
/*!
 * Magic - https://www.minimamente.com
 * Licensed under the MIT license - https://opensource.org/licenses/MIT
 * Copyright (c) 2022 Christian Pucci
 */
.puffIn {
  -webkit-animation-name: puffIn;
          animation-name: puffIn;
}

@-webkit-keyframes puffIn {
  0% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(2, 2);
    filter: blur(2px);
  }
  100% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1);
    filter: blur(0px);
  }
}
@keyframes puffIn {
  0% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(2, 2);
    filter: blur(2px);
  }
  100% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1);
    filter: blur(0px);
  }
}
.puffOut {
  -webkit-animation-name: puffOut;
          animation-name: puffOut;
}

@-webkit-keyframes puffOut {
  0% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1);
    filter: blur(0px);
  }
  100% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(2, 2);
    filter: blur(2px);
  }
}
@keyframes puffOut {
  0% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1);
    filter: blur(0px);
  }
  100% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(2, 2);
    filter: blur(2px);
  }
}
.vanishIn {
  -webkit-animation-name: vanishIn;
          animation-name: vanishIn;
}

@-webkit-keyframes vanishIn {
  0% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(2, 2);
    filter: blur(90px);
  }
  100% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1);
    filter: blur(0px);
  }
}
@keyframes vanishIn {
  0% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(2, 2);
    filter: blur(90px);
  }
  100% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1);
    filter: blur(0px);
  }
}
.vanishOut {
  -webkit-animation-name: vanishOut;
          animation-name: vanishOut;
}

@-webkit-keyframes vanishOut {
  0% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1);
    filter: blur(0px);
  }
  100% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(2, 2);
    filter: blur(20px);
  }
}
@keyframes vanishOut {
  0% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1);
    filter: blur(0px);
  }
  100% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(2, 2);
    filter: blur(20px);
  }
}
.boingInUp {
  -webkit-animation-name: boingInUp;
  animation-name: boingInUp;
}

@-webkit-keyframes boingInUp {
  0% {
    opacity: 0;
    transform-origin: 50% 0%;
    transform: perspective(800px) rotateX(-90deg);
  }
  50% {
    opacity: 1;
    transform-origin: 50% 0%;
    transform: perspective(800px) rotateX(50deg);
  }
  100% {
    opacity: 1;
    transform-origin: 50% 0%;
    transform: perspective(800px) rotateX(0deg);
  }
}
@keyframes boingInUp {
  0% {
    opacity: 0;
    transform-origin: 50% 0%;
    transform: perspective(800px) rotateX(-90deg);
  }
  50% {
    opacity: 1;
    transform-origin: 50% 0%;
    transform: perspective(800px) rotateX(50deg);
  }
  100% {
    opacity: 1;
    transform-origin: 50% 0%;
    transform: perspective(800px) rotateX(0deg);
  }
}
.boingOutDown {
  -webkit-animation-name: boingOutDown;
  animation-name: boingOutDown;
}

@-webkit-keyframes boingOutDown {
  0% {
    opacity: 1;
    transform-origin: 100% 100%;
    transform: perspective(800px) rotateX(0deg) rotateY(0deg);
  }
  20% {
    opacity: 1;
    transform-origin: 100% 100%;
    transform: perspective(800px) rotateX(0deg) rotateY(10deg);
  }
  30% {
    opacity: 1;
    transform-origin: 0% 100%;
    transform: perspective(800px) rotateX(0deg) rotateY(0deg);
  }
  40% {
    opacity: 1;
    transform-origin: 0% 100%;
    transform: perspective(800px) rotateX(10deg) rotateY(10deg);
  }
  100% {
    opacity: 0;
    transform-origin: 100% 100%;
    transform: perspective(800px) rotateX(90deg) rotateY(0deg);
  }
}
@keyframes boingOutDown {
  0% {
    opacity: 1;
    transform-origin: 100% 100%;
    transform: perspective(800px) rotateX(0deg) rotateY(0deg);
  }
  20% {
    opacity: 1;
    transform-origin: 100% 100%;
    transform: perspective(800px) rotateX(0deg) rotateY(10deg);
  }
  30% {
    opacity: 1;
    transform-origin: 0% 100%;
    transform: perspective(800px) rotateX(0deg) rotateY(0deg);
  }
  40% {
    opacity: 1;
    transform-origin: 0% 100%;
    transform: perspective(800px) rotateX(10deg) rotateY(10deg);
  }
  100% {
    opacity: 0;
    transform-origin: 100% 100%;
    transform: perspective(800px) rotateX(90deg) rotateY(0deg);
  }
}
.bombLeftOut {
  -webkit-animation-name: bombLeftOut;
  animation-name: bombLeftOut;
}

@-webkit-keyframes bombLeftOut {
  0% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: rotate(0deg);
    filter: blur(0px);
  }
  50% {
    opacity: 1;
    transform-origin: -100% 50%;
    transform: rotate(-160deg);
    filter: blur(0px);
  }
  100% {
    opacity: 0;
    transform-origin: -100% 50%;
    transform: rotate(-160deg);
    filter: blur(20px);
  }
}
@keyframes bombLeftOut {
  0% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: rotate(0deg);
    filter: blur(0px);
  }
  50% {
    opacity: 1;
    transform-origin: -100% 50%;
    transform: rotate(-160deg);
    filter: blur(0px);
  }
  100% {
    opacity: 0;
    transform-origin: -100% 50%;
    transform: rotate(-160deg);
    filter: blur(20px);
  }
}
.bombRightOut {
  -webkit-animation-name: bombRightOut;
  animation-name: bombRightOut;
}

@-webkit-keyframes bombRightOut {
  0% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: rotate(0deg);
    filter: blur(0px);
  }
  50% {
    opacity: 1;
    transform-origin: 200% 50%;
    transform: rotate(160deg);
    filter: blur(0px);
  }
  100% {
    opacity: 0;
    transform-origin: 200% 50%;
    transform: rotate(160deg);
    filter: blur(20px);
  }
}
@keyframes bombRightOut {
  0% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: rotate(0deg);
    filter: blur(0px);
  }
  50% {
    opacity: 1;
    transform-origin: 200% 50%;
    transform: rotate(160deg);
    filter: blur(0px);
  }
  100% {
    opacity: 0;
    transform-origin: 200% 50%;
    transform: rotate(160deg);
    filter: blur(20px);
  }
}
.magic {
  -webkit-animation-name: magic;
  animation-name: magic;
}

@-webkit-keyframes magic {
  0% {
    opacity: 1;
    transform-origin: 100% 200%;
    transform: scale(1, 1) rotate(0deg);
  }
  100% {
    opacity: 0;
    transform-origin: 200% 500%;
    transform: scale(0, 0) rotate(270deg);
  }
}
@keyframes magic {
  0% {
    opacity: 1;
    transform-origin: 100% 200%;
    transform: scale(1, 1) rotate(0deg);
  }
  100% {
    opacity: 0;
    transform-origin: 200% 500%;
    transform: scale(0, 0) rotate(270deg);
  }
}
.swap {
  -webkit-animation-name: swap;
  animation-name: swap;
}

@-webkit-keyframes swap {
  0% {
    opacity: 0;
    transform-origin: 0 100%;
    transform: scale(0, 0) translate(-700px, 0px);
  }
  100% {
    opacity: 1;
    transform-origin: 100% 100%;
    transform: scale(1, 1) translate(0px, 0px);
  }
}
@keyframes swap {
  0% {
    opacity: 0;
    transform-origin: 0 100%;
    transform: scale(0, 0) translate(-700px, 0px);
  }
  100% {
    opacity: 1;
    transform-origin: 100% 100%;
    transform: scale(1, 1) translate(0px, 0px);
  }
}
.twisterInDown {
  -webkit-animation-name: twisterInDown;
  animation-name: twisterInDown;
}

@-webkit-keyframes twisterInDown {
  0% {
    opacity: 0;
    transform-origin: 0 100%;
    transform: scale(0, 0) rotate(360deg) translateY(-100%);
  }
  30% {
    transform-origin: 0 100%;
    transform: scale(0, 0) rotate(360deg) translateY(-100%);
  }
  100% {
    opacity: 1;
    transform-origin: 100% 100%;
    transform: scale(1, 1) rotate(0deg) translateY(0%);
  }
}
@keyframes twisterInDown {
  0% {
    opacity: 0;
    transform-origin: 0 100%;
    transform: scale(0, 0) rotate(360deg) translateY(-100%);
  }
  30% {
    transform-origin: 0 100%;
    transform: scale(0, 0) rotate(360deg) translateY(-100%);
  }
  100% {
    opacity: 1;
    transform-origin: 100% 100%;
    transform: scale(1, 1) rotate(0deg) translateY(0%);
  }
}
.twisterInUp {
  -webkit-animation-name: twisterInUp;
  animation-name: twisterInUp;
}

@-webkit-keyframes twisterInUp {
  0% {
    opacity: 0;
    transform-origin: 100% 0;
    transform: scale(0, 0) rotate(360deg) translateY(100%);
  }
  30% {
    transform-origin: 100% 0;
    transform: scale(0, 0) rotate(360deg) translateY(100%);
  }
  100% {
    opacity: 1;
    transform-origin: 0 0;
    transform: scale(1, 1) rotate(0deg) translateY(0);
  }
}
@keyframes twisterInUp {
  0% {
    opacity: 0;
    transform-origin: 100% 0;
    transform: scale(0, 0) rotate(360deg) translateY(100%);
  }
  30% {
    transform-origin: 100% 0;
    transform: scale(0, 0) rotate(360deg) translateY(100%);
  }
  100% {
    opacity: 1;
    transform-origin: 0 0;
    transform: scale(1, 1) rotate(0deg) translateY(0);
  }
}
.foolishIn {
  -webkit-animation-name: foolishIn;
  animation-name: foolishIn;
}

@-webkit-keyframes foolishIn {
  0% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(0, 0) rotate(360deg);
  }
  20% {
    opacity: 1;
    transform-origin: 0% 100%;
    transform: scale(0.5, 0.5) rotate(0deg);
  }
  40% {
    opacity: 1;
    transform-origin: 100% 100%;
    transform: scale(0.5, 0.5) rotate(0deg);
  }
  60% {
    opacity: 1;
    transform-origin: 0%;
    transform: scale(0.5, 0.5) rotate(0deg);
  }
  80% {
    opacity: 1;
    transform-origin: 0% 0%;
    transform: scale(0.5, 0.5) rotate(0deg);
  }
  100% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1) rotate(0deg);
  }
}
@keyframes foolishIn {
  0% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(0, 0) rotate(360deg);
  }
  20% {
    opacity: 1;
    transform-origin: 0% 100%;
    transform: scale(0.5, 0.5) rotate(0deg);
  }
  40% {
    opacity: 1;
    transform-origin: 100% 100%;
    transform: scale(0.5, 0.5) rotate(0deg);
  }
  60% {
    opacity: 1;
    transform-origin: 0%;
    transform: scale(0.5, 0.5) rotate(0deg);
  }
  80% {
    opacity: 1;
    transform-origin: 0% 0%;
    transform: scale(0.5, 0.5) rotate(0deg);
  }
  100% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1) rotate(0deg);
  }
}
.foolishOut {
  -webkit-animation-name: foolishOut;
  animation-name: foolishOut;
}

@-webkit-keyframes foolishOut {
  0% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1) rotate(360deg);
  }
  20% {
    opacity: 1;
    transform-origin: 0% 0%;
    transform: scale(0.5, 0.5) rotate(0deg);
  }
  40% {
    opacity: 1;
    transform-origin: 100% 0%;
    transform: scale(0.5, 0.5) rotate(0deg);
  }
  60% {
    opacity: 1;
    transform-origin: 0%;
    transform: scale(0.5, 0.5) rotate(0deg);
  }
  80% {
    opacity: 1;
    transform-origin: 0% 100%;
    transform: scale(0.5, 0.5) rotate(0deg);
  }
  100% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(0, 0) rotate(0deg);
  }
}
@keyframes foolishOut {
  0% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1) rotate(360deg);
  }
  20% {
    opacity: 1;
    transform-origin: 0% 0%;
    transform: scale(0.5, 0.5) rotate(0deg);
  }
  40% {
    opacity: 1;
    transform-origin: 100% 0%;
    transform: scale(0.5, 0.5) rotate(0deg);
  }
  60% {
    opacity: 1;
    transform-origin: 0%;
    transform: scale(0.5, 0.5) rotate(0deg);
  }
  80% {
    opacity: 1;
    transform-origin: 0% 100%;
    transform: scale(0.5, 0.5) rotate(0deg);
  }
  100% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(0, 0) rotate(0deg);
  }
}
.holeOut {
  -webkit-animation-name: holeOut;
  animation-name: holeOut;
}

@-webkit-keyframes holeOut {
  0% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1) rotateY(0deg);
  }
  100% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(0, 0) rotateY(180deg);
  }
}
@keyframes holeOut {
  0% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1) rotateY(0deg);
  }
  100% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(0, 0) rotateY(180deg);
  }
}
.swashIn {
  -webkit-animation-name: swashIn;
  animation-name: swashIn;
}

@-webkit-keyframes swashIn {
  0% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(0, 0);
  }
  90% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(0.9, 0.9);
  }
  100% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1);
  }
}
@keyframes swashIn {
  0% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(0, 0);
  }
  90% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(0.9, 0.9);
  }
  100% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1);
  }
}
.swashOut {
  -webkit-animation-name: swashOut;
  animation-name: swashOut;
}

@-webkit-keyframes swashOut {
  0% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1);
  }
  80% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(0.9, 0.9);
  }
  100% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(0, 0);
  }
}
@keyframes swashOut {
  0% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1);
  }
  80% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(0.9, 0.9);
  }
  100% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(0, 0);
  }
}
.spaceInDown {
  -webkit-animation-name: spaceInDown;
  animation-name: spaceInDown;
}

@-webkit-keyframes spaceInDown {
  0% {
    opacity: 0;
    transform-origin: 50% 100%;
    transform: scale(0.2) translate(0%, 200%);
  }
  100% {
    opacity: 1;
    transform-origin: 50% 100%;
    transform: scale(1) translate(0%, 0%);
  }
}
@keyframes spaceInDown {
  0% {
    opacity: 0;
    transform-origin: 50% 100%;
    transform: scale(0.2) translate(0%, 200%);
  }
  100% {
    opacity: 1;
    transform-origin: 50% 100%;
    transform: scale(1) translate(0%, 0%);
  }
}
.spaceInLeft {
  -webkit-animation-name: spaceInLeft;
  animation-name: spaceInLeft;
}

@-webkit-keyframes spaceInLeft {
  0% {
    opacity: 0;
    transform-origin: 0% 50%;
    transform: scale(0.2) translate(-200%, 0%);
  }
  100% {
    opacity: 1;
    transform-origin: 0% 50%;
    transform: scale(1) translate(0%, 0%);
  }
}
@keyframes spaceInLeft {
  0% {
    opacity: 0;
    transform-origin: 0% 50%;
    transform: scale(0.2) translate(-200%, 0%);
  }
  100% {
    opacity: 1;
    transform-origin: 0% 50%;
    transform: scale(1) translate(0%, 0%);
  }
}
.spaceInRight {
  -webkit-animation-name: spaceInRight;
  animation-name: spaceInRight;
}

@-webkit-keyframes spaceInRight {
  0% {
    opacity: 0;
    transform-origin: 100% 50%;
    transform: scale(0.2) translate(200%, 0%);
  }
  100% {
    opacity: 1;
    transform-origin: 100% 50%;
    transform: scale(1) translate(0%, 0%);
  }
}
@keyframes spaceInRight {
  0% {
    opacity: 0;
    transform-origin: 100% 50%;
    transform: scale(0.2) translate(200%, 0%);
  }
  100% {
    opacity: 1;
    transform-origin: 100% 50%;
    transform: scale(1) translate(0%, 0%);
  }
}
.spaceInUp {
  -webkit-animation-name: spaceInUp;
  animation-name: spaceInUp;
}

@-webkit-keyframes spaceInUp {
  0% {
    opacity: 0;
    transform-origin: 50% 0%;
    transform: scale(0.2) translate(0%, -200%);
  }
  100% {
    opacity: 1;
    transform-origin: 50% 0%;
    transform: scale(1) translate(0%, 0%);
  }
}
@keyframes spaceInUp {
  0% {
    opacity: 0;
    transform-origin: 50% 0%;
    transform: scale(0.2) translate(0%, -200%);
  }
  100% {
    opacity: 1;
    transform-origin: 50% 0%;
    transform: scale(1) translate(0%, 0%);
  }
}
.spaceOutDown {
  -webkit-animation-name: spaceOutDown;
  animation-name: spaceOutDown;
}

@-webkit-keyframes spaceOutDown {
  0% {
    opacity: 1;
    transform-origin: 50% 100%;
    transform: scale(1) translate(0%, 0%);
  }
  100% {
    opacity: 0;
    transform-origin: 50% 100%;
    transform: scale(0.2) translate(0%, 200%);
  }
}
@keyframes spaceOutDown {
  0% {
    opacity: 1;
    transform-origin: 50% 100%;
    transform: scale(1) translate(0%, 0%);
  }
  100% {
    opacity: 0;
    transform-origin: 50% 100%;
    transform: scale(0.2) translate(0%, 200%);
  }
}
.spaceOutLeft {
  -webkit-animation-name: spaceOutLeft;
  animation-name: spaceOutLeft;
}

@-webkit-keyframes spaceOutLeft {
  0% {
    opacity: 1;
    transform-origin: 0% 50%;
    transform: scale(1) translate(0%, 0%);
  }
  100% {
    opacity: 0;
    transform-origin: 0% 50%;
    transform: scale(0.2) translate(-200%, 0%);
  }
}
@keyframes spaceOutLeft {
  0% {
    opacity: 1;
    transform-origin: 0% 50%;
    transform: scale(1) translate(0%, 0%);
  }
  100% {
    opacity: 0;
    transform-origin: 0% 50%;
    transform: scale(0.2) translate(-200%, 0%);
  }
}
.spaceOutRight {
  -webkit-animation-name: spaceOutRight;
  animation-name: spaceOutRight;
}

@-webkit-keyframes spaceOutRight {
  0% {
    opacity: 1;
    transform-origin: 100% 50%;
    transform: scale(1) translate(0%, 0%);
  }
  100% {
    opacity: 0;
    transform-origin: 100% 50%;
    transform: scale(0.2) translate(200%, 0%);
  }
}
@keyframes spaceOutRight {
  0% {
    opacity: 1;
    transform-origin: 100% 50%;
    transform: scale(1) translate(0%, 0%);
  }
  100% {
    opacity: 0;
    transform-origin: 100% 50%;
    transform: scale(0.2) translate(200%, 0%);
  }
}
.spaceOutUp {
  -webkit-animation-name: spaceOutUp;
  animation-name: spaceOutUp;
}

@-webkit-keyframes spaceOutUp {
  0% {
    opacity: 1;
    transform-origin: 50% 0%;
    transform: scale(1) translate(0%, 0%);
  }
  100% {
    opacity: 0;
    transform-origin: 50% 0%;
    transform: scale(0.2) translate(0%, -200%);
  }
}
@keyframes spaceOutUp {
  0% {
    opacity: 1;
    transform-origin: 50% 0%;
    transform: scale(1) translate(0%, 0%);
  }
  100% {
    opacity: 0;
    transform-origin: 50% 0%;
    transform: scale(0.2) translate(0%, -200%);
  }
}
.perspectiveDown {
  -webkit-animation-name: perspectiveDown;
  animation-name: perspectiveDown;
}

@-webkit-keyframes perspectiveDown {
  0% {
    transform-origin: 0 100%;
    transform: perspective(800px) rotateX(0deg);
  }
  100% {
    transform-origin: 0 100%;
    transform: perspective(800px) rotateX(-180deg);
  }
}
@keyframes perspectiveDown {
  0% {
    transform-origin: 0 100%;
    transform: perspective(800px) rotateX(0deg);
  }
  100% {
    transform-origin: 0 100%;
    transform: perspective(800px) rotateX(-180deg);
  }
}
.perspectiveDownReturn {
  -webkit-animation-name: perspectiveDownReturn;
  animation-name: perspectiveDownReturn;
}

@-webkit-keyframes perspectiveDownReturn {
  0% {
    transform-origin: 0 100%;
    transform: perspective(800px) rotateX(-180deg);
  }
  100% {
    transform-origin: 0 100%;
    transform: perspective(800px) rotateX(0deg);
  }
}
@keyframes perspectiveDownReturn {
  0% {
    transform-origin: 0 100%;
    transform: perspective(800px) rotateX(-180deg);
  }
  100% {
    transform-origin: 0 100%;
    transform: perspective(800px) rotateX(0deg);
  }
}
.perspectiveLeft {
  -webkit-animation-name: perspectiveLeft;
  animation-name: perspectiveLeft;
}

@-webkit-keyframes perspectiveLeft {
  0% {
    transform-origin: 0 0;
    transform: perspective(800px) rotateY(0deg);
  }
  100% {
    transform-origin: 0 0;
    transform: perspective(800px) rotateY(-180deg);
  }
}
@keyframes perspectiveLeft {
  0% {
    transform-origin: 0 0;
    transform: perspective(800px) rotateY(0deg);
  }
  100% {
    transform-origin: 0 0;
    transform: perspective(800px) rotateY(-180deg);
  }
}
.perspectiveLeftReturn {
  -webkit-animation-name: perspectiveLeftReturn;
  animation-name: perspectiveLeftReturn;
}

@-webkit-keyframes perspectiveLeftReturn {
  0% {
    transform-origin: 0 0;
    transform: perspective(800px) rotateY(-180deg);
  }
  100% {
    transform-origin: 0 0;
    transform: perspective(800px) rotateY(0deg);
  }
}
@keyframes perspectiveLeftReturn {
  0% {
    transform-origin: 0 0;
    transform: perspective(800px) rotateY(-180deg);
  }
  100% {
    transform-origin: 0 0;
    transform: perspective(800px) rotateY(0deg);
  }
}
.perspectiveRight {
  -webkit-animation-name: perspectiveRight;
  animation-name: perspectiveRight;
}

@-webkit-keyframes perspectiveRight {
  0% {
    transform-origin: 100% 0;
    transform: perspective(800px) rotateY(0deg);
  }
  100% {
    transform-origin: 100% 0;
    transform: perspective(800px) rotateY(180deg);
  }
}
@keyframes perspectiveRight {
  0% {
    transform-origin: 100% 0;
    transform: perspective(800px) rotateY(0deg);
  }
  100% {
    transform-origin: 100% 0;
    transform: perspective(800px) rotateY(180deg);
  }
}
.perspectiveRightReturn {
  -webkit-animation-name: perspectiveRightReturn;
  animation-name: perspectiveRightReturn;
}

@-webkit-keyframes perspectiveRightReturn {
  0% {
    transform-origin: 100% 0;
    transform: perspective(800px) rotateY(180deg);
  }
  100% {
    transform-origin: 100% 0;
    transform: perspective(800px) rotateY(0deg);
  }
}
@keyframes perspectiveRightReturn {
  0% {
    transform-origin: 100% 0;
    transform: perspective(800px) rotateY(180deg);
  }
  100% {
    transform-origin: 100% 0;
    transform: perspective(800px) rotateY(0deg);
  }
}
.perspectiveUp {
  -webkit-animation-name: perspectiveUp;
  animation-name: perspectiveUp;
}

@-webkit-keyframes perspectiveUp {
  0% {
    transform-origin: 0 0;
    transform: perspective(800px) rotateX(0deg);
  }
  100% {
    transform-origin: 0 0;
    transform: perspective(800px) rotateX(180deg);
  }
}
@keyframes perspectiveUp {
  0% {
    transform-origin: 0 0;
    transform: perspective(800px) rotateX(0deg);
  }
  100% {
    transform-origin: 0 0;
    transform: perspective(800px) rotateX(180deg);
  }
}
.perspectiveUpReturn {
  -webkit-animation-name: perspectiveUpReturn;
  animation-name: perspectiveUpReturn;
}

@-webkit-keyframes perspectiveUpReturn {
  0% {
    transform-origin: 0 0;
    transform: perspective(800px) rotateX(180deg);
  }
  100% {
    transform-origin: 0 0;
    transform: perspective(800px) rotateX(0deg);
  }
}
@keyframes perspectiveUpReturn {
  0% {
    transform-origin: 0 0;
    transform: perspective(800px) rotateX(180deg);
  }
  100% {
    transform-origin: 0 0;
    transform: perspective(800px) rotateX(0deg);
  }
}
.rotateDown {
  -webkit-animation-name: rotateDown;
  animation-name: rotateDown;
}

@-webkit-keyframes rotateDown {
  0% {
    opacity: 1;
    transform-origin: 0 0;
    transform: perspective(800px) rotateX(0deg) translateZ(0px);
  }
  100% {
    opacity: 0;
    transform-origin: 50% 100%;
    transform: perspective(800px) rotateX(-180deg) translateZ(300px);
  }
}
@keyframes rotateDown {
  0% {
    opacity: 1;
    transform-origin: 0 0;
    transform: perspective(800px) rotateX(0deg) translateZ(0px);
  }
  100% {
    opacity: 0;
    transform-origin: 50% 100%;
    transform: perspective(800px) rotateX(-180deg) translateZ(300px);
  }
}
.rotateLeft {
  -webkit-animation-name: rotateLeft;
  animation-name: rotateLeft;
}

@-webkit-keyframes rotateLeft {
  0% {
    opacity: 1;
    transform-origin: 0 0;
    transform: perspective(800px) rotateY(0deg) translateZ(0px);
  }
  100% {
    opacity: 0;
    transform-origin: 50% 0;
    transform: perspective(800px) rotateY(-180deg) translateZ(300px);
  }
}
@keyframes rotateLeft {
  0% {
    opacity: 1;
    transform-origin: 0 0;
    transform: perspective(800px) rotateY(0deg) translateZ(0px);
  }
  100% {
    opacity: 0;
    transform-origin: 50% 0;
    transform: perspective(800px) rotateY(-180deg) translateZ(300px);
  }
}
.rotateRight {
  -webkit-animation-name: rotateRight;
  animation-name: rotateRight;
}

@-webkit-keyframes rotateRight {
  0% {
    opacity: 1;
    transform-origin: 0 0;
    transform: perspective(800px) rotateY(0deg) translate3d(0px);
  }
  100% {
    opacity: 0;
    transform-origin: 50% 0;
    transform: perspective(800px) rotateY(180deg) translateZ(150px);
  }
}
@keyframes rotateRight {
  0% {
    opacity: 1;
    transform-origin: 0 0;
    transform: perspective(800px) rotateY(0deg) translate3d(0px);
  }
  100% {
    opacity: 0;
    transform-origin: 50% 0;
    transform: perspective(800px) rotateY(180deg) translateZ(150px);
  }
}
.rotateUp {
  -webkit-animation-name: rotateUp;
  animation-name: rotateUp;
}

@-webkit-keyframes rotateUp {
  0% {
    opacity: 1;
    transform-origin: 0 0;
    transform: perspective(800px) rotateX(0deg) translateZ(0px);
  }
  100% {
    opacity: 0;
    transform-origin: 50% 0;
    transform: perspective(800px) rotateX(180deg) translateZ(100px);
  }
}
@keyframes rotateUp {
  0% {
    opacity: 1;
    transform-origin: 0 0;
    transform: perspective(800px) rotateX(0deg) translateZ(0px);
  }
  100% {
    opacity: 0;
    transform-origin: 50% 0;
    transform: perspective(800px) rotateX(180deg) translateZ(100px);
  }
}
.slideDown {
  -webkit-animation-name: slideDown;
  animation-name: slideDown;
}

@-webkit-keyframes slideDown {
  0% {
    transform-origin: 0 0;
    transform: translateY(0%);
  }
  100% {
    transform-origin: 0 0;
    transform: translateY(100%);
  }
}
@keyframes slideDown {
  0% {
    transform-origin: 0 0;
    transform: translateY(0%);
  }
  100% {
    transform-origin: 0 0;
    transform: translateY(100%);
  }
}
.slideDownReturn {
  -webkit-animation-name: slideDownReturn;
  animation-name: slideDownReturn;
}

@-webkit-keyframes slideDownReturn {
  0% {
    transform-origin: 0 0;
    transform: translateY(100%);
  }
  100% {
    transform-origin: 0 0;
    transform: translateY(0%);
  }
}
@keyframes slideDownReturn {
  0% {
    transform-origin: 0 0;
    transform: translateY(100%);
  }
  100% {
    transform-origin: 0 0;
    transform: translateY(0%);
  }
}
.slideLeft {
  -webkit-animation-name: slideLeft;
  animation-name: slideLeft;
}

@-webkit-keyframes slideLeft {
  0% {
    transform-origin: 0 0;
    transform: translateX(0%);
  }
  100% {
    transform-origin: 0 0;
    transform: translateX(-100%);
  }
}
@keyframes slideLeft {
  0% {
    transform-origin: 0 0;
    transform: translateX(0%);
  }
  100% {
    transform-origin: 0 0;
    transform: translateX(-100%);
  }
}
.slideLeftReturn {
  -webkit-animation-name: slideLeftReturn;
  animation-name: slideLeftReturn;
}

@-webkit-keyframes slideLeftReturn {
  0% {
    transform-origin: 0 0;
    transform: translateX(-100%);
  }
  100% {
    transform-origin: 0 0;
    transform: translateX(0%);
  }
}
@keyframes slideLeftReturn {
  0% {
    transform-origin: 0 0;
    transform: translateX(-100%);
  }
  100% {
    transform-origin: 0 0;
    transform: translateX(0%);
  }
}
.slideRight {
  -webkit-animation-name: slideRight;
  animation-name: slideRight;
}

@-webkit-keyframes slideRight {
  0% {
    transform-origin: 0 0;
    transform: translateX(0%);
  }
  100% {
    transform-origin: 0 0;
    transform: translateX(100%);
  }
}
@keyframes slideRight {
  0% {
    transform-origin: 0 0;
    transform: translateX(0%);
  }
  100% {
    transform-origin: 0 0;
    transform: translateX(100%);
  }
}
.slideRightReturn {
  -webkit-animation-name: slideRightReturn;
  animation-name: slideRightReturn;
}

@-webkit-keyframes slideRightReturn {
  0% {
    transform-origin: 0 0;
    transform: translateX(100%);
  }
  100% {
    transform-origin: 0 0;
    transform: translateX(0%);
  }
}
@keyframes slideRightReturn {
  0% {
    transform-origin: 0 0;
    transform: translateX(100%);
  }
  100% {
    transform-origin: 0 0;
    transform: translateX(0%);
  }
}
.slideUp {
  -webkit-animation-name: slideUp;
  animation-name: slideUp;
}

@-webkit-keyframes slideUp {
  0% {
    transform-origin: 0 0;
    transform: translateY(0%);
  }
  100% {
    transform-origin: 0 0;
    transform: translateY(-100%);
  }
}
@keyframes slideUp {
  0% {
    transform-origin: 0 0;
    transform: translateY(0%);
  }
  100% {
    transform-origin: 0 0;
    transform: translateY(-100%);
  }
}
.slideUpReturn {
  -webkit-animation-name: slideUpReturn;
  animation-name: slideUpReturn;
}

@-webkit-keyframes slideUpReturn {
  0% {
    transform-origin: 0 0;
    transform: translateY(-100%);
  }
  100% {
    transform-origin: 0 0;
    transform: translateY(0%);
  }
}
@keyframes slideUpReturn {
  0% {
    transform-origin: 0 0;
    transform: translateY(-100%);
  }
  100% {
    transform-origin: 0 0;
    transform: translateY(0%);
  }
}
.openDownLeft {
  -webkit-animation-name: openDownLeft;
  animation-name: openDownLeft;
}

@-webkit-keyframes openDownLeft {
  0% {
    transform-origin: bottom left;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  100% {
    transform-origin: bottom left;
    transform: rotate(-110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
}
@keyframes openDownLeft {
  0% {
    transform-origin: bottom left;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  100% {
    transform-origin: bottom left;
    transform: rotate(-110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
}
.openDownLeftReturn {
  -webkit-animation-name: openDownLeftReturn;
  animation-name: openDownLeftReturn;
}

@-webkit-keyframes openDownLeftReturn {
  0% {
    transform-origin: bottom left;
    transform: rotate(-110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
  100% {
    transform-origin: bottom left;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}
@keyframes openDownLeftReturn {
  0% {
    transform-origin: bottom left;
    transform: rotate(-110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
  100% {
    transform-origin: bottom left;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}
.openDownRight {
  -webkit-animation-name: openDownRight;
  animation-name: openDownRight;
}

@-webkit-keyframes openDownRight {
  0% {
    transform-origin: bottom right;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  100% {
    transform-origin: bottom right;
    transform: rotate(110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
}
@keyframes openDownRight {
  0% {
    transform-origin: bottom right;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  100% {
    transform-origin: bottom right;
    transform: rotate(110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
}
.openDownRightReturn {
  -webkit-animation-name: openDownRightReturn;
  animation-name: openDownRightReturn;
}

@-webkit-keyframes openDownRightReturn {
  0% {
    transform-origin: bottom right;
    transform: rotate(110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
  100% {
    transform-origin: bottom right;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}
@keyframes openDownRightReturn {
  0% {
    transform-origin: bottom right;
    transform: rotate(110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
  100% {
    transform-origin: bottom right;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}
.openUpLeft {
  -webkit-animation-name: openUpLeft;
  animation-name: openUpLeft;
}

@-webkit-keyframes openUpLeft {
  0% {
    transform-origin: top left;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  100% {
    transform-origin: top left;
    transform: rotate(110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
}
@keyframes openUpLeft {
  0% {
    transform-origin: top left;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  100% {
    transform-origin: top left;
    transform: rotate(110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
}
.openUpLeftReturn {
  -webkit-animation-name: openUpLeftReturn;
  animation-name: openUpLeftReturn;
}

@-webkit-keyframes openUpLeftReturn {
  0% {
    transform-origin: top left;
    transform: rotate(110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
  100% {
    transform-origin: top left;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}
@keyframes openUpLeftReturn {
  0% {
    transform-origin: top left;
    transform: rotate(110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
  100% {
    transform-origin: top left;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}
.openUpRight {
  -webkit-animation-name: openUpRight;
  animation-name: openUpRight;
}

@-webkit-keyframes openUpRight {
  0% {
    transform-origin: top right;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  100% {
    transform-origin: top right;
    transform: rotate(-110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
}
@keyframes openUpRight {
  0% {
    transform-origin: top right;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  100% {
    transform-origin: top right;
    transform: rotate(-110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
}
.openUpRightReturn {
  -webkit-animation-name: openUpRightReturn;
  animation-name: openUpRightReturn;
}

@-webkit-keyframes openUpRightReturn {
  0% {
    transform-origin: top right;
    transform: rotate(-110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
  100% {
    transform-origin: top right;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}
@keyframes openUpRightReturn {
  0% {
    transform-origin: top right;
    transform: rotate(-110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
  100% {
    transform-origin: top right;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}
.openDownLeftOut {
  -webkit-animation-name: openDownLeftOut;
  animation-name: openDownLeftOut;
}

@-webkit-keyframes openDownLeftOut {
  0% {
    opacity: 1;
    transform-origin: bottom left;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  100% {
    opacity: 0;
    transform-origin: bottom left;
    transform: rotate(-110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
}
@keyframes openDownLeftOut {
  0% {
    opacity: 1;
    transform-origin: bottom left;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  100% {
    opacity: 0;
    transform-origin: bottom left;
    transform: rotate(-110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
}
.openDownRightOut {
  -webkit-animation-name: openDownRightOut;
  animation-name: openDownRightOut;
}

@-webkit-keyframes openDownRightOut {
  0% {
    opacity: 1;
    transform-origin: bottom right;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  100% {
    opacity: 0;
    transform-origin: bottom right;
    transform: rotate(110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
}
@keyframes openDownRightOut {
  0% {
    opacity: 1;
    transform-origin: bottom right;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  100% {
    opacity: 0;
    transform-origin: bottom right;
    transform: rotate(110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
}
.openUpLeftOut {
  -webkit-animation-name: openUpLeftOut;
  animation-name: openUpLeftOut;
}

@-webkit-keyframes openUpLeftOut {
  0% {
    opacity: 1;
    transform-origin: top left;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  100% {
    opacity: 0;
    transform-origin: top left;
    transform: rotate(110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
}
@keyframes openUpLeftOut {
  0% {
    opacity: 1;
    transform-origin: top left;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  100% {
    opacity: 0;
    transform-origin: top left;
    transform: rotate(110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
}
.openUpRightOut {
  -webkit-animation-name: openUpRightOut;
  animation-name: openUpRightOut;
}

@-webkit-keyframes openUpRightOut {
  0% {
    opacity: 1;
    transform-origin: top right;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  100% {
    opacity: 0;
    transform-origin: top right;
    transform: rotate(-110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
}
@keyframes openUpRightOut {
  0% {
    opacity: 1;
    transform-origin: top right;
    transform: rotate(0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  100% {
    opacity: 0;
    transform-origin: top right;
    transform: rotate(-110deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
}
.tinDownIn {
  -webkit-animation-name: tinDownIn;
  animation-name: tinDownIn;
}

@-webkit-keyframes tinDownIn {
  0% {
    opacity: 0;
    transform: scale(1, 1) translateY(900%);
  }
  50%, 70%, 90% {
    opacity: 1;
    transform: scale(1.1, 1.1) translateY(0);
  }
  60%, 80%, 100% {
    opacity: 1;
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes tinDownIn {
  0% {
    opacity: 0;
    transform: scale(1, 1) translateY(900%);
  }
  50%, 70%, 90% {
    opacity: 1;
    transform: scale(1.1, 1.1) translateY(0);
  }
  60%, 80%, 100% {
    opacity: 1;
    transform: scale(1, 1) translateY(0);
  }
}
.tinDownOut {
  -webkit-animation-name: tinDownOut;
  animation-name: tinDownOut;
}

@-webkit-keyframes tinDownOut {
  0%, 20%, 40%, 50% {
    opacity: 1;
    transform: scale(1, 1) translateY(0);
  }
  10%, 30% {
    opacity: 1;
    transform: scale(1.1, 1.1) translateY(0);
  }
  100% {
    opacity: 0;
    transform: scale(1, 1) translateY(900%);
  }
}
@keyframes tinDownOut {
  0%, 20%, 40%, 50% {
    opacity: 1;
    transform: scale(1, 1) translateY(0);
  }
  10%, 30% {
    opacity: 1;
    transform: scale(1.1, 1.1) translateY(0);
  }
  100% {
    opacity: 0;
    transform: scale(1, 1) translateY(900%);
  }
}
.tinLeftIn {
  -webkit-animation-name: tinLeftIn;
  animation-name: tinLeftIn;
}

@-webkit-keyframes tinLeftIn {
  0% {
    opacity: 0;
    transform: scale(1, 1) translateX(-900%);
  }
  50%, 70%, 90% {
    opacity: 1;
    transform: scale(1.1, 1.1) translateX(0);
  }
  60%, 80%, 100% {
    opacity: 1;
    transform: scale(1, 1) translateX(0);
  }
}
@keyframes tinLeftIn {
  0% {
    opacity: 0;
    transform: scale(1, 1) translateX(-900%);
  }
  50%, 70%, 90% {
    opacity: 1;
    transform: scale(1.1, 1.1) translateX(0);
  }
  60%, 80%, 100% {
    opacity: 1;
    transform: scale(1, 1) translateX(0);
  }
}
.tinLeftOut {
  -webkit-animation-name: tinLeftOut;
  animation-name: tinLeftOut;
}

@-webkit-keyframes tinLeftOut {
  0%, 20%, 40%, 50% {
    opacity: 1;
    transform: scale(1, 1) translateX(0);
  }
  10%, 30% {
    opacity: 1;
    transform: scale(1.1, 1.1) translateX(0);
  }
  100% {
    opacity: 0;
    transform: scale(1, 1) translateX(-900%);
  }
}
@keyframes tinLeftOut {
  0%, 20%, 40%, 50% {
    opacity: 1;
    transform: scale(1, 1) translateX(0);
  }
  10%, 30% {
    opacity: 1;
    transform: scale(1.1, 1.1) translateX(0);
  }
  100% {
    opacity: 0;
    transform: scale(1, 1) translateX(-900%);
  }
}
.tinRightIn {
  -webkit-animation-name: tinRightIn;
  animation-name: tinRightIn;
}

@-webkit-keyframes tinRightIn {
  0% {
    opacity: 0;
    transform: scale(1, 1) translateX(900%);
  }
  50%, 70%, 90% {
    opacity: 1;
    transform: scale(1.1, 1.1) translateX(0);
  }
  60%, 80%, 100% {
    opacity: 1;
    transform: scale(1, 1) translateX(0);
  }
}
@keyframes tinRightIn {
  0% {
    opacity: 0;
    transform: scale(1, 1) translateX(900%);
  }
  50%, 70%, 90% {
    opacity: 1;
    transform: scale(1.1, 1.1) translateX(0);
  }
  60%, 80%, 100% {
    opacity: 1;
    transform: scale(1, 1) translateX(0);
  }
}
.tinRightOut {
  -webkit-animation-name: tinRightOut;
  animation-name: tinRightOut;
}

@-webkit-keyframes tinRightOut {
  0%, 20%, 40%, 50% {
    opacity: 1;
    transform: scale(1, 1) translateX(0);
  }
  10%, 30% {
    opacity: 1;
    transform: scale(1.1, 1.1) translateX(0);
  }
  100% {
    opacity: 0;
    transform: scale(1, 1) translateX(900%);
  }
}
@keyframes tinRightOut {
  0%, 20%, 40%, 50% {
    opacity: 1;
    transform: scale(1, 1) translateX(0);
  }
  10%, 30% {
    opacity: 1;
    transform: scale(1.1, 1.1) translateX(0);
  }
  100% {
    opacity: 0;
    transform: scale(1, 1) translateX(900%);
  }
}
.tinUpIn {
  -webkit-animation-name: tinUpIn;
  animation-name: tinUpIn;
}

@-webkit-keyframes tinUpIn {
  0% {
    opacity: 0;
    transform: scale(1, 1) translateY(-900%);
  }
  50%, 70%, 90% {
    opacity: 1;
    transform: scale(1.1, 1.1) translateY(0);
  }
  60%, 80%, 100% {
    opacity: 1;
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes tinUpIn {
  0% {
    opacity: 0;
    transform: scale(1, 1) translateY(-900%);
  }
  50%, 70%, 90% {
    opacity: 1;
    transform: scale(1.1, 1.1) translateY(0);
  }
  60%, 80%, 100% {
    opacity: 1;
    transform: scale(1, 1) translateY(0);
  }
}
.tinUpOut {
  -webkit-animation-name: tinUpOut;
  animation-name: tinUpOut;
}

@-webkit-keyframes tinUpOut {
  0%, 20%, 40%, 50% {
    opacity: 1;
    transform: scale(1, 1) translateY(0);
  }
  10%, 30% {
    opacity: 1;
    transform: scale(1.1, 1.1) translateY(0);
  }
  100% {
    opacity: 0;
    transform: scale(1, 1) translateY(-900%);
  }
}
@keyframes tinUpOut {
  0%, 20%, 40%, 50% {
    opacity: 1;
    transform: scale(1, 1) translateY(0);
  }
  10%, 30% {
    opacity: 1;
    transform: scale(1.1, 1.1) translateY(0);
  }
  100% {
    opacity: 0;
    transform: scale(1, 1) translateY(-900%);
  }
}
.magictime {
  -webkit-animation-duration: 1s;
          animation-duration: 1s;
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (print), (prefers-reduced-motion) {
  .magictime {
    -webkit-animation: unset !important;
            animation: unset !important;
    transition: none !important;
  }
}
/*# sourceMappingURL=magic.css.map */
`
