import 'styles/extensions.scss';
import nameToPseudo from './data';


let senderNameElements = document.getElementsByClassName('sender_name');

const regexp = RegExp('\\b(' + Object.keys (nameToPseudo).join ('|') + ')\\b', 'g');

function hookStuff() {
  for (let i = 0; senderNameElements[i]; i++) {
    const fullName = senderNameElements[i].innerHTML;
    const temp = senderNameElements[i].innerHTML;
    const showPseudonym = function () {
      senderNameElements[i].innerHTML = fullName.replace(regexp,
                                                         (_, word) =>
                                                         nameToPseudo[word]);
    };
    const showRealName = function () {
      senderNameElements[i].innerHTML = temp;
    };

    senderNameElements[i].setAttribute("data-name", fullName);
    senderNameElements[i].parentNode.parentNode.addEventListener("mouseover", showPseudonym);
    senderNameElements[i].parentNode.parentNode.addEventListener("mouseout", showRealName);
  }
}

hookStuff();
window.setInterval(hookStuff, 1000);

Object.keys(nameToPseudo).map((name) => {
  if (name !== "None") {
    const cssQuery        = ''.concat('a[data-name*="', name, '"]');
    const sideListElement = document.querySelector(cssQuery);

    if (sideListElement) {
      sideListElement.innerHTML = nameToPseudo[name];
    }
  }
});


const observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    console.log(mutation.type);
    console.log(mutation.target)

    // if (mutation.attributeName === "class") {
    //   console.log("MutationObserver class changed to", newVal);
    // } else if (mutation.attributeName === "id") {
    //   console.log("MutationObserver id changed to", newVal);
    // }
  });
});

// configuration of the observer:
const config = { attributes: true, childList: true, characterData: true };

// pass in the target node, as well as the observer options
observer.observe(document, config);

// This is to get the json data from pseudo.recurse.com (Thanks Sher Minn)
// var pseudo = document.getElementsByClassName('pseudonym');
// var leJSON = {};
// for(var i = 0; i < pseudo.length; i++) {
//   var realName  = pseudo[i].nextElementSibling.innerHTML;
//   var pseudonym = pseudo[i].innerHTML;
//   leJSON[realName] = pseudonym;
// }
