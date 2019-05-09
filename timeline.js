window.addEventListener("DOMContentLoaded", pageLoaded);
window.addEventListener("DOMContentLoaded", drive);
/* window.addEventListener("DOMContentLoaded", loadSnap);
function loadSnap() {
  console.log("SNAP");
  // CREATE OUR SNAP OBJECT
  const snap = Snap("svg");

  // REMEMBER THE CAR
  //car = document.querySelector("#car");
  train = snap.select("#train");
  // REMEMBER THE CURVE
  //curve = document.querySelector("#theCurve");
  curve = snap.select("#curve");

  runAnimation();

  // TODO: Start the animation
} */
//KLON

let lineTemplate = document.getElementById("station");

function pageLoaded() {
  let klon = lineTemplate.cloneNode(true);
  let klon2 = lineTemplate.cloneNode(true);
  let klon3 = lineTemplate.cloneNode(true);
  let klon4 = lineTemplate.cloneNode(true);
  let klon5 = lineTemplate.cloneNode(true);
  let klon6 = lineTemplate.cloneNode(true);
  let klon7 = lineTemplate.cloneNode(true);
  let klon8 = lineTemplate.cloneNode(true);
  let klon9 = lineTemplate.cloneNode(true);
  let klon10 = lineTemplate.cloneNode(true);
  let klon11 = lineTemplate.cloneNode(true);

  klon.querySelector("text").textContent = "VIGERSLEV ALLÉ";
  klon2.querySelector("text").textContent = "DANSHØJ";
  klon3.querySelector("text").textContent = "ÅLHOLM";
  klon4.querySelector("text").textContent = "KB HALLEN";
  klon5.querySelector("text").textContent = "FLINTHOLM";
  klon6.querySelector("text").textContent = "GRØNDAL";
  klon7.querySelector("text").textContent = "FUGLEBAKKEN";
  klon8.querySelector("text").textContent = "NØRREBRO";
  klon9.querySelector("text").textContent = "BISPEBJERG";
  klon10.querySelector("text").textContent = "RYPARKEN";
  klon11.querySelector("text").textContent = "HELLERUP";

  klon.style.transform = "translate(420px)";
  klon2.style.transform = "translate(820px)";
  klon3.style.transform = "translate(1220px)";
  klon4.style.transform = "translate(1620px)";
  klon5.style.transform = "translate(2020px)";
  klon6.style.transform = "translate(2420px)";
  klon7.style.transform = "translate(2820px)";
  klon8.style.transform = "translate(3220px)";
  klon9.style.transform = "translate(3620px)";
  klon10.style.transform = "translate(4020px)";
  klon11.style.transform = "translate(4420px)";

  lineTemplate.appendChild(klon);
  lineTemplate.appendChild(klon2);
  lineTemplate.appendChild(klon3);
  lineTemplate.appendChild(klon4);
  lineTemplate.appendChild(klon5);
  lineTemplate.appendChild(klon6);
  lineTemplate.appendChild(klon7);
  lineTemplate.appendChild(klon8);
  lineTemplate.appendChild(klon9);
  lineTemplate.appendChild(klon10);
  lineTemplate.appendChild(klon11);

  //ÅBEN KNAP

  klon.addEventListener("click", () => {
    console.log("kilk");
    document.querySelector(".vigers").style.display = "block";
  });
  klon2.addEventListener("click", () => {
    console.log("kilk");
    document.querySelector(".dans").style.display = "block";
  });
  klon3.addEventListener("click", () => {
    console.log("kilk");
    document.querySelector(".aalholm").style.display = "block";
  });
  klon4.addEventListener("click", () => {
    console.log("kilk");
    document.querySelector(".kb").style.display = "block";
  });
  klon5.addEventListener("click", () => {
    console.log("kilk");
    document.querySelector(".flint").style.display = "block";
  });
  klon6.addEventListener("click", () => {
    console.log("kilk");
    document.querySelector(".groen").style.display = "block";
  });
  klon7.addEventListener("click", () => {
    console.log("kilk");
    document.querySelector(".fugl").style.display = "block";
  });
  klon8.addEventListener("click", () => {
    console.log("kilk");
    document.querySelector(".nbro").style.display = "block";
  });
  klon9.addEventListener("click", () => {
    console.log("kilk");
    document.querySelector(".bisp").style.display = "block";
  });
  klon10.addEventListener("click", () => {
    console.log("kilk");
    document.querySelector(".ryparken").style.display = "block";
  });
  klon11.addEventListener("click", () => {
    console.log("kilk");
    document.querySelector(".hellerup").style.display = "block";
  });
}

// LUK KNAP

document.querySelector("text").addEventListener("click", () => {
  console.log("kilk");
  document.querySelector(".nyElle").style.display = "block";
});

