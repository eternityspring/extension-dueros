
$(function () {
  console.log(1)

  $('body').append('<button class="get-msg" id="getMsg" title="获取当前窗口聊天记录">获取记录</button>')


  $('#getMsg').click(function () {
    console.log(1)
    let msg = $('.content').children('.js_message_bubble').eq(0).text().trim()
    alert(msg)
    $.post('http://test.sunlands/wchat.php',{
      data:msg,
    })
  })
})



