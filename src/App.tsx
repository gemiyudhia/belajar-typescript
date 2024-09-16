// import { ReactNode } from "react";
import { useFetchApi } from "./lib/useFetchApi";

// type ButtonProps = {
//   className?: string;
//   onClick: () => void;
//   children: ReactNode;
// };

// const Button = (props: ButtonProps) => {
//   return (
//     <button
//       onClick={props.onClick}
//       className={`p-4 bg-blue-500 text-white rounded-md ${props.className}`}
//     >
//       {props.children}
//     </button>
//   );
// };

function App() {
  const { data, error, loading } = useFetchApi(
    "https://jsonplaceholder.typicode.com/todos"
  );

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div>
        {loading && <p>Loading...</p>} {/* Show loading state */}
        {error && <p>Error: {error}</p>} {/* Show error if any */}
        <ul>
          {/* Render the fetched data */}
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}


export default App;
