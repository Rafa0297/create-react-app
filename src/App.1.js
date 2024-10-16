import './App.css';
import Testimonio from './components/Testimonio'
import './data/users'
import users from './data/users';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>

        <Testimonio
          name={users[0].name}
          country={users[0].country}
          image={users[0].image}
          profession={users[0].profession}
          company={users[0].company}
          testimony={
            <>
              Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en <strong>freeCodeCamp</strong>. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. <strong>freeCodeCamp</strong> cambió mi vida.
            </>
          } />
        <Testimonio
          name={users[1].name}
          country={users[1].country}
          image={users[1].image}
          profession={users[1].profession}
          company={users[1].company}
          testimony={users[1].testimony} />
        <Testimonio
          name={users[2].name}
          country={users[2].country}
          image={users[2].image}
          profession={users[2].profession}
          company={users[2].company}
          testimony={users[2].testimony} />
      </div>
    </div>
  );
}

export default App;
