import './App.css';
import Testimonio from './components/Testimonio';
import users from './data/users';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        {
          users.map((user, index) => {
            return (
              <Testimonio
                key={index}
                name={user.name}
                country={user.country}
                image={user.image}
                profession={user.profession}
                company={user.company}
                testimony={user.testimony} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
