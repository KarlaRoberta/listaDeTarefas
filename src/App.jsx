
import './App.css'
import perfil from "./assets/perfil.jpg";


const App = () => {

  return (
    <div>

<div className='header'>

<div className='imagem_perfil'>

<img src={perfil} alt="foto de um homem fazendo exercicio" />
</div>

<div className='descricao_perfil'>

<h1>Pedro Souza</h1>
<h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat quasi, nemo adipisci libero architecto praesentium nisi consequatur laborum reiciendis amet molestias numquam? Doloribus odit nemo perferendis reiciendis aliquid ipsum nobis!</h3>


<div className='links'>
  <ul>
    <li><a href="#">Link 1</a></li>
    <li><a href="#">Link 2</a></li>
    <li><a href="#">Link 3</a></li>
    <li><a href="#">Link 4</a></li>
  </ul>
</div>
</div>

<div className='container'>
<h2>Dia</h2>
<h2>Noite</h2>

</div>

<section>
<h1>Lista de tarefas</h1>
<form>
  <input type="text" placeholder='Digite a sua tarefa' />
  <button type='submit'>
     <i className="fa fa-plus" aria-hidden="true"></i>
  </button>
</form>
</section>

</div>


    </div>
  )
}

export default App

