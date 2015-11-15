import 'styles/extensions.scss';
import nameToPseudo from './data';

import _ from 'lodash';

let senderNameElements = document.getElementsByClassName('sender_name');

const nameRegexp = RegExp('\\b(' + Object.keys(nameToPseudo).join('|') + ')\\b', 'g');
const pseudoRegexp = RegExp('\\b(' + Object.keys(nameToPseudo).map((key) => nameToPseudo[key]).join ('|') + ')\\b', 'g');

function getRealName(name) {
  return _.filter(Object.keys(nameToPseudo),
                  (key) => nameToPseudo[key] === name)[0];
}

function hookStuff() {
  for (let i = 0; senderNameElements[i]; i++) {
    const fullName = senderNameElements[i].innerHTML;
    const showPseudonym = function () {
      const leName = senderNameElements[i].innerHTML;

      senderNameElements[i].innerHTML = leName.replace(nameRegexp,
                                                       (_, word) =>
                                                       nameToPseudo[word]);
      senderNameElements[i].parentNode.parentNode.removeEventListener('mouseover',
                                                                      showPseudonym);
    };
    const showRealName = function () {
      const leName = senderNameElements[i].innerHTML;

      senderNameElements[i].innerHTML = leName.replace(pseudoRegexp,
                                                       (_, word) =>
                                                       getRealName(word));
      senderNameElements[i].parentNode.parentNode.removeEventListener('mouseout',
                                                                      showRealName);
 };

    senderNameElements[i].setAttribute("data-name", fullName);
    senderNameElements[i].parentNode.parentNode.parentNode.addEventListener("mouseover", showPseudonym);
    senderNameElements[i].parentNode.parentNode.parentNode.addEventListener("mouseout", showRealName);
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
    console.log(mutation.target);

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
