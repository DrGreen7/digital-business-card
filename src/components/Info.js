import profile from "../images/dp.jpg";
function Info() {
  return (
    <header>
      <img src={profile} alt="" />
      <div className="container">
        <h1>Dr.Green</h1>
        <p className="jt">Frontend Developer</p>
        <p>Dr.Green7.website</p>
      </div>
      <button className="btn">
        <i class="fa-solid fa-envelope"></i>
        Email
      </button>
      <button className="btn btn-blue">
        <i class="fa-brands fa-linkedin"></i>Linkedin
      </button>
    </header>
  );
}

export default Info;
