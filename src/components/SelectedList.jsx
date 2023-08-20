import { useContext } from "react";
import BooksContext from "../context/Books";
import { AiOutlineClose } from "react-icons/ai";

function SelectedList(){
    const { selectedBooks, deleteBook } = useContext(BooksContext);
    
    const renderedSelected = selectedBooks.map((book)=>{
       return (
         <div className="flex  justify-between place-items-center space-x-2 bg-zinc-200 rounded-xl p-2" key={book.id}>
           {book.book.title}
           <span onClick={()=>{deleteBook(book.id)}}>
             <AiOutlineClose />
           </span>
         </div>
       );
    })

    return (
      <div>
        <h1 className="font-bold mb-10">Reading List</h1>

        <div className="flex flex-col space-y-3">
          {renderedSelected}
        </div>
      </div>
    );
}       

export default SelectedList;