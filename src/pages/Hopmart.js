export default function HopMart() {
    return (
      <main className="website">
        <h2>HopMart</h2>
        <h3>Languages: HTML, CSS, Javascript</h3>
        <h3>
          Created in collaboration with Jo Lee, Alicia Hetrick, and Alex Bunty.
          Styling by Alex Bunty.
        </h3>
        <p>A grocery ecommerce site, complete with the following capabilities:</p>
        <ul>
          <li>Backend database</li>
          <li>
            A cart you can add items to that persists whether you are logged in or
            not.
          </li>
          <li>Administrator-only editing functionality.</li>
          <li>Listings generated using the database and React Redux.</li>
        </ul>
        <p>It was built using the following strategies:</p>
        <ul>
          <li>Tasks assigned to group members using Github Projects tab.</li>
          <li>Conducted daily stand-ups to address bugs as a group.</li>
          <li>
            Worked in pairs to tackle specific functions. (i.e: the cart, products
            page, etc)
          </li>
        </ul>
        <a href="https://github.com/graceshopper-team-source-capacitor/graceshopper-project">
          Hopmart Github
        </a>
        <h3>Screenshots</h3>
        <p>
          {" "}
          <h4>Front Page</h4>
          <img src="/HopMartPicture2.png" alt="image" />
          <h4>Products Gallery</h4>
          <img src="/HopMartPicture1.png" alt="image" />
          <h4>Cart</h4>
          <img src="/HopMartPicture3.png" alt="image" />
        </p>
      </main>
    );
  }  