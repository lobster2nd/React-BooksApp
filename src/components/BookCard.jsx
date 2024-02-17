import { Link } from "react-router-dom";
import { ROUTES } from "../constants";

export const BookCard = ({ imageUrl, title, id, description, publishedDate, authors, pageCount }) => {
  return (
    <Link to={`${ROUTES.books}/${id}`} >
    <div className="card-container dark:md:hover:bg-yellow-100">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-auto w-full object-contain md:h-48 md:w-48"
            src={imageUrl}
            alt="book"
          />
        </div>
        <div className="p-8">
        <div>{title}, [{publishedDate}]</div>
          <div className="content-type">
            {authors.toString().split(", ")}
          </div>
          
          <div className="text-green-500"> 
          Pages: {pageCount}
          </div>
          <p className="mt-2 text-slate-500">
          {description}
          </p>
        </div>
      </div>
    </div>
    </Link>
    
  );
};
