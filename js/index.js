console.log("welcome")

// 初始化
$(function() {
  localStorage.searchEngine = "https://www.google.com/search?q="
});

// 点击切换搜索引擎
$('#logo-default').click(function () {
  if ($('#logo-default').val() != "baiduLogo") {
    console.log("baidu logo");
    $('#logo-default').css('-webkit-mask-image', 'url(' + window.baiduLogo + ')')
    $('#logo-default').css('background-image', 'url(' + window.baiduLogo + ')')
    $('#logo-default').css('background', '#eee')
    $('#logo-default').val("baiduLogo")
    localStorage.searchEngine = "https://www.baidu.com/s?wd="
  } else {
    console.log("google logo");
    $('#logo-default').css('background-image', 'url(' + window.googleLogo + ')')
    $('#logo-default').css('-webkit-mask-image', 'url(' + window.googleLogo + ')')
    $('#logo-default').css('background', '#eee')
    $('#logo-default').val("googleLogo")
    localStorage.searchEngine = "https://www.google.com/search?q="
  }
})

$("#input").keyup(function(e) {
  if (e.which == 13) {
    var searchEngine = localStorage.searchEngine;
    var keyWord = $("#input").val()
    window.open(searchEngine + keyWord);
  }
})
