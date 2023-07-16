"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "projects",
      [
        {
          project: "Easy Coding",
          image:
            "https://res.cloudinary.com/leaves-client/image/upload/v1661787679/portfolio-pictures/easycoding_bkzkys.png",
          company: "Full-stack @ Codaisseur Academy",
          description: `Group assignment in the final weeks of the academy to create a website from scratch with 3 people in 1 week.
          </br></br>This is an app created for developers who need help how to implement a new feature or dependency. Through this app a user can upload a post to help others code in the easiest possible way, or even request a matter that they have trouble with, so eventually another user can and post something about it.`,
          url: "https://easy-coding.netlify.app/",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          project: "Leaves",
          image:
            "https://res.cloudinary.com/leaves-client/image/upload/v1661787688/portfolio-pictures/leaves_z1fcl2.png",
          company: "Full-stack @ Codaisseur Academy",
          description: `Final assignment after a 3 month academy to think of a concept and create a complete website from scratch within 1 week. 
          </br></br>Leaves is a social platform where you can share your (favorite) plants with others users and friends. On the homepage popular suggestions are displayed and on the 'Leaves' page you can see all plants users added to share with the community.`,
          url: "https://leaves-community.netlify.app/",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          project: "Rijksportaal - Intranet Dutch Government",
          image:
            "https://res.cloudinary.com/leaves-client/image/upload/v1661787677/portfolio-pictures/rijksportaal_rvnusg.jpg",
          company: "Back-end developer @ Ministerie van Binnenlandse Zaken",
          description: `Building the new intranet for the Dutch government using Java and Bloomreach CMS headless. 
          Creating components in the CMS system and adjusting or creating custom components using Java. </br></br>
          I was also responsible for a small team to deliver training material for future editors and the associated communication with the business`,
          url: "",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          project: "PRO - Dutch Government websites",
          image:
            "https://res.cloudinary.com/leaves-client/image/upload/v1661787684/portfolio-pictures/rijksoverheid_jzle2b.png",
          company: "Back-end developer @ Ministerie van Algemene Zaken",
          description: `Improving, maintaining and upgrading the websites of the Dutch government using Java and Bloomreach CMS. This included setting up the MVP CI/CD Pipeline in Jenkins and upgrading the Bloomreach CMS system to the latest version.
            </br></br> Using a Groovy script and Jenkins we created a CI/CD pipeline with different stages spawning a Kubernetes test environment with a Docker image to automate SonarQube quality, unit, performance and other tests.`,
          url: "",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("projects", null, {});
  }
};
