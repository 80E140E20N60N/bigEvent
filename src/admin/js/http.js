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
    // 负责请求头部信息
    headers: {
      // 登录接口获取的token通过Authorization发送给服务器
      'Authorization': localStorage.getItem('bignews_token')
    },
    success: function (resData) {
      // 未登录处理
      if (resData.code == 403) {
        window.parent.location = '../admin/login.html';
        return;
      }
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
    // 负责请求头部信息
    headers: {
      // 登录接口获取的token通过Authorization发送给服务器
      'Authorization': localStorage.getItem('bignews_token')
    },
    success: function (resData) {
      // 未登录处理
      if (resData.code == 403) {
        // window.parent.location = '../admin/login.html';
        window.parent.location = './login.html';
        return;
      }
      callback(resData);
    }
  })
}