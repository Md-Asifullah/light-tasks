function Button({ text, className = "", onClick = null, type = "" }) {
  return (
    <button
      className={`px-4 py-2 rounded-md font-semibold transition-colors duration-200 ${className}`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
}

export default Button;
