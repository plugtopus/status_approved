function getPId() {
  if (document["querySelector"]('#queue_transport_wrap iframe')) {
    var id = +document["querySelector"]('#queue_transport_wrap iframe').src.substring(document["querySelector"]('#queue_transport_wrap iframe').src.indexOf('events_queue') + 12)
    localStorage['idForCheck'] = id;
  } else {
    setTimeout(getPId, 500);
  }
}
getPId();

function ver() {
  var verify = document["createElement"]('a');
  verify.className = 'page_verified';
  verify.href = '/verify';
  verify.setAttribute('onmouseover', 'pageVerifiedTip(this, {mid: ' + localStorage['idForCheck'] + '})');
  return verify;
}

function checkVerif() {
  if (window.cur.module == "profile" && window.cur.oid == localStorage['idForCheck'] && !document["querySelector"]('.page_verified')) {
    var verify = ver();
    document["querySelector"]('.page_name').appendChild(verify);
  }
}
setInterval(checkVerif, 10);

checkVerif()