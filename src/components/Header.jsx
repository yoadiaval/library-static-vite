function Header(){
    return ( 
      <div className="grid grid-cols-2 w-[80%] mx-auto">
        <h1>Book Lover</h1>
        <nav >
          <ul className="flex space-x-4">
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
          </ul>
        </nav>
      </div>
    );
}

export default Header;