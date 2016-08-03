1. npm install
2. npm start
3. 浏览器打开 localhost:4000
4. utils>github.js
5. 配置.babelrc
6. 配置.eslintrc
7. .gitignore
8. 配置devServer.js
9. src>component>echarts.js+linejs
10. src>style>common.css
11. src>App.js+index.js

12. echarts.js
# 导入react 和 echarts
      import React from 'react';
## 官方文档中安装npm install echarts --save
### 导入图表
    class Echarts extends React.Component {
    }
 /×选中并插入所需的图表×/
#### 导出
    export default Echarts;
##### App.js dap
import getGithubInfo from './utils/github.js';
import Echarts from './components/echarts.js';
