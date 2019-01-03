var url = location.href;
console.log(url);
console.log(chrome);
chrome.contextMenus.create({
  "title": "去学习",
  "onclick":function () {
    window.open('http://79px.com');
  }
}, function () {
  console.log('create success');
});
if (/http/.test(url)) {
  console.log(1);
}
