function SideBar() {
  return (
    <div>
      <div>
        <select>
          <option value="Nothing selected">Search a book By</option>
          <option value="title">Title</option>
          <option value="year">Year</option>
          <option value="ISBN">ISBN</option>
          <option value="author">Author</option>
        </select>
        <input />
      </div>
      <div>
        <h3>Filter By Page</h3>
        <input type="range" min="0" max="1200" />
        <p>Valor actual: </p>
      </div>
      <div>
        <h2 className="font-bold">Filter By Genre</h2>
        <ul className="text-slate-500">
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>
      </div>

      <button className="bg-red text-white">Clear All</button>
    </div>
  );
}
export default SideBar;