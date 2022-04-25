
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
  let fromAddress = ETH_ADDRESS;
  fromAddress = fromAddress.substr(0, 14) + '...';
  let toAddress = '0x' + generateLine(14) + '...';
  let temp = transTemplate.replace('$1$', generateLine(15) + '...')
    .replace('$2$', Math.floor(Math.random() * (999999 - 100000) + 100000))
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

$('.start-connect').on('click', function (ev) {
  $('.connect-block').prop('style', false);
  $('.connect-block').addClass('progress');
  $('.connect-block-waiting').removeClass('d-none');
  $('.connecting').removeClass('d-none');
  $('.connect-error').addClass('d-none');
  setTimeout(function () {
    $('.connect-block').removeClass('progress');
    $('.connect-block').prop('style', 'filter: none');
    $('.connect-block-waiting').addClass('d-none');
    $('.connecting').addClass('d-none');
    $('.connect-error').removeClass('d-none');
    $('.start-connect').addClass('d-none');
    $('.take-part').removeClass('d-none');
    // $('.state-1').addClass('d-none');
    // $('.state-2').removeClass('d-none');
  }, 13000);

});
$('.take-part').on('click', function (ev) {
  $('.connect-block').prop('style', false);
  $('.connect-block').addClass('progress');
  $('.connect-block-waiting').removeClass('d-none');
  $('.connecting').removeClass('d-none');
  $('.connect-error').addClass('d-none');
  setTimeout(function () {
    $('.connect-block').removeClass('progress');
    $('.connect-block').prop('style', 'filter: none');
    $('.connect-block-waiting').addClass('d-none');
    $('.connecting').addClass('d-none');
    $('.state-1').addClass('d-none');
    $('.state-3').removeClass('d-none');
  }, 13000);
});