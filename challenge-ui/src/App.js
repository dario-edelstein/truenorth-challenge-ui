import Taskslist from "./components/Taskslist";
import { useSearchParams } from 'react-router-dom'
import QuantityHandler from "./components/QuantityHandler";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const listQuantity = searchParams.get("quantity")


  return (
    <div className="flex flex-col justify-center items-center pt-4 w-full">
      <div className=' w-2/5 mx-2 px-4 py-2 bg-slate-600 text-slate-50 rounded-md shadow-sm sm:w-1/5 max-w-[148px]'>Current tasks: {listQuantity}</div>
      <QuantityHandler />
      <Taskslist quantity={listQuantity} />
    </div>

  );
}

export default App;
