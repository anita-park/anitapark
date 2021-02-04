const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="HomeHeader">
        <h2>
          [Home]
        </h2>
        <br />
      </div>
      <h3>Hello there!</h3>
      <br />
      <h4>I am Anita Park.</h4>
      <br />
      <p>
        Welcome to my website, where you can find: <br /> <br />
        <div className="List">
          <ul>
            <li>
              {" "}
              <b>Projects</b> - I have showcased some of my projects. You can
              track progress on my Github account.
            </li>
            <li>
              <b>About</b> - including my background and experiences
            </li>
            <li>
              <b>Contact</b> - social media links, contact details and a form to
              contact
            </li>
          </ul>
        </div>{" "}
        <br />
        Please explore around, and if you have any questions, or want to contact
        me, please feel free to do so, by using the contact form!
      </p>
      <div className="GifHome">
        <iframe
          className="GifFrame"
          src="https://giphy.com/embed/hpF9R9M1PHN5e5liSx"

          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
          title="frame"
        ></iframe>
      </div>
      <p>
        <a href="https://giphy.com/gifs/fun-retro-acid-hpF9R9M1PHN5e5liSx">
          via GIPHY
        </a>
      </p>
    </div>
  );
};

export default HomePage;
