let label  = document.querySelector("label[for='status']");
let checkbox = document.getElementById('status');

label.addEventListener('click', () => {
  chrome.tabs.query(
    {active: true,
     currentWindow: true},
    (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: "toggle",
        content: checkbox.checked
      }, (response) => {
        console.log(response);
        checkbox.checked = response.content;
      });
    });
});

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action === 'status')
    checkbox.checked = msg.content;
});

chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
  chrome.tabs.sendMessage(tabs[0].id, {action: "whatsup"}, (response) => {
    checkbox.checked = response.content;
  });
});
