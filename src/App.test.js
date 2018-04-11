import React from 'react';
import App from './App';
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

configure({ adapter: new Adapter() });
const setup = () => {
  // 模拟 props
  const props = {
    // Jest 提供的mock 函数
    onAddClick: jest.fn()
  }

  // 通过 enzyme 提供的 shallow(浅渲染) 创建组件
  const wrapper = shallow(<App {...props} />)
  return {
    props,
    wrapper
  }
}

describe('AddTodoView', () => {
  const { wrapper, props } = setup();

  // case1
  // 通过查找存在 Input,测试组件正常渲染
  it('Img Component should be render', () => {
    //.find(selector) 是 Enzyme shallow Rendering 提供的语法, 用于查找节点
    // 详细用法见 Enzyme 文档 http://airbnb.io/enzyme/docs/api/shallow.html
    expect(wrapper).toContainReact(<h1 className="App-title">Welcome to React</h1>);
    expect(wrapper.find('img').exists()).toBeTruthy();
  })
})

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
