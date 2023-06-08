import { useRef } from "react";

function Search({ setSearchInput }) {
  const inputRef = useRef();
  return (
    <div
      className="d-flex align-items-center mx-auto mb-3 gap-2 "
      style={{ maxWidth: "350px" }}
    >
      <input
        ref={inputRef}
        placeholder="Write City Name"
        className="form-control"
        type="text"
      />
      <button
        className="btn btn-success "
        onClick={() => {
          setSearchInput(inputRef.current.value);
        }}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
