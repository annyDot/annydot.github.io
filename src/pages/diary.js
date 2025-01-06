import React from "react";
import { Link } from "react-router-dom";

const Diary = () => {
  return (
    <>
      <div className="contentContainer">
        <h2>Diary.</h2>
        <div className="hr" />
        <div className="content">
          <section>
            <time className="diaryDate">
              <h3>
                <b>November 11, 2021.</b>
              </h3>
            </time>
            <p className="diaryPost">
              It's been a while! I started a new job a few months ago, my first
              job as a web developer and I'm very grateful I got a chance to
              become better at what I love doing. I've been learning Angular and
              even though I was sad I won't be coding in React anymore (at least
              while working :D), I have to say I'm actually amazed by how things
              are done in Angular. It's really powerful and a lot of things are
              actually much easier done than in React. It reinforces some really
              good coding practices and it introduced me to RxJS which currently
              occupies my mind the most. I'm excited about all the
              possibilities! True, Typescript is kind of a pain in the ass, but
              at the same time it's like the coolest thing :)
            </p>
          </section>
          <section>
            <time className="diaryDate">
              <h3>
                <b>May 23, 2021.</b>
              </h3>
            </time>
            <p className="diaryPost">
              TA-DA! I finally redesigned this website :) I went for a simple
              and responsive design. It's made using React library and custom
              CSS. I plan to keep the old design on GitHub Pages too because I
              really like it as it's more artsy/old-school. I also added the{" "}
              <Link to="/articles">
                <b>Articles</b>
              </Link>{" "}
              section so I'll have a place to keep some of my writing work.
              There'll be more stuff coming, hopefully I will have the time to
              work on it during the summer (yay! :)
            </p>
          </section>

          <section>
            <time className="diaryDate">
              <h3>
                <b>April 4, 2021.</b>
              </h3>
            </time>
            <p className="diaryPost">
              Fixed some code on this page and added a downloadable portfolio of
              my recent design work. For the past month or so I've been learning
              Javascript intensively, both on the front-end and the back-end.
              The latter is very complex to me but the more I get into it, it
              gets more interesting and I think it really helps me get a fuller
              picture of what I'm dealing with. <br />
              <br />
              I've been trying to get a clear understanding of how things
              function today on the server-side and there's a lot to catch up
              with. <br />
              REST arhitecture, JWT, serverless computing just to name a few
              concepts. There are many learning resources available online but I
              find it's not so easy to find an article or tutorial that explains
              things well. What works best for me is combining multiple
              resources and writing my own notes, but I will say that{" "}
              <a
                href="https://www.digitalocean.com/community/tutorials"
                target="_blank"
                rel="noreferrer"
              >
                <b>DigitalOcean</b>
              </a>{" "}
              and{" "}
              <a href="https://medium.com/" target="_blank" rel="noreferrer">
                <b>Medium</b>
              </a>{" "}
              usually have really good, beginner-friendly articles that explain
              things thoroughly.
            </p>
          </section>

          <section>
            <time className="diaryDate">
              <h3>
                <b>March 3, 2021.</b>
              </h3>
            </time>
            <p className="diaryPost">
              So lately I've been working on a few designs in Figma. I like it a
              lot as it is a very powerful and easy to use tool. You can see
              them in the{" "}
              <Link to="./portfolio" target="_blank">
                <b>Portfolio</b>
              </Link>{" "}
              section and on my
              <a
                href="https://dribbble.com/annydot"
                target="_blank"
                rel="noreferrer"
              >
                <b> Dribble </b>
              </a>
              profile.
            </p>
          </section>

          <section>
            <time className="diaryDate">
              <h3>
                <b>February 16, 2021.</b>
              </h3>
            </time>
            <p className="diaryPost">
              finished Machine Man layout design
              <br />
              <b>code practice:</b> React, CSS transitions/animations
            </p>
          </section>

          <section>
            <time className="diaryDate">
              <h3>
                <b>February 9, 2021.</b>
              </h3>
            </time>
            <p className="diaryPost">
              working on new layout
              <br />
              <b>code practice:</b> React, Bootstrap, Material-UI
            </p>
          </section>

          <section>
            <time className="diaryDate">
              <h3>
                <b>January 19, 2021.</b>
              </h3>
            </time>
            <p className="diaryPost">
              {" "}
              working on this page
              <br />
              <b>code practice:</b> embedding, iframe, grid, css transform,
              scrollbars, forms
            </p>
          </section>

          <section>
            <time className="diaryDate">
              <h3>
                <b>January 10, 2021.</b>
              </h3>
            </time>
            <p className="diaryPost">
              finished Ferris Wheel layout
              <br />
              <b>code practice:</b> javascript toggle, css animations and
              transitions, playing with background size and position
            </p>
          </section>

          <section>
            <time className="diaryDate">
              <h3>
                <b>December 26, 2020.</b>
              </h3>
            </time>
            <p className="diaryPost">
              finished Monochrome Particles layout
              <br />
              <b>code practice:</b> building e-commerce with js, flex and grid,
              css menu show/hide on hover
            </p>
          </section>

          <section>
            <time className="diaryDate">
              <h3>
                <b>November 13, 2020.</b>
              </h3>
            </time>
            <p className="diaryPost">
              Monochrome Particles layout - making progress
              <br />
              <b>code practice:</b> login forms
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Diary;
