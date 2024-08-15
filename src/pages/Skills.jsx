import React, { useState } from "react";
import "./Skills.css";
const Skills = () => {
  const [selectedTab, setSelectedTab] = useState("tab-A");
  const tabs = [
    {
      id: "tab-A",
      title: "Front - end Development",
      content: (
        <ul>
          <li>
            <img
              src="https://www.brianwachira.dev/icons/html-5.png"
              alt="HTML"
            />
            <a href="#">HTML</a>
          </li>
          <li>
            <img src="https://www.brianwachira.dev/icons/css.png" alt="CSS" />
            <a href="#">CSS</a>
          </li>
          <li>
            <img
              src="https://www.brianwachira.dev/icons/js.png"
              alt="JavaScript"
            />
            <a href="#">JavaScript</a>
          </li>
          <li>
            <img
              src="https://w7.pngwing.com/pngs/606/221/png-transparent-jquery-original-logo-icon.png"
              alt="jQuery"
            />
            <a href="#">jQuery</a>
          </li>
          <li>
            <img
              src="https://www.brianwachira.dev/icons/react-2.svg"
              alt="React"
            />
            <a href="#">React</a>
          </li>
          <li>
            <img
              src="https://www.brianwachira.dev/icons/bootstrap.png"
              alt="Bootstrap"
            />
            <a href="#">Bootstrap</a>
          </li>
        </ul>
      ),
    },
    {
      id: "tab-B",
      title: "Backend Development",
      content: (
        <ul>
          <li>
            <img src="https://www.brianwachira.dev/icons/nodejs-1.svg" />
            <p>NodeJS</p>
          </li>
          <li>
            <img src="https://www.gstatic.com/mobilesdk/240501_mobilesdk/firebase_28dp.png" />
            <p>Firebase</p>
          </li>
        </ul>
      ),
    },
    {
      id: "tab-C",
      title: "Testing",
      content: (
        <ul>
          <li>
            <img src="https://www.brianwachira.dev/icons/cypress.svg" />
            <p>Cypress</p>
          </li>
        </ul>
      ),
    },
    {
      //
      id: "tab-D",
      title: "UI Design",
      content: (
        <ul>
          <li>
            <img src="https://www.brianwachira.dev/icons/figma-1.svg" />
            <p>Figma</p>
          </li>
        </ul>
      ),
    },
    {
      id: "tab-E",
      title: "Soon to be learned",
      content: (
        <ul>
          <li>
            <img
              src="https://w7.pngwing.com/pngs/234/329/png-transparent-python-logo-thumbnail.png"
              alt="Python"
            />
            <p>Python</p>
          </li>
          <li>
            <img
              src="https://w7.pngwing.com/pngs/159/366/png-transparent-django-python-computer-icons-logo-python-text-label-rectangle-thumbnail.png"
              alt="Django"
            />
            <p>Django</p>
          </li>
          <li>
            <img
              src="https://w7.pngwing.com/pngs/170/924/png-transparent-microsoft-sql-server-microsoft-azure-sql-database-microsoft-text-logo-microsoft-azure-thumbnail.png"
              alt="SQL"
            />
            <p>SQL</p>
          </li>
          <li>
            <img
              src="https://w7.pngwing.com/pngs/584/787/png-transparent-wagtail-full-logo-tech-companies.png"
              alt="Wagtail"
            />
            <p>Wagtail</p>
          </li>
        </ul>
      ),
    },
  ];
  return (
    <>
      <div className="container">
        <div className="skill">
          <h2>Skills.</h2>
          <p
            style={{ width: "400px", fontSize: "1.2em", textAlign: "justify" }}
          >
            With a diverse range of skills, including expertise in ReactJS,
            Firebase, Cypress, REST API, and Figma, I am a versatile software
            engineer with the ability to tackle a wide variety of projects and
            challenges.
          </p>
          <div className="SkillsContainer">
            <menu role="tabList">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={selectedTab === tab.id}
                  aria-controls={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                >
                  <span>{tab.title}</span>
                </button>
              ))}
            </menu>
            <section className="Skills">
              {tabs.map((tab) => (
                <article
                  key={tab.id}
                  role="tabpanel"
                  id={tab.id}
                  hidden={selectedTab !== tab.id}
                >
                  {tab.content}
                </article>
              ))}
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
