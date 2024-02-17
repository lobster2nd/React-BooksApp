import { Await, Outlet, defer, useLoaderData } from "react-router-dom";
import { mockFetch } from "../utils/api";
import { Tabs } from "../components/Tabs";
import { Suspense } from "react";
import { Loader } from "../components/Loader";

const TABS = [
  {
    path: "",
    title: "Description",
  },
  {
    path: "author",
    title: "About authors",
  },
];

export const bookLoader = ({ params: { id } }) => {
  const book = mockFetch(`/books/${id}`);
  return defer({
    book,
  });
};

export const BookDetails = () => {
  const { book } = useLoaderData();

  return (
    <Suspense fallback={<Loader />}>
      <Await resolve={book}>
        {({ imageUrl, title, description, pageCount }) => (
          <div className="card-container mt-10 ">
            <div className="flex flex-col">

              <div className="p-5">
                <div className="content-type">Book</div>
                <div className="book-title">{title}</div>
                <div className="text-green-500">pages: {pageCount} </div>
                <img
                  className="h-auto w-auto object-contain"
                  src={imageUrl}
                  alt="book"
                />
               {description}
              </div>
                <Tabs tabs={TABS}/>
                <Outlet />
              </div>
            </div>
          
        )}
      </Await>
    </Suspense>
  );
};
