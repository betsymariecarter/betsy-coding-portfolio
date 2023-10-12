import { Link } from "react-router-dom";

export default function Home() {
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

      <div className="grid">
        <section>
          <img src="/HopMartPicture1.png" alt="image" />
          <h3>
            <Link to="/hopmart">HopMart</Link>
          </h3>
          <h4>Languages: HTML, CSS, Javascript</h4>
          <h4>
            Created in collaboration with Jo Lee, Alicia Hetrick, and Alex
            Bunty. Styling by Alex Bunty.
          </h4>
          <ul>
            <li>A grocery ecommerce site.</li>
            <li>Tasks assigned to group members using Github Projects tab.</li>
            <li>Conducted daily stand-ups to address bugs as a group.</li>
            <li>
              Worked in pairs to tackle specific functions. (i.e: the cart,
              products page, etc)
            </li>
          </ul>
          <a href="https://github.com/graceshopper-team-source-capacitor/graceshopper-project">
            Hopmart Github
          </a>
        </section>
        <section>
          <img src="/ToDoMagotchi1.png" alt="image" />
          <h3>
            <Link to="/todomagotchi">ToDomagotchi</Link>
          </h3>
          <h4>Languages: HTML, CSS, Javascript</h4>
          <h4>
            Created in collaboration with Carla Herrera, Jing Mo, Sarah
            Stephens, and Zelda Ogiamien. Illustrations by Elizabeth "Betsy"
            Carter.
          </h4>
          <ul>
            <li>
              A To-Do app that encourages productivity by adding experience
              points to a pet or plant assigned to each user whenever a to-do is
              completed.
            </li>
            <li>Tasks assigned to group members using Github Projects tab.</li>
            <li>Conducted daily stand-ups to address bugs as a group.</li>
            <li>
              Group members worked individually and then met together at the end
              of the day to do a final commit.
            </li>
          </ul>
          <a href="https://github.com/Capstone-Project-Team-ToDomagotchi/todomagotchi">
            ToDomagotchi Github
          </a>
          <p></p>
          <a href="https://youtu.be/kmS99MV_Uyw">
            Youtube Walkthrough (My Clip Only)
          </a>
        </section>
        {/* {gallery.map((website) => (
            <section>
              <img src={website.imageUrl1}/>
              <h3>{website.title}</h3>
              <h4>{website.language}</h4>
              <h4>{website.credits}</h4>
              <p>{website.description}</p>
              <a href={website.github}></a>
            </section>
          ))} */}
      </div>
    </main>
  );
}
