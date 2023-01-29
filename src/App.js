import './App.css';
import Picture from './Picture';
import Whatever from './your-articles.json'


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">

        <Picture 
          imgURL= 'https://media.giphy.com/media/Rlwz4m0aHgXH13jyrE/giphy-downsized-large.gif'
          altTag= 'funny gif'
          />

      </header> */}

      {
        Whatever.map( i => {
          return(
            <div className="box">
              <h2>{i.title}</h2>
              <p>{i.description}</p>

              <Picture id='idk'
              imgURL= {i.image}
              altTag= {i.description}
              />

              {i.link}
              {i.author.name}

              <Picture id='bruhh'
              imgURL= {i.author.image}
              altTag= {'image of ' + i.author.name}
              />
              <hr></hr>

              
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
