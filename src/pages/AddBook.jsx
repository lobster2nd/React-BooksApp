import React, { useState } from 'react';

export const AddBook = ({ booksMocks, setBooksMocks }) => {

  const [newBook, setNewBook] = useState({
    id: '',
    title: '',
    authors: [],
    publishedDate: '',
    description: '',
    pageCount: '',
    imageUrl: ''
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Простая валидация на пустое поле title
    if (newBook.title.trim()) {
      setBooksMocks([...booksMocks, { ...newBook, id: booksMocks.length }]);
      setNewBook({
        id: '',
        title: '',
        authors: [],
        publishedDate: '',
        description: '',
        pageCount: '',
        imageUrl: ''
      });
    }
  };

  return (
    
    <div className="flex-col">
      
       <div className="flex justify-center px-5 py-10">
      
    <form>
    <p className="text-red-500">
      This is a test form without adding books
      </p>
      <div className="pb-3">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={newBook.title}
        onChange={handleInputChange}
      />
      </div>
      <div className="pb-3">
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={newBook.description}
        onChange={handleInputChange}
      />
      </div>
      <div className="pb-3">
      <input
        type="text"
        name="publishedDate"
        placeholder="Published Date"
        value={newBook.publishedDate}
        onChange={handleInputChange}
      />
      </div>
     <div className="pb-3 mb-10">
      <button className="button" type="submit">Add Book</button>
      
      </div>
    </form>
    </div>
    </div>
  );
};

