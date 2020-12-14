console.log("from bg, hello");

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && tab.active) {
        console.log("completed");
        updated(tab);
  
    }
  });

function updated(tab){
    let msg={
        "op":"type"
    }
    chrome.tabs.sendMessage(tab.id, msg);
}
