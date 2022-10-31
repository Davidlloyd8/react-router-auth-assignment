import { useState } from "react";
import useFetch from "../useFetch";
import "../pagination.css";
import "../css/users.css";

function UsersList() {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useFetch(
    `https://randomuser.me/api/?results=40&seed=abc`
  );
  const PER_PAGE = 6;
  const total = data?.results?.length;
  //   const pages = 10;
  const pages = Math.ceil(total / PER_PAGE);
  //const skip = page * PER_PAGE - PER_PAGE;
  if (loading) {
    return <>Loading...</>;
  }

  if (!loading && error) {
    return <>Error</>;
  }

  return (
    <>
      <h1>LIST OF USERS</h1>
      <div className="box">
        {/* // (page -1) * PER_PAGE, page * PER_PAGE    skip, skip + PER_PAGE*/}
        {data?.results
          .slice((page - 1) * PER_PAGE, page * PER_PAGE)
          .map((each, index) => {
            const name = `${each.name.title} ${each.name.first} ${each.name.last}`;
            const image = `${each.picture.large}`;
            const nationality = `${each.location.country}`;
            return (
              <div className="card">
                <div className="imgBx">
                  <img src={image} alt="images" />
                </div>
                <div className="details">
                  <h2 key={name.toLowerCase().replaceAll(" ", "")}>
                    {`${index + 1}.${name}`}
                    <br />
                    <span>{nationality}</span>
                  </h2>
                </div>
              </div>
            );
          })}
      </div>

      <div className="pagination-container">
        <ul className="pagination">
          {
            <button
              className="prev"
              disabled={page <= 1}
              onClick={() => setPage((prev) => prev - 1)}
            >
              Prev
            </button>
          }
          {Array.from({ length: pages }, (_, index) => index + 1).map(
            (each) => (
              <li onClick={() => setPage(each)}>{each}</li>
            )
          )}
          {
            <button
              className="next"
              disabled={page >= pages}
              onClick={() => setPage((prev) => prev + 1)}
            >
              Next
            </button>
          }
        </ul>
      </div>
    </>
  );
}
export default UsersList;
