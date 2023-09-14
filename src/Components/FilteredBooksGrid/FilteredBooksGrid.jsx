import AllBookCard from "../AllBookCard/AllBookCard";

const FilteredBooksGrid = ({ filteredBooks, allBooks }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-center lg:justify-self-end gap-4">
      {filteredBooks.length >= 1
        ? filteredBooks.map((book) => {
            return <AllBookCard key={book._id} book={book} />;
          })
        : allBooks.map((book) => {
            return <AllBookCard key={book._id} book={book} />;
          })}
    </div>
  );
};

export default FilteredBooksGrid;
