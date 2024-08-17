import Button from "@mui/material/Button";
import CounterVisual from "./CounterVisual";

const CounterPresentation = ({ counter, sumar, restar, onAdd }) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-center items-center gap-2 p-2 rounded-lg border border-gray-300 bg-white shadow-md">
        <button
          onClick={restar}
          className="px-3 py-2 text-lg font-semibold text-red-600 bg-red-50 rounded-lg transition-colors duration-200 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          -
        </button>

        <CounterVisual counter={counter} />

        <button
          onClick={sumar}
          className="px-3 py-2 text-lg font-semibold text-green-600 bg-green-50 rounded-lg transition-colors duration-200 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-300"
        >
          +
        </button>
      </div>

      <Button 
        variant="contained" 
        onClick={() => onAdd(counter)} 
        className="!bg-blue-600 !hover:bg-blue-700 !text-white !shadow-lg !rounded-lg"
      >
        Agregar al Carrito
      </Button>
    </div>
  );
};

export default CounterPresentation;
