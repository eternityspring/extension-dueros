$(function () {
  console.log(1)
  console.log($('.debug-input').attr('placeholder'));
  let $input = $('.debug-input')
  let str = $input.attr('placeholder')
  let name = str.replace('输入“','').replace('”即可打开我的技能开始测试','')
  $input.val(name)
  $input[0].dispatchEvent(new Event('input',{bubbles: true }))
  let addBtn = $("<div class='addUseful'></div>").text("添加常用测试语");
  $('.dcsimitator-content').before(`
<div class="useful-tool">
  <div class="add-container">
    <input class="add-input" type="text">
    <div class='addUseful'>添加常用测试语</div>
  </div>
  <div class="useful-list">
    
  </div>
</div>
  `)
  // 获取记录列表
  function getUsefulArr(){
    let usefulString = localStorage.getItem('usefulWord') || '';
    if(usefulString == ''){
      return []
    }else{
      return usefulString.split(',')
    }
  }
  // 设置记录
  function addUsefulStr(val){
    let usefulArr = getUsefulArr()
    if(usefulArr.indexOf(val) == -1){
      usefulArr.push(val)
      localStorage.setItem('usefulWord',usefulArr)
    }else{
      console.log('已经存在')
    }
  }
  // 删除记录
  function removeUsefulStr(val){
    let usefulArr = getUsefulArr()
    let idx = val.indexOf(val)
    if(idx>-1){
      usefulArr.splice(idx, 1);
      localStorage.setItem('usefulWord',usefulArr)
    }
  }
  // 设置展示内容
  function setShowList(){
    let usefulArr = getUsefulArr()
    // 设置列表内容
    $listContent = $('.useful-list')
    $listContent.empty()
    usefulArr.forEach((item)=>{
      $listContent.append(`
        <div class="item"><span class="content">${item}</span><span class="close">&times;</span></div>
      `)
    })
  }
  // 点击添加记录
  $('.addUseful').click(function () {
    let addItem = $('.add-input').val()
    addUsefulStr(addItem)
    setShowList()
  })
  // 删除绑定
  $('.useful-list').on('click','.close',function (event) {
    let target = $(event.target);
    let removeItem = target.text();
    removeUsefulStr(removeItem)
    setShowList()
  })
  // 触发常用
  $('.useful-list').on('click','.content',function (event) {
    let target = $(event.target);
    $input.val(target.text())
    $input[0].dispatchEvent(new Event('input',{bubbles: true }))
  })
  // 默认调用展示
  setShowList()
})



