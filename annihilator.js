chrome.browserAction.onClicked.addListener(tab => {
    chrome.tabs.sendMessage(tab.id, { type: 'NUKE' });
})
