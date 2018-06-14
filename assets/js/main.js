
console.log("ewfweewfwefewewf")

window.onscroll = function() {
  growShrinkLogo()
};

const Logo = document.getElementById("logo");
const endOfDocumentTop = 0;
let size = 0;

const growShrinkLogo = () => {
  let scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  if (size == 0 && scroll > endOfDocumentTop) {
    Logo.className = 'small-logo';
    size = 1;
  } else if(size == 1 && scroll <= endOfDocumentTop){
    Logo.className = 'large-logo';
    size = 0;
  }
}
