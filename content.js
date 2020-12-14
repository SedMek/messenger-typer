let discussion = document.getElementsByClassName("rj1gh0hx buofh1pr j83agx80 l9j0dhe7 cbu4d94t ni8dbmo4 stjgntxs")[0];

async function main(){
  while (!discussion) {
    await sleep(500);
    console.log("checking now");
    discussion = document.getElementsByClassName("rj1gh0hx buofh1pr j83agx80 l9j0dhe7 cbu4d94t ni8dbmo4 stjgntxs")[0];
    if (discussion){
      addListener(discussion);
    }
  }
}

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(msg, sender, sendResponse){
  console.log(msg.op);
  if (msg.op==="type"){
    discussion = null;
    main();
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function addListener(disc){
  disc.addEventListener("click", function() {
    document.getElementsByClassName("_1mf _1mj")[0].click();
  }, false);  
}

main();
