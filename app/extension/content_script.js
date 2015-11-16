import 'styles/extensions.scss';
import Pseudonyms from './data';

import _ from 'lodash';

const nameRegexp = RegExp('\\b(' + Object.keys(Pseudonyms).join('|') + ')\\b', 'g');
const pseudoRegexp = RegExp('\\b(' + Object.keys(Pseudonyms).map((name) =>
                                                                 Pseudonyms[name]).join('|') + ')\\b', 'g');

let getRealName = (pseudo) => pseudo.replace(
  pseudoRegexp,
  (match, pseudonym) => _.filter(Object.keys(Pseudonyms),
                            (name) => Pseudonyms[name] === pseudonym)[0]
);

let getPseudo = (fullName) => {
  let pseudo = fullName.replace(nameRegexp, (match, fullName) => Pseudonyms[fullName]);

  if (pseudo && pseudo !== "None") {
    return pseudo;
  }
  return fullName;
};

let obs = new MutationObserver((mutations) => {
  mutations.map((mutation) => {
    // console.log(mutation);
    let nodes = mutation.addedNodes;

    for (let i = 0; i < nodes.length; ++i) {
      let item = nodes[i];
      let id = item.id;

      if (id && id.indexOf('message_group') !== -1) {
        let nameElements = item.getElementsByClassName('sender_name');
        let messageLabel = item.querySelector('.message_label_clickable');

        for (let j = 0; j < nameElements.length; ++j) {
          nameElements[j].innerHTML = getPseudo(nameElements[j].innerHTML);
        }
        messageLabel.innerHTML = getPseudo(messageLabel.innerHTML);
      }
    }
  });
});

// obs["obs"].observe(document.getElementById("zhome"),
//             {
//               childList: true,
//               subtree: false,
//               attributes: false,
//               characterData: false
//             });

obs["obs"].observe(document.getElementById("zhome"),
                   {
                     childList: true,
                     subtree: false,
                     attributes: false,
                     characterData: false
                   });

let sidebarChange = () => {
  Object.keys(Pseudonyms).map((name) => {
    if (name !== "None") {
      const cssQuery        = ''.concat('a[data-name*="', name, '"]');
      const sideListElement = document.querySelector(cssQuery);

      if (sideListElement) {
        sideListElement.innerHTML = Pseudonyms[name];
      }
    }
  });

  const observer = new MutationObserver(
    (mutations) =>
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          console.log(mutation);
        }

        // if (mutation.attributeName === "class") {
        //   console.log("MutationObserver class changed to", newVal);
        // } else if (mutation.attributeName === "id") {
        //   console.log("MutationObserver id changed to", newVal);
        // }
      })
  );

  // configuration of the observer:
  const config = { attributes: true, childList: true, subtree: true, characterData: true };

  // pass in the target node, as well as the observer options
  observer.observe(document.getElementById("zhome"), config);
};

// This is to get the json data from pseudo.recurse.com (Thanks Sher Minn)
// var pseudo = document.getElementsByClassName('pseudonym');
// var leJSON = {};
// for(var i = 0; i < pseudo.length; i++) {
//   var realName  = pseudo[i].nextElementSibling.innerHTML;
//   var pseudonym = pseudo[i].innerHTML;
//   leJSON[realName] = pseudonym;
// }
// JSON.stringify(leJSON)
