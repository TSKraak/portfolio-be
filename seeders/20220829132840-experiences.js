"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "experiences",
      [
        {
          title: "Digital Engineer - Full-stack developer",
          logo: "https://res.cloudinary.com/leaves-client/image/upload/v1661787675/portfolio-pictures/capgemini_ag0iv7.jpg",
          company: "Capgemini",
          period: `Feb 2021 - Present`,
          description:
            "Working for different clients as a consultant and full-stack developer. See 'Projects' for more information.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Career transition",
          logo: "https://res.cloudinary.com/leaves-client/image/upload/v1661787676/portfolio-pictures/codaisseur_xrc0ec.svg",
          company: "Career Break",
          period: "Jul 2020 - Feb 2021 · 8 months",
          description:
            "Taking a bootcamp at Codaisseur and online courses to switch career to Full-Stack Developer.",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Building Engineer",
          logo: "https://res.cloudinary.com/leaves-client/image/upload/v1661787672/portfolio-pictures/AVB_yoy8ko.png",
          company: "AVB (Amsterdams Vastgoed Beheer)",
          period: "Sep 2018 - Jul 2020 · 1 yr 11 months",
          description:
            "Preparing and applying permits for building/renovation projects, including architectural drawings and discussing plans and drawings with clients.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Project Manager",
          logo: "https://res.cloudinary.com/leaves-client/image/upload/v1661787676/portfolio-pictures/sineth_dvvvdi.svg",
          company: "Sineth Engineering B.V.",
          period: "Jun 2015 - Aug 2018 · 3 yrs 3 months",
          description:
            "Supervising building projects are carried out as planned and consulting contractors, including maintaining contact with clients and budget management.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Underwriter Technical Insurances CAR",
          logo: "https://res.cloudinary.com/leaves-client/image/upload/v1661787676/portfolio-pictures/deltalloyd_zhpmlv.png",
          company: "Delta Lloyd, Technische Verzekeringen",
          period: "Feb 2012 - May 2015 · 3 yrs 4 months",
          description: `Assessing, determining conditions and accepting insurances for the construction of buildings and installations. 
            Implementing a new program to make quotations and keep the database of insurances for the company using Scrum method.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Inspecteur Bouwen & Wonen",
          logo: "https://res.cloudinary.com/leaves-client/image/upload/v1661787676/portfolio-pictures/gemeente-amsterdam_rvup3j.png",
          company: "Gemeente Amsterdam, Stadsdeel Centrum · Full-time",
          period: "Jul 2011 - Feb 2012 · 8 months",
          description:
            "Checking the condition of buildings/housing, state of the construction/fundament and checking building projects are following the regulations in Amsterdam.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("experiences", null, {});
  },
};
