import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchAllWebsites, selectAllWebsites} from './allWebsitesSlice';

/**
 * COMPONENT
 */
const AllWebsites = (props) => {
  // const username = useSelector((state) => state.auth.me.username);
  const dispatch = useDispatch();
  const gallery = useSelector(selectAllWebsites);

useEffect(() => {
  dispatch(fetchAllWebsites(gallery));
}, [dispatch])

console.log(gallery?.title[1])

  return (
    <main className="main">
      <p>
        Specializes in Javascript (specifically React) and developing frontends.
      </p>
      <p>
        Experience with leading stand-ups and excels at identifying realistic
        goals to keep development running smoothly.
      </p>
      <p>Excels at time management and creating own schedule.</p>
      <h2 className="pageHeader">Projects</h2>
      {gallery.map((website) => (
        <div className="grid">
          <section>
          <img src={website.imageUrl[0]}/>
          <h3><Link to={`/website/${id}`}>{website.title}</Link></h3>
          <h4>{website.language}</h4>
          <h4>{website.credits}</h4>
          <p>{website.description}</p>
          <a href={website.links[0]}>{website.linkName[0]}</a>
        </section>
        </div>
      ))}
    </main>
  );
};

export default AllWebsites;
