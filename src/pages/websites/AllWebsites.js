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
    <div>
      <h1>Elizabeth "Betsy" Carter's Portfolio</h1>

      <h2>Projects Completed</h2>
      {gallery.map((website) => (
        <section>
          <img src={website.imageUrl[0]}/>
          <h3>{website.title}</h3>
          <h4>{website.language}</h4>
          <h4>{website.credits}</h4>
          <p>{website.description}</p>
          <a href={website.github}></a>
        </section>
      ))}
    </div>
  );
};

export default AllWebsites;
