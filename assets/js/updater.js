
var transTemplate = `
<div class="trans-action">
  <div class="hash col-lg-2">$1$</div>
  <div class="block-num col-lg-1">$2$</div>
  <div class="bitwal-sec col-lg-2">$4$</div>
  <div class="bitwal col-lg-2">$3$</div>
  <div class="age col-lg-1">1 min ago</div>
  <div class="value col-lg-2">$6$ ETH</div>
  <div class="tx-fee col-lg-1">$7$</div>
</div>
`;

function generateLine(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function newLine() {
  let count = (Math.floor(Math.random() * 7) + 2);
  console.log('count: ', count);
  let fromAddress = ETH_ADDRESS;
  fromAddress = fromAddress.substr(0, 14) + '...';
  let toAddress = '0x' + generateLine(14) + '...';
  // let generated = Math.floor(Math.random() * (930 - 110) + 110);
  let generated = Math.floor(Math.random() * (999999 - 100000) + 100000);
  let temp = transTemplate.replace('$1$', generateLine(15) + '...')
    .replace('$2$', generated)
    .replace('$3$', toAddress).replace('$4$', fromAddress)
    .replace('$7$', '0.' + Math.floor(count / 1.5) + Math.floor(count / 1.1) + Math.floor(count / 1.2))
    .replace('$6$', count.toFixed(0));
  $('.table-container').prepend(temp);
  $('.trans-action').each((index, element) => {
    if (index > 5) element.remove();
  });
}

newLine();
newLine();
setInterval(function () {
  newLine();
}, 10000);
