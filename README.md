# bigEvent

### 介绍
大事件

### 使用技术
1. Ajax
2. jQuery
3. Layui模块化前端框架
    日期和时间组件文档 - layui.laydate；
4. TinyMCE 富文本编辑
5. 模板引擎  template.js  

### 项目内容细节
#### 1. 后台管理系统页面切换
##### 1.1. iframe标签完成菜单对应页面的显示
    <iframe src="./main_count.html" frameborder="0" style="width: 100%;height:100%;" name="iframe"></iframe>
##### 1.2. 使用对应a标签进行跳转
    <a href="./main_count.html" target="iframe">
		<i class="iconfont icon-yidiandiantubiao04"></i>  <span>首页</span> 
	</a>

### 2. 文章管理
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
        1. 创建一个空对象  let formData = new FormData();
        2. 通过append(key,value)在数据末尾追加数据
            formData.append('title', title);
        3. ajax()方法使用,注意，需添加如下两行代码
            contentType: false,    //发送数据的格式
            processData: false,    //处理数据
            原因：在 ajax 中 contentType 设置为 false 是为了避免 JQuery 对其操作，从而失去分界符，而使服务器不能正常解析文件。
        4.  formData数据类型判断    instanceof判断
### 4. 文章发表
#### 4.1 时间面板控件  
        layui.laydate

### 参与贡献
子晗





