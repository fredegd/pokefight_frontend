export default function Pagination({ next, previous, setUrl }) {
    return (
      <div className="pagination">

        <button
          disabled={!previous}
          onClick={() => {
            setUrl(previous);
          }}
        >
          Prev
        </button>
        <button
          disabled={!next}
          onClick={() => {
            setUrl(next);
          }}
        >
          Next
        </button>
      </div>
    );
  }
  