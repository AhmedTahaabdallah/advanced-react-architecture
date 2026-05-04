import { includeUpdatableResouce } from "./include-updatable-resouce";

export const BookInfoForm = includeUpdatableResouce(
  ({ book, onChangeBook, onSaveBook, onResetBook }) => {
    const { name, pages } = book || {};

    return book ? (
      <>
        <label>
          Name:
          <input
            value={name}
            onChange={(e) => onChangeBook({ name: e.target.value })}
          />
        </label>
        <label>
          Pages:
          <input
            value={pages}
            onChange={(e) => onChangeBook({ pages: Number(e.target.value) })}
          />
        </label>
        <button onClick={onResetBook}>Reset</button>
        <button onClick={onSaveBook}>Save</button>
      </>
    ) : (
      <h3>Loading...</h3>
    );
  },
  "/books/2",
  "book"
);
