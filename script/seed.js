"use strict";

const {
  db,
    Contact, 
    Website,
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const contacts = await Promise.all([
    Contact.create({ name: "test", email: "123@gmail.com" }),
    Contact.create({ name: "murphy", email: "123@gmail.com" }),
  ]);

  const websites = await Promise.all([
    Website.create({
      imageUrl: [
        "/HopMartPicture1.png",
        "/HopMartPicture2.png",
        "/HopMartPicture3.png",
      ],
      title: `HopMart`,
      links: [
        `https://github.com/graceshopper-team-source-capacitor/graceshopper-project`,
      ],
      linkName: [`Hopmart Github`],
      description: `A grocery ecommerce site.`,
      capabilities: [
        "Backend database",
        "A cart you can add items to that persists whether you are logged in or not.",
        "Administrator-only editing functionality.",
        "Listings generated using the database and React Redux.",
      ],
      strategies: [
        "Tasks assigned to group members using Github Projects tab.",
        "Conducted daily stand-ups to address bugs as a group.",
        "Worked in pairs to tackle specific functions. (i.e: the cart, products page, etc)",
      ],
      language: `HTML, CSS, Javascript`,
      libraries: `React, Express, Sequelize, Axios, Redux, React-Router.`,
      credits: `Created in collaboration with Jo Lee, Alicia Hetrick, and Alex Bunty.
      Styling by Alex Bunty.`,
    }),
    // Website.create({
    //   imageUrl: ["pending"],
    //   title: `Artist Unblock`,
    //   github: `https://github.com/betsymariecarter/Stackathon.Artist.Unblock.v1.BC`,
    //   description: `placeholder`,
    //   language: `HTML, CSS, Javascript`,
    //   libraries: `React, `,
    //   credits: `Solo Project`,
    // }),
    Website.create({
      imageUrl: [
        "/ToDoMagotchi1.png",
        "/ToDoMagotchi2.png",
        "/ToDoMagotchi3.png",
      ],
      title: `ToDoMagotchi`,
      links: [
        `https://github.com/Capstone-Project-Team-ToDomagotchi/todomagotchi`,
        "https://youtu.be/kmS99MV_Uyw",
        "https://youtu.be/Rp5XKX5ccDk",
      ],
      linkName: [
        `ToDomagotchi Github`,
        `Youtube Walkthrough (My Clip Only)`,
        `Youtube Walkthrough (Full)`,
      ],
      description: `A To-Do app that encourages productivity by adding experience points to
      a pet or plant assigned to each user whenever a to-do is completed.`,
      capabilities: [
        "Backend database",
        "A To-Do list that persists according to user.",
        "A sign up page that allows you pick either a pet or plant to raise.",
        "Pet profiles generated using the database and React Redux.",
        "Checking off To-Dos increased pet's experience points and image would change according to the number of experience points.",
      ],
      strategies: [
        "Tasks assigned to group members using Github Projects tab.",
        "Conducted daily stand-ups to address bugs as a group.",
        "Group members worked individually and then met together at the end of the day to do a final commit.",
      ],
      language: `HTML, CSS, Javascript`,
      credits: `Created in collaboration with Carla Herrera, Jing Mo, Sarah Stephens, and Zelda Ogiamien. Illustrations by Elizabeth "Betsy" Carter.`,
    }),
    Website.create({
      imageUrl: [],
      title: `Coding Portfolio`,
      links: [`https://github.com/betsymariecarter/betsy-coding-portfolio`],
      linkName: ["Portfolio Github"],
      description: `A react based portfolio of my coding work`,
      capabilities: ["React Routing", "Create React App Framework", "Database"],
      strategies: [],
      language: `HTML, CSS, Javascript`,
      credits: `Solo Project`,
    }),
  ]);

  console.log(`seeded successfully`);
  return {
    contacts: {
      cody: contacts[0],
      murphy: contacts[1],
    },
    websites: {
      graceshopper: websites[0],
      // unblock: websites[1],
      todo: websites[1],
      portfolio: websites[2],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
