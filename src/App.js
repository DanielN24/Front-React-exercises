import './App.css';
import Comments from './components/comments.js';

function App() {
  return (
    <div className="App">
      <div className='principal-container'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Comments 
          name='Shawn Wang'
          country='Singapore'
          image={require('./images/Shawn.png')}
          position='Software Engineer'
          company='Amazon'
          comment="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life." />
        <Comments 
          name='Sarah Chima'
          country='Nigeria'
          image={require('./images/Sarah.png')}
          position='Software Engineer'
          company='ChatDesk'
          comment="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company." />
        <Comments 
          name='Emma Bostian'
          country='Sweden'
          image={require('./images/Emma.png')}
          position='Software Engineer'
          company='Spotify'
          comment="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck/. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify." />
        </div>
    </div>
  );
}

export default App;
