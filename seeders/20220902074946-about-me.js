"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "abouts",
      [
        {
          about: `I am an enthusiastic and social full-stack developer, passionate about creating beautiful web- and mobile applications.
          <br />
          <br />
          I’m at my best in a social and inspiring environment where as a team, we get the best out of every individual and create something amazing.
          <br />
          <br />
          Background: In 2020 I decided to completely change the course of my career. By asking myself what makes me happy and gives me energy for the upcoming years. The last years I’ve been working as a building engineer, where I noticed I get pleasure out of designing complex features. I started looking around, asking friends and family for advice but most importantly I started listening to what I feel passionate about. Which led me to the answer that I want to create innovative and complex websites/applications.
          <br />
          <br />
          I’m going to be a developer.`,
          portrait:
            "https://res.cloudinary.com/leaves-client/image/upload/v1661787672/portfolio-pictures/portrait_rqdn4d.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("abouts", null, {});
  }
};
