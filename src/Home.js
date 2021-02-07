import pic from "./profile.jpg"
const HomePage = () => {
  return (
    <div className="Page">
      <h2 className="h2">Home</h2>
      <br/>
      <img src={pic} alt="Anita Park" className="Me"/>
      <h3>Hello there!</h3>
      <h4>I am Anita Park.</h4>

      <br />
      <p>
        Welcome to my website! Here you can find: <br /> <br />
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
      <br/>
      <footer>
        Anita Park 
        <br/>
        Copyright 2021 &copy;
      </footer>
      <br/>
    </div>
  );
};

export default HomePage;
