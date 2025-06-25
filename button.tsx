export function Button({ children, className }) {
  return (
    <button className={`bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md ${className}`}>
      {children}
    </button>
  );
}
