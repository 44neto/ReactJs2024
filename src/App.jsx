import './App.css'

function dizerOla(){
  alert('Olá, corinthiano!');
}
function App(){
  return (
    <>
    <button onCLick={dizerOla}>Clique Aqui</button>
    </>
  )
}