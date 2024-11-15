export default function Sidebar({ sections }) {
  return (
    <div className="absolute mt-10 w-[20%] max-h-screen p-4 bg-gray-50 left-1 m-3">
      <h2 className="text-lg font-semibold mb-4">On This Page</h2>
      <ul className="space-y-2 text-gray-700">
        {sections.map((section, index) => (
          <li key={index}>
            <a
              href={`#${section.id}`}
              className="block py-1 px-2 hover:bg-blue-100 rounded-md"
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
