export default function LanguageSelector() {
  return (
    <select
      className="border border-gray-300 rounded-lg text-sm text-gray-600 w-auto sm:w-24 focus:ring-2 focus:ring-gray-500 focus:outline-none transition-all ease-in-out"
      size={1} // Keeps it compact when not opened
    >
      <option value="en">EN</option>
      <option value="fr">FR</option>
      <option value="es">ES</option>
      <option value="de">DE</option>
      <option value="it">IT</option>
      <option value="jp">JP</option>
    </select>
  );
}
