type Bookshelf = {
  id: number
  name: string
}

const bookshelfs: Bookshelf[] = [
  {
    id: 1,
    name: "積読中",
  },
  {
    id: 2,
    name: "読んだ本",
  },
  {
    id: 3,
    name: "読みたい本",
  },
  {
    id: 4,
    name: "XXXXXX",
  },
  {
    id: 5,
    name: "YYYYYY",
  },
]

type Book = {
  id: number
  title: string
  // desc: string
  // memo: string
  // publisher: string
  // published_data: Date
  // author: string
  // count: number
  // finished_date: Date
  // added_date: Date
  // amazon_link: string
}

const books: Book[] = [
  {
    id: 1,
    title: "テスト1",
  },
  {
    id: 2,
    title: "テスト2",
  },
  {
    id: 3,
    title: "テスト3",
  },
  {
    id: 4,
    title: "テスト4",
  },
  {
    id: 5,
    title: "テスト5",
  },
  {
    id: 6,
    title: "テスト6",
  },
  {
    id: 7,
    title: "テスト7",
  },
  {
    id: 8,
    title: "テスト8",
  },
  {
    id: 9,
    title: "テスト9",
  },
  {
    id: 10,
    title: "テスト10",
  },
  {
    id: 11,
    title: "テスト11",
  },
  {
    id: 12,
    title: "テスト12",
  },
  {
    id: 13,
    title: "テスト13",
  },
  {
    id: 14,
    title: "テスト14",
  },
  {
    id: 15,
    title: "テスト15",
  },
]

type BookshelfRelation = {
  book_id: number
  bookshelf_id: number
}
const bookshelfRelations: BookshelfRelation[] = [
  {
    book_id: 1,
    bookshelf_id: 1,
  },
  {
    book_id: 2,
    bookshelf_id: 1,
  },
  {
    book_id: 3,
    bookshelf_id: 2,
  },
  {
    book_id: 4,
    bookshelf_id: 2,
  },
  {
    book_id: 5,
    bookshelf_id: 3,
  },
  {
    book_id: 6,
    bookshelf_id: 3,
  },
  {
    book_id: 7,
    bookshelf_id: 3,
  },
  {
    book_id: 8,
    bookshelf_id: 4,
  },
  {
    book_id: 9,
    bookshelf_id: 4,
  },
  {
    book_id: 10,
    bookshelf_id: 5,
  },
  {
    book_id: 11,
    bookshelf_id: 5,
  },
  {
    book_id: 12,
    bookshelf_id: 3,
  },
  {
    book_id: 13,
    bookshelf_id: 3,
  },
  {
    book_id: 14,
    bookshelf_id: 3,
  },
  {
    book_id: 15,
    bookshelf_id: 3,
  },
]

export {BookshelfRelation, Bookshelf, Book, bookshelfRelations, bookshelfs, books}
