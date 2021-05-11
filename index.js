document.querySelector("#tet").addEventListener("click", navAct);
document.querySelector(".bolitas").addEventListener("click", navActB);
document.addEventListener("click", porFuera);
document.querySelector("#btn-B").addEventListener("click", accionB);
document.querySelector("#usuarioI").addEventListener("keydown", enter);

const navL = document.querySelector(".caja-des");
const navB = document.querySelector(".segun-des");

function enter(e) {
  let usuarioIn = document.querySelector("#usuarioI").value;
  if (e.keyCode === 13) {
    location.href = `https://www.google.com.ar/search?q=${usuarioIn}&sxsrf=ALeKk03c7rPfHqUQeOTFuT2RoKYjhNTttA%3A1620419104649&source=hp&ei=IKKVYK7hJIO25OUPi7eTaA&iflsig=AINFCbYAAAAAYJWwMGZdP_pI7xtqlgYQBtCqZYuzooln&oq=aoeao&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAguEEMyBAguEEMyBAguEEMyBwgAEIcCEBQyAggAMgIIADICCAAyAggAMgIIADoFCAAQkQI6BAgAEEM6CAguEMcBEKMCOgcILhCHAhAUOgIILlCOA1iwBWD8BWgAcAB4AIAB9wGIAesEkgEFMC4yLjGYAQCgAQGqAQdnd3Mtd2l6&sclient=gws-wiz&ved=0ahUKEwiu8ffIs7jwAhUDG7kGHYvbBA0Q4dUDCAc&uact=5`;
    e.preventDefault();
  }
}

function accionB() {
  let usuarioIn = document.querySelector("#usuarioI").value;
  location.href = `https://www.google.com.ar/search?q=${usuarioIn}&sxsrf=ALeKk03c7rPfHqUQeOTFuT2RoKYjhNTttA%3A1620419104649&source=hp&ei=IKKVYK7hJIO25OUPi7eTaA&iflsig=AINFCbYAAAAAYJWwMGZdP_pI7xtqlgYQBtCqZYuzooln&oq=aoeao&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAguEEMyBAguEEMyBAguEEMyBwgAEIcCEBQyAggAMgIIADICCAAyAggAMgIIADoFCAAQkQI6BAgAEEM6CAguEMcBEKMCOgcILhCHAhAUOgIILlCOA1iwBWD8BWgAcAB4AIAB9wGIAesEkgEFMC4yLjGYAQCgAQGqAQdnd3Mtd2l6&sclient=gws-wiz&ved=0ahUKEwiu8ffIs7jwAhUDG7kGHYvbBA0Q4dUDCAc&uact=5`;
}

let cumpleL = true;
let cumpleB = true;
let z = 20;

function porFuera(e) {
  var clic = e.target;

  if (navL.style.display == "block" && clic != navL) {
    navL.style.display = "none";
  }
  if (navB.style.display == "grid" && clic != navB) {
    navB.style.display = "none";
  }
  cumpleL = true;
}

function navAct(e) {
  if (cumpleL == true) {
    navL.style.display = "block";
    cumpleL = false;
    z++;
    navL.style.zIndex = z;
    cumpleB = true;
  } else {
    navL.style.display = "none";
    cumpleL = true;
  }
  e.stopPropagation();
}

function navActB(e) {
  if (cumpleB == true) {
    navB.style.display = "grid";
    cumpleB = false;
    z++;
    navB.style.zIndex = z;
    cumpleL = true;
  } else {
    navB.style.display = "none";
    cumpleB = true;
  }
  e.stopPropagation();
}
