import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllWebsites, selectAllWebsites } from "./allWebsitesSlice";
import { Link } from "react-router-dom";

export default function AllWebsites() {
  // const username = useSelector((state) => state.auth.me.username);
  const dispatch = useDispatch();
  const websites = useSelector(selectAllWebsites);

  console.log(websites)

  useEffect((websites) => {
    dispatch(fetchAllWebsites(websites));
  }, [dispatch]);

  return (
    <main className="main">
      <h2 className="pageHeader">Projects</h2>
      {/* {websites.map((website) => (
        <div className="grid">
          <section>
            <img src={website.imageUrl[0]} />
            <h3>
              <Link to={`/website/${website.id}`}>{website.title}</Link>
            </h3>
            <h4>{website.language}</h4>
            <h4>{website.credits}</h4>
            <p>{website.description}</p>
            <a href={website.links[0]}>{website.linkName[0]}</a>
          </section>
        </div>
      ))} */}
    </main>
  );
};
