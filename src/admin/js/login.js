// 登录逻辑
$('#login_form').submit(function (e) {
  // 阻止表单默认提交
  e.preventDefault();
  // jq方法自动获得表单数据
  let parms = $('#login_form').serialize();
  var index;
  $.ajax({
    url: 'http://localhost:8080/api/v1/admin/user/login',
    type: 'POST',
    data: parms,
    beforeSend: function () {
      // 弹出加载层
      index = layer.load()
    },
    complete: function () {
      layer.close(index)
    },
    success: function (resData) {
      if (resData.code != 200) {
        alert(resData.msg);
        return;
      }
      // 将token保存在localStorage中
      localStorage.setItem('bignews_token', resData.token);
      // 跳转到首页
      window.location = './index.html'
    }
  })
})