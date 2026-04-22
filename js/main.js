$(document).ready(function(){
  // 1. 產生按鈕
  const themeBtnHtml = `<div class="theme-toggle" id="themeBtn"><i class="fa-solid fa-circle-half-stroke"></i> 模式切換</div>`;
  const backToIndex = `<a href="../index.html" class="back-link">← 返回首頁工具列表</a>`
  $('body').prepend(themeBtnHtml);
  $('.card:last-of-type').after(backToIndex);

  // 2. 初始化主題
  const html = document.documentElement;
  if (localStorage.getItem('theme') === 'bright') {
    $(html).attr('data-theme', 'bright');
  }

  // 3. 綁定事件 (直接選取新產生的 ID)
  $('#themeBtn').on('click', function() {
    const isBright = $(html).attr('data-theme') === 'bright';
    if (isBright) {
      $(html).removeAttr('data-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      $(html).attr('data-theme', 'bright');
      localStorage.setItem('theme', 'bright');
    }
  });
});