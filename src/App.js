import './App.css';
import Matrix from './component/matrix';

function App() {
  return (
    <div className='flex flex-col items-center justify-center h-screen w-96 ml-[33rem]'>
      <h1 className='text-gray-800 font-semibold my-5 uppercase text-3xl m-'>3*3 Matrix</h1>
      <Matrix/>
    </div>
  );
}

export default App;
