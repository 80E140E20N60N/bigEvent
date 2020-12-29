// 前台接口不需要登录，所以不需要在请求头添加token,也不需要跳转到登录页面
// 定义接口前缀
let baseUrl = 'http://localhost:8080/api/v1';

function myAjax(url, type, data, callback) {
  // 判断数据是否是formData
  let isformData = data instanceof FormData;
  if (isformData) {
    formData_type_ajax(url, type, data, callback)
  } else {
    obj_type_ajax(url, type, data, callback)
  }
}

// 对象数据提交的Ajax方法
function obj_type_ajax(url, type, data, callback) {
  $.ajax({
    url: baseUrl + url,
    type: type,
    data: data,
    success: function (resData) {
      callback(resData);
    }
  })
}

// formData数据类型
function formData_type_ajax(url, type, data, callback) {
  $.ajax({
    url: baseUrl + url,
    type: type,
    data: data,
    contentType: false,
    processData: false,
    success: function (resData) {
      callback(resData);
    }
  })
}