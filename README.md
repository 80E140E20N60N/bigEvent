# bigEvent

### 介绍
大事件  主要增删查改

### 使用技术
1. Ajax
2. jQuery
3. Layui模块化前端框架       https://www.layui.com/doc/ 
4. TinyMCE 富文本编辑	http://tinymce.ax-z.cn/
5. 模板引擎  template.js     http://aui.github.io/art-template/zh-cn/docs/index.html
6. bootstrap 模态框
7. FormData数据


### 项目内容细节
#### 1. 后台管理系统页面切换
##### 1.1. iframe标签完成菜单对应页面的显示
    <iframe src="./main_count.html" frameborder="0" style="width: 100%;height:100%;" name="iframe"></iframe>
##### 1.2. 使用对应a标签进行跳转
    <a href="./main_count.html" target="iframe">
		<i class="iconfont icon-yidiandiantubiao04"></i>  <span>首页</span> 
	</a>

### 2. 文章管理下拉框动画
####  2.1 下拉列表
        调用 jq 的 slideToggle() 方法，使用滑动效果(高度变化)来切换元素的可见状态
####  2.2 箭头翻转
        css('transform', 'rotate(-90deg)')  设置rotate值来实现箭头翻转

### 3. 文章列表
####  3.1 实现分页功能  使用layui中的laypage组件
####  3.2 FormData数据类型
#####  3.2.1 作用：
        1.将form表单元素的name与value进行组合，实现表单数据的序列化，从而减少表单元素的拼接，提高工作效率；
        2.异步上传文件
#####  3.2.2 使用步骤：
        1. 示例化，创建一个空对象  let formData = new FormData();
        2. 通过append(key,value)在数据末尾追加数据,完成数据拼接
            formData.append('title', title);
        3. ajax()方法使用,注意，需添加如下两行代码
            contentType: false,    //发送数据的格式
            processData: false,    //处理数据
            原因：在 ajax 中 contentType 设置为 false 是为了避免 JQuery 对其操作，从而失去分界符，而使服务器不能正常解析文件。
        4.  formData数据类型判断    instanceof判断

### 4. 文章发表
#### 4.1 时间面板控件  
        layui.laydate

### 5. 文章类别管理  article_category.html
#### 5.1 模板引擎
      1. 引入引入模板引擎js
      2. 定义模板
      3. 根据定义模板的id,传入数据，并渲染进页面结构中
#### 5.2 新增分类
##### 5.2.1 获取文本框输入的数据
        1. 方法一：jq  id选择器+val()
        2. 方法二：form表单+jq中的serilalize()方法实现
            2.1 所有数据在form标签内
            2.2 保证需要获取值的元素都需要有一个name属性，name属性值从接口文档获取，和接口文档所描述的名称一致
##### 5.2.2 bootstrap 模态框使用
        模态窗口两种打开方式
        1.在按钮上注册点击事件，通过$('#模态框id').modal('show')打开，通过$('#模态框id').modal('hide')来隐藏
        2.通过data-toggle="modal"
          data-target="#myModal"来打开
        注意：两种方式同时使用时，需要将第一种方法放在前面

#### 5.3 删除分类
         Layui  (layer弹出层内置方法) confirm询问框使用
#### 5.4 编辑分类
        1.根据id将当前行的类别内容读取
        2.新建bootstrap模态框，将之前的内容填充
        3.修改后重新提交
### 6. 评论管理  commen_tlist.html
        1.art_template模板引擎if条件判断
        2.Layui  laypage分页
        3.Layui  (layer弹出层内置方法) confirm询问框使用
### 7. 个人中心
#### 7.1 FormData数据类型
#### 7.2 本地图片显示     
### 参与贡献
子晗





