import { Request, Response } from 'express';
import Book, { IBook } from '../models/bookModel';

// Controller functions
export const createBook = (req: Request, res: Response) => {
  const { title, author, summary } = req.body;
  const newBook = new Book({ title, author, summary });

  newBook
    .save()
    .then((book: IBook) => {
      res.status(201).json(book);
    })
    .catch((err: any) => {
      res.status(400).json(err);
    });
};

export const getBooks = (req: Request, res: Response) => {
  Book.find()
    .then((books: IBook[]) => {
      res.status(200).json(books);
    })
    .catch((err: any) => {
      res.status(500).json(err);
    });
};

export const getBookById = (req: Request, res: Response) => {
  const { id } = req.params;

  Book.findById(id)
    .then((book: IBook | null) => {
      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }
      res.status(200).json(book);
    })
    .catch((err: any) => {
      res.status(500).json(err);
    });
};

export const updateBook = (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, author, summary } = req.body;

  Book.findByIdAndUpdate(
    id,
    { title, author, summary },
    { new: true, useFindAndModify: false }
  )
    .then((book: IBook | null) => {
      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }
      res.status(200).json(book);
    })
    .catch((err: any) => {
      res.status(500).json(err);
    });
};

export const deleteBook = (req: Request, res: Response) => {
  const { id } = req.params;

  Book.findByIdAndRemove(id, { useFindAndModify: false })
    .then((book: IBook | null) => {
      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }
      res.status(204).send();
    })
    .catch((err: any) => {
      res.status(500).json(err);
    });
};
