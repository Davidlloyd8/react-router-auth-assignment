import { useState } from 'react';
import useFetch from '../useFetch';
import Navigation from "../components/Navigation";
import "../pagination.css";
import "../css/users.css"
function Users() {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useFetch(
    `https://randomuser.me/api/?page=${page}&results=6&seed=abc`
  );
  const PER_PAGE = 6;
  const total = data?.results?.length;
  const pages = 10;
  const skip = page * PER_PAGE - PER_PAGE;
  if (loading) {
    return <>Loading...</>;
  }

  if (!loading && error) {
    return <>Error</>;
  }


  



  return (
    <>
      <Navigation />
      <h1>Users</h1>
      <div class="box">
        {data?.results
    .map((each, index) => {
      const name = `${each.name.title} ${each.name.first} ${each.name.last}`;
      const image = `${each.picture.large}`
      const nationality = `${each.location.country}`
      return (
        
        <div class="card">
          <div class="imgBx">
            <img
              src={image}
              alt="images"
            />
          </div>
          <div class="details">
            <h2 key={name.toLowerCase().replaceAll(' ', '')}>
            {`${
          index + 1
        }.${name}`}
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
          {<li className="prev" disabled={page <= 1} onClick={() => setPage((prev) => prev - 1)}>Prev</li>}
          {Array.from({ length: pages }, (_, index) => index + 1).map(
        (each) => (
          <li onClick={() => setPage(each)}>{each}</li>
        )
      )}
          {<li className="next" disabled={page >= pages} onClick={() => setPage((prev) => prev + 1)}>Next</li>}
        </ul>
      </div>
    </>
  );
}

export default Users;
