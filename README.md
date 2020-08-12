# canvas
### 基础用法
##### 标签只有两个属性—— width和height。这些都是可选的，并且同样利用 DOM properties 来设置。当没有设置宽度和高度的时候，canvas会初始化宽度为300像素和高度为150像素。该元素可以使用CSS来定义大小，但在绘制时图像会伸缩以适应它的框架尺寸：如果CSS的尺寸与初始画布的比例不一致，它会出现扭曲。
###### var canvas = document.getelementbyid('tutorial');
###### var ctx = canvas.getcontext('2d');
##### canvas起初是空白的。为了展示，首先脚本需要找到渲染上下文，然后在它的上面绘制。canvas元素有一个叫做 **getContext()** 的方法，这个方法是用来获得渲染上下文和它的绘画功能。**getContext()**只有一个参数，上下文的格式。
##### 只支持两种形式的图形绘制：矩形和路径（由一系列点连成的线段）。所有其他类型的图形都是通过一条或者多条路径组合而成的。
##### canvas提供了三种方法绘制矩形：
##### fillRect(x, y, width, height)；绘制一个填充的矩形
##### strokeRect(x, y, width, height)； 绘制一个矩形的边框
##### clearRect(x, y, width, height)； 清除指定矩形区域，让清除部分完全透明。
