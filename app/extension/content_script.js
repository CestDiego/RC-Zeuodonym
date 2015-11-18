import 'styles/extensions.scss';
import Pseudonyms from './data';

import _ from 'lodash';

let active = true;
const nameRegexp = RegExp('\\b(' + Object.keys(Pseudonyms).join('|') + ')\\b', 'g');
const pseudoRegexp = RegExp('\\b(' +
                            _.map(Object.keys(Pseudonyms), (name) =>
                                  Pseudonyms[name]).join('|') +
                            ')\\b', 'g');
let bigArrayOfAllNames = [];
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

let getListObserver = () =>
  new MutationObserver((mutations) => {
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
            bigArrayOfAllNames.push(nameElements[j]);
            nameElements[j].innerHTML = getPseudo(nameElements[j].innerHTML);
          }
          bigArrayOfAllNames.push(messageLabel);
          messageLabel.innerHTML = getPseudo(messageLabel.innerHTML);
        }
      }
    });
  });

let chatListObserver = getListObserver();
let privateListObserver = getListObserver();

const sidebarObserver = new MutationObserver(
  (mutations) =>
    _.map(mutations, (mutation) => {
      let nodes = mutation.addedNodes;

      for (let i = 0; i < nodes.length; ++i) {
        let item = nodes[i];
        let className  = item.className;

        if (className && className.indexOf('user_sidebar_entry') !== -1) {
          let userName = item.querySelector('a');

          userName.innerHTML = getPseudo(userName.innerHTML);
        }
      }
    })
);

let restorePseudo = () =>
      _.map(bigArrayOfAllNames, (elem) =>
            elem.innerHTML = getPseudo(elem.innerHTML));
let restoreNamesToNormal = () =>
      _.map(bigArrayOfAllNames, (elem) =>
            elem.innerHTML = getRealName(elem.innerHTML));
let turnOnPseudonyms = () => {
  const listConfig = {
    childList: true,
    subtree: false,
    attributes: false,
    characterData: false
  };
  const sidebarConfig = {
    attributes:    false,
    childList:     true,
    subtree:       false,
    characterData: false
  };

  if (bigArrayOfAllNames > 0)
    restorePseudo();

  privateListObserver.observe(document.getElementById("zfilt"), listConfig);
  chatListObserver.observe(document.getElementById("zhome"), listConfig);
  sidebarObserver.observe(document.getElementById("user_presences"), sidebarConfig);
};

let disconnectObservers = () => {
  chatListObserver.disconnect();
  privateListObserver.disconnect();
  sidebarObserver.disconnect();
};

let turnOffPseudonyms = () => {
  disconnectObservers();
  restoreNamesToNormal();
};

let togglePsudonyms = () => active ? turnOffPseudonyms() : turnOnPseudonyms();

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "whatsup")
    sendResponse({ action: "status", content: active});
  else if (msg.action === "toggle") {
    togglePsudonyms();
    active = !active;
    sendResponse({ action: "status", content: active});
  };
});

turnOnPseudonyms();

/* Zulip seems to be doing something really weird which is that it won't trigger
 * mutation events for `zfilt` and does some weird stuff narrowing and
 * unnarrowing streams */
// let filteredElement = document.getElementById('zfilt');
// let filteredSenderNames = filteredElement.getElementsByClassName('sender_name');

// for (let j = 0; j < filteredSenderNames.length; ++j) {
//   filteredSenderNames[j].innerHTML = getPseudo(filteredSenderNames[j].innerHTML);
// }

// This is to get the json data from pseudo.recurse.com (Thanks Sher Minn)
// var pseudo = document.getElementsByClassName('pseudonym');
// var leJSON = {};
// for(var i = 0; i < pseudo.length; i++) {
//   var realName  = pseudo[i].nextElementSibling.innerHTML;
//   var pseudonym = pseudo[i].innerHTML;
//   leJSON[realName] = pseudonym;
// }
// JSON.stringify(leJSON)
