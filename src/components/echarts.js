import React from 'react';
import echarts from 'echarts';

class Echarts extends React.Component {
  componentDidMount(){
    let myChart = echarts.init(document.getElementById('main'));
    myChart.setOption({
      series : [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          data:[
            {value:400, name:'睡觉'},
            {value:335, name:'直接访问'},
            {value:310, name:'邮件营销'},
            {value:274, name:'联盟广告'},
            {value:235, name:'视频广告'}
          ]
        }
      ]
    })
  }
  render () {

    let styles={
      width:'600px',
      height:'400px',
      margin:'0 auto'
    }
    return(
      <div id="main" style={styles}></div>
    )
  }
}

export default Echarts;
