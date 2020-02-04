import React, { Component, Fragment } from 'react';

class magic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      list: [
        {book:'生命之书' ,text: '人的生命是有限的，可是，为人民服务是无限的，我要把有限的生命，投入到无限的为人民服务之中去。', name: '雷锋' },
        {book:'时钟之书' ,text: '世界上最快而又最慢，最长而又最短，最平凡而又最珍贵，最易被忽视而又最令人后悔的就是时间。', name: '高尔基' }, 
        {book:'时间之书' ,text: '人们常觉得准备的阶段是在浪费时间，只有当真正机会来临，而自己没有能力把握的时候，才能觉悟自己平时没有准备才是浪费了时间。', name: '罗曼·罗兰' }]
    }
  }
  render() {

   
    return (
      <Fragment>

     {this.state.list.map((item,index)=>{
        return (
      <div className="container" key={index+item}   >
          <div className="box">
            <div className="content" >
              <h2>{item.book}</h2>
              <p>{item.text}<br/>
                 ——{item.name}</p>
            </div>
          </div>
        </div>

     )})}
   

        {/* 		
		<!-- SVG 与 Canvas两者间的区别
		
		      SVG 是一种使用 XML 描述 2D 图形的语言。

              Canvas 通过 JavaScript 来绘制 2D 图形。 --> */}
        <svg>
          {/* <!--  filter(滤镜) 属性 --> */}
          <filter id="wavy">
            <feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="2">
              <animate attributeName="baseFrequency" dur="60s" values="0.02;0.05;0.02" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" scale="30" />
          </filter>
        </svg>

      </Fragment>



    );
  }
}

export default magic;