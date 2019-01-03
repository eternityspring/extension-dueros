$(function () {
  console.log(1)
  console.log($('.debug-input').attr('placeholder'));
  let $input = $('.debug-input')
  let str = $input.attr('placeholder')
  let name = str.replace('输入“','').replace('”即可打开我的技能开始测试','')
  $input.val(name)
})



