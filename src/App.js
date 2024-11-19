import './App.css';

import CourseListCard from './components/step04/CourseListCard';
import PackingList from './components/step05/PackingList';
import TextList from './components/step06/TextList';
import TextList2 from './components/step06/TextList2';
import TextList3 from './components/step06/TextList3';
import Event01 from './components/step07/Event01';
import Event02 from './components/step07/Event02';
import Count from './components/step08/Count';
import CourseListCard08 from './components/step08/CourseListCard08';


function App() {
  const items = [
    {
      title: '입문자를 위한, HTML&CSS 웹 개발 입문',
      description: '웹 개발에 필요한 기본 지식을 배웁니다.',
      image: './img/test1.png',
      isFavorite : true
    },
    {
      title: '입문자를 위한, ES6+ 최신 자바스크립트 입문',
      description: '쉽고! 알찬! 내용을 준비했습니다.',
      image: './img/test2.png',
      isFavorite : false
    },
    {
      title: '포트폴리오 사이트 만들고 배포까지!',
      description: '포트폴리오 사이트를 만들고 배포해 보세요.',
      image: './img/test3.png',
      isFavorite : true
    }
  ];

  
  const isChk = false;
  return (
    <>
      {isChk ? <h2>Hello, react</h2> : <CourseListCard items={items}/>}
      <hr/>
      <PackingList />
      <hr/>
      {/* <TextList/> */}
      <hr/>
      <TextList2/>
      <hr/>
      <TextList3/>
      <hr/>
      <Event01/>
      <hr/>
      <Event02/>
      <hr/>
      <CourseListCard08 items={items}/>
      <hr/>
      <Count/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </>
  );
}

export default App;
