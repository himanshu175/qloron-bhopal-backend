import "./paginationListing.css";

const Card = ({
  data,
  currentActivePage,
  setCurrentActivePage,
  total,
  perPage,
}) => {
  return (
    <>
      <section className="pagination_listing_section_responsive_grid__card_container">
        {data.map((item, ind) => {
          return (
            <div key={ind} className="card">
              <div>
                <img src="/images/download.jpg" alt="img" />
              </div>
              <div className="title_container">
                <h1>{item.title}</h1>
              </div>
              <div style={{ maxHeight: "170px" }} className="body_container">
                <p>
                  {item.body.length > 250
                    ? `${item.body.substring(0, 250)}...`
                    : item.body}
                </p>
              </div>
            </div>
          );
        })}
      </section>
      {/* <footer className="pagination_footer_btns_sec">
        <button
          disabled={currentActivePage < 2}
          onClick={() => setCurrentActivePage((prev) => --prev)}
        >
          prev
        </button>
        <span>
          {currentActivePage} of {Math.floor(total / perPage)}
        </span>
        <button
          disabled={currentActivePage >= Math.floor(total / perPage)}
          onClick={() => setCurrentActivePage((prev) => ++prev)}
        >
          next
        </button>
      </footer> */}
    </>
  );
};

export default Card;
