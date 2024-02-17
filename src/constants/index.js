export const ROUTES = {
  homePage: "/",
  about: "/about",
  books: "/books",
  user: "/user",
  bookDetails: "/books/:id",
  addBook: "/addbook"
};

export const NAV_ITEMS = [
  {
    title: "Home",
    path: ROUTES.homePage,
  },
  {
    title: "About",
    path: ROUTES.about,
  },
  {
    title: "Books",
    path: ROUTES.books,
  },
  {
    title: "Add Book",
    path: ROUTES.addBook,
  }
];
