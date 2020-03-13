(() => {
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.type == "NUKE") {
            try {
                document.querySelectorAll('video').forEach(v => v.remove());
            } catch (err) {
                console.error('Failed to nuke:' + err);
            }
        }
    });
})();