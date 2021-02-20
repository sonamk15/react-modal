import './App.css';
import ModalX from './components/Modals/modalX/modalX';
import Modal from './components/Modal';
import ModalY from './components/Modals/modalY/modalY';
import ModalZ from './components/Modals/modalZ/modalZ';
// import ModalSlider from './components/ModalSlider'


let count = 1

function dispalyModal() {
  console.log(count)
  switch (count) {
    case (1):
      return <ModalX onCountChange={onCountChange} />
      break;
    case (2):
      return <ModalY onCountChange={onCountChange} />
      break;
    case (3):
      return <ModalZ onCountChange={onCountChange} />
      break;
    default:
      return <Modal onCountChange={onCountChange} />
  }

}

function onCountChange() {
  count += 1
  console.log(count)
  dispalyModal() 


}

function App() {
  return (
    <div className="App">
      {dispalyModal()}
    </div>
  );
}

export default App;
