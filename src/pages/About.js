export default function About() {
    return (
      <div className="about">
        <h2 className="pageHeader">About Me</h2>
  
        <p>
          Hello, I'm Betsy! I'm a software engineer that is presently open for
          work.
          {/* Feel free to drop me a message in the contact page! */}
        </p>
  
        <h2>Education</h2>
        <ul>
          <li>
            <h3>Purchase College - August 2013 - May 2017</h3>
            <h4>
              Degrees: Psychology (Bachelor of Arts), Painting/Drawing (Bachelor
              of Visual Arts)
            </h4>
            <p>
              As a lifelong artist with an interest in exploring the depths of the
              human condition, pursuing a double major in Psychology and
              Painting/Drawing was the best option for my specific interests.
              Juggling both majors and switching gears from creative to scientific
              studies was a fascinating challenge that taught me an important
              lesson in time management and self discipline.{" "}
            </p>
          </li>
          <li>
            <h3>
              Grace Hopper Fullstack Academy Boot Camp - November 2022 - April
              2023
            </h3>
            <h4>Languages Learned: HTML, CSS, Javascript</h4>
            <h4>Libraries Learned: React, PostgreSQL, Sequelize, Express </h4>
            <p>
              I have always wanted to learn how to make websites and games
              featuring my own artwork, so doing a coding bootcamp was a logical
              next step for me. Additionally, I wanted to make a shift
              professionally to a field that utilized my creative skills and love
              for problem-solving. I learned how to work collaboratively through
              agile-based methodology and how to manage my time.
            </p>
          </li>
        </ul>
  
        <h2>Working Experience</h2>
        <h3>Lower East Side Family Union - May 2019 - May 2022</h3>
        <h4>Role: Preventive Case Planner</h4>
        <ul>
          <li>
            Collaborated with an average of 10 families to develop a service plan
            and solutions over the period of six to twelve months. Served over 36
            families.
          </li>
          <li>
            Navigated various databases to keep all information about families up
            to date (i.e. addresses, phone numbers).
          </li>
          <li>
            Wrote reports and maintained daily notes about a family’s progress
            with services. Every six months, I prepared a detailed summary of
            progression towards goals.
          </li>
          <li>
            Learned how to respond to emergencies (i.e. child protective services
            getting involved) and adjust my plans to address those emergencies in
            a timely matter.
          </li>
        </ul>
      </div>
    );
  }
  