document.querySelector(".luk").addEventListener("click", () => {
  console.log("kilk");
  document.querySelector(".nyElle").style.display = "none";
});
document.querySelector(".luk2").addEventListener("click", () => {
  console.log("kilk");
  document.querySelector(".vigers").style.display = "none";
});
document.querySelector(".luk3").addEventListener("click", () => {
  console.log("kilk");
  document.querySelector(".dans").style.display = "none";
});
document.querySelector(".luk4").addEventListener("click", () => {
  console.log("kilk");
  document.querySelector(".aalholm").style.display = "none";
});
document.querySelector(".luk5").addEventListener("click", () => {
  console.log("kilk");
  document.querySelector(".kb").style.display = "none";
});
document.querySelector(".luk6").addEventListener("click", () => {
  console.log("kilk");
  document.querySelector(".flint").style.display = "none";
});
document.querySelector(".luk7").addEventListener("click", () => {
  console.log("kilk");
  document.querySelector(".groen").style.display = "none";
});
document.querySelector(".luk8").addEventListener("click", () => {
  console.log("kilk");
  document.querySelector(".fugl").style.display = "none";
});
document.querySelector(".luk9").addEventListener("click", () => {
  console.log("kilk");
  document.querySelector(".nbro").style.display = "none";
});
document.querySelector(".luk10").addEventListener("click", () => {
  console.log("kilk");
  document.querySelector(".bisp").style.display = "none";
});
document.querySelector(".luk11").addEventListener("click", () => {
  console.log("kilk");
  document.querySelector(".ryparken").style.display = "none";
});
document.querySelector(".luk12").addEventListener("click", () => {
  console.log("kilk");
  document.querySelector(".hellerup").style.display = "none";
});

/* let train = null;
let curve = null;
let currentPosition = 0;

const speed = 2;

function runAnimation() {
  console.log("animate");

  // MAKE SURE THE ANIMATION LOOPS (EVERY TIME)
  if (currentPosition < curve.getTotalLength()) {
    requestAnimationFrame(runAnimation);
  }
  // TODO: Build animation ...

  // CHANGE THE X POSITION
  currentPosition += speed;

  const pos = curve.getPointAtLength(currentPosition);

  pos.x = pos.x - train.getBBox().width / 2;
  pos.y = pos.y - train.getBBox().height / 2;

  //MOVE THE CAR TO NEW POSITION

  //train.style.transform = `translate( ${pos.x}px, ${pos.y}px)`;
  train.node.style.transform = `translate( ${pos.x}px, ${
    pos.y
  }px) rotate(${pos.alpha + 180}deg)`;
} */

// KEYFRAMES
function drive() {
  document.querySelector("#train").classList.add("station1");
  document.querySelector(".luk").addEventListener("click", () => {
    newClass1();
  });
  document.querySelector(".luk2").addEventListener("click", () => {
    newClass2();
  });
  document.querySelector(".luk3").addEventListener("click", () => {
    newClass3();
  });
  document.querySelector(".luk4").addEventListener("click", () => {
    newClass4();
  });
  document.querySelector(".luk5").addEventListener("click", () => {
    newClass5();
  });
  document.querySelector(".luk6").addEventListener("click", () => {
    newClass6();
  });
  document.querySelector(".luk7").addEventListener("click", () => {
    newClass7();
  });
  document.querySelector(".luk8").addEventListener("click", () => {
    newClass8();
  });
  document.querySelector(".luk9").addEventListener("click", () => {
    newClass9();
  });
  document.querySelector(".luk10").addEventListener("click", () => {
    newClass10();
  });
  document.querySelector(".luk11").addEventListener("click", () => {
    newClass11();
  });
  document.querySelector(".luk12").addEventListener("click", () => {
    newClass12();
  });
}
function newClass1() {
  console.log("remove");
  document.querySelector("#train").classList.remove("station1");
  document.querySelector("#train").classList.add("station2");
}
function newClass2() {
  console.log("remove");
  document.querySelector("#train").classList.remove("station2");
  document.querySelector("#train").classList.add("station3");
}
function newClass3() {
  console.log("remove");
  document.querySelector("#train").classList.remove("station3");
  document.querySelector("#train").classList.add("station4");
}
function newClass4() {
  console.log("remove");
  document.querySelector("#train").classList.remove("station4");
  document.querySelector("#train").classList.add("station5");
}
function newClass5() {
  console.log("remove");
  document.querySelector("#train").classList.remove("station5");
  document.querySelector("#train").classList.add("station6");
}
function newClass6() {
  console.log("remove");
  document.querySelector("#train").classList.remove("station6");
  document.querySelector("#train").classList.add("station7");
}
function newClass7() {
  console.log("remove");
  document.querySelector("#train").classList.remove("station7");
  document.querySelector("#train").classList.add("station8");
}
function newClass8() {
  console.log("remove");
  document.querySelector("#train").classList.remove("station8");
  document.querySelector("#train").classList.add("station9");
}
function newClass9() {
  console.log("remove");
  document.querySelector("#train").classList.remove("station9");
  document.querySelector("#train").classList.add("station10");
}
function newClass10() {
  console.log("remove");
  document.querySelector("#train").classList.remove("station10");
  document.querySelector("#train").classList.add("station11");
}
function newClass11() {
  console.log("remove");
  document.querySelector("#train").classList.remove("station11");
  document.querySelector("#train").classList.add("station12");
}
function newClass12() {
  console.log("remove");
  document.querySelector("#train").classList.remove("station12");
  document.querySelector("#train").classList.add("station13");
}
