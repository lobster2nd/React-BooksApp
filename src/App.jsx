import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { BaseLayout } from "./components/BaseLayout";
import { AboutPage } from "./pages/AboutPage";
import { BookDetails, bookLoader } from "./pages/BookDeatilsPage";
import { ErrorPage } from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePage";
import { Loader } from "./components/Loader";
import { BookDescription } from "./components/BookDescription";
import { BooksAuthor } from "./components/BookAuthor";
import { AddBook } from "./pages/AddBook";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseLayout />} errorElement={<ErrorPage />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />

      <Route
        path="books/:id"
        element={<BookDetails />}
        loader={bookLoader}
      >
        <Route index element={<BookDescription />} />
        <Route path="author" element={<BooksAuthor />} />
      </Route>



      <Route
        path="books"
        fallbackElement={<Loader />}
        lazy={() =>
          import("./pages/BooksPage").then((module) => ({
            Component: module.BooksPage,
            loader: module.booksLoader,
          }))
        }
      />
      <Route path="addbook" element={<AddBook />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} fallbackElement={<Loader />} />;
}

export default App;
