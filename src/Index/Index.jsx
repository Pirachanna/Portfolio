import React, { useState, useRef } from 'react';
import axios from "axios";

const Portfolio = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);
  const toastTimeout = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const triggerToast = (message) => {
    setToastMessage(message);
    setShowToast(true);
    if (toastTimeout.current) clearTimeout(toastTimeout.current);
    toastTimeout.current = setTimeout(() => setShowToast(false), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      triggerToast("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/contact/", formData);
      if (res.status === 200 || res.data.success) {
        triggerToast("Message sent successfully!");
        setFormData({ name: "", email: "", number: "", subject: "", message: "" });
      } else {
        triggerToast("Failed to send message.");
      }
    } catch (err) {
      console.error("Error:", err);
      triggerToast("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    {showToast && (
  <div
    role="alert"
    aria-live="assertive"
    className={`toast ${toastMessage.toLowerCase().includes("fail") ? "error" : "success"}`}
  >
    <span className="toast-icon">&#10003;</span>
        <span className="toast-message">{toastMessage}</span>

  </div>
)}

      <header className="header">
        <a href="#!" className="logo">Portfolio</a>
        <i className='bx bx-menu' id="menu-icon"></i>
        <nav className="navbar">
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#skill">Skill</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="home" id="home">
        <div className="home-content">
          <h3>Hello, It's Me</h3>
          <h1>PIRACHANNA MA SU</h1>
          <h3>And I'm a <span className="multiple-text">Full Stack Developer</span></h3>
          <p>Dedicated Bachelor of Mathematics graduate and aspiring Python Full Stack Developer skilled 
            in building responsive web applications using Django, Flask, and React. Eager to contribute my technical knowledge, problem-solving skills,
            and passion for continuous learning in a challenging development environment.</p>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/pirachannasundar..."><i className='bx bxl-linkedin'></i></a>
            <a href="https://github.com/Pirachanna"><i className='bx  bxl-github'></i></a>
            <a href="https://www.facebook.com/pirachanna.sundar"><i className='bx bxl-facebook'></i></a>
            <a href="https://wa.me/919843414019?text=Hi%2C%20I%20visited%20your%20portfolio!" target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp"><i className='bx  bxl-whatsapp'></i> </a>

          </div>
          <a href="assets/Pirachanna Resume.pdf" download="Pirachanna Resume" className="btn">Download CV</a>
        </div>
        <div className="home-img">
          <div className="img-box">
            <div className="img-item">
            <img src={`${process.env.PUBLIC_URL}/assets/Pic.png`} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-img">
          <div className="img-box1">
            <div className="img-item1">
              <img src={`${process.env.PUBLIC_URL}/assets/Pic.png`} alt="" />
            </div>
          </div>
        </div>
        <div className="about-content">
          <h2 className="heading">About <span>Me</span></h2>
          <h3>Python Full Stack Developer!</h3>
        <p>Aspiring Python Full Stack Developer with hands-on experience in Django, Flask, and React. 
           Familiar with building RESTful APIs, working with databases like PostgreSQL and MongoDB, 
           and deploying apps using Docker and AWS. Eager to learn, grow, and contribute to real-world projects with strong problem-solving skills.
        </p>
          <a href="#!" className="btn">Read More</a>
        </div>
      </section>

      <section className='services' id='services'>
          <div className="container">
            <h1 className="sub-title">My <span>Services</span></h1>
            <div className="services-list">
              <div>
                <i className='bx bx-code' style={{ color: '#00eeff' }}></i>
                <h2>Backend Development</h2>
                <ol>
                    <li type="disc">Custom API Development using Django/Flask/FastAPI.</li>
                    <li type="disc"> Business logic implementation and performance optimization.</li>
                    <li type="disc">Integration with third-party APIs and services.</li>
                    <li type="disc"> Data validation and serialization.</li>
                    </ol>
                <a href="#!" className="read">Learn More</a>
              </div>
              <div>
                    <i className="fi fi-ts-square-terminal" style={{ color: '#00eeff' }}></i>
                    <h2>Frontend Development</h2>
                    <ol>
                      <li type="disc">Responsive UI development using React.js.</li>
                      <li type="disc"> Integration with backend APIs.</li>
                      <li type="disc"> Dynamic data visualization (charts, dashboards).</li>
                      <li type="disc"> Mobile-friendly & cross-browser compatibility.</li>
                       </ol>
                    <a href="#!" className="read">Learn More</a>
                </div>
                <div>
                   <i className="fi fi-rr-database" style={{ color: '#00eeff' }}></i>
                    <h2>Database Design & Management</h2>
                    <ol>
                      <li type="disc"> Relational databases: PostgreSQL, MySQL, SQLite.</li>
                      <li type="disc"> NoSQL databases: MongoDB, Redis.</li>
                      <li type="disc"> Database schema design and normalization</li>
                      <li type="disc"> ORM integration (Django ORM, SQLAlchemy).</li>
                       </ol>
                    <a href="#!" className="read">Learn More</a>
                </div>
            </div>
          </div>
      </section>

      <section className="skill" id="skill">
      <div>
        <h1 className="sub-title">My <span>Skills</span></h1>
      </div>
    <div className='skills-wrapper'>
      <div className="skills-left" id="skills">
        <h1 className="heading1">Technical Skills</h1>
        <div className="Technical-bars">
          <div className="bar">
            <i className="bx bxl-html5" style={{ color: "#00eeff" }}></i>
            <div className="info">
              <span>HTML5</span>
            </div>
            <div className="progress-line html">
              <span></span>
            </div>
          </div>

          <div className="bar">
            <i className="bx bxl-css3" style={{ color: "#00eeff" }}></i>
            <div className="info">
              <span>CSS3</span>
            </div>
            <div className="progress-line css">
              <span></span>
            </div>
          </div>

          <div className="bar">
            <i className="bx bxl-javascript" style={{ color: "#00eeff" }}></i>
            <div className="info">
              <span>ADV.JAVASCRIPT</span>
            </div>
            <div className="progress-line javascript">
              <span></span>
            </div>
          </div>

          <div className="bar">
            <i className="bx bxl-python" style={{ color: "#00eeff" }}></i>
            <div className="info">
              <span>PYTHON</span>
            </div>
            <div className="progress-line python">
              <span></span>
            </div>
          </div>

          <div className="bar">
            <i className="bx bxl-react" style={{ color: "#00eeff" }}></i>
            <div className="info">
              <span>REACT JS</span>
            </div>
            <div className="progress-line react">
              <span></span>
            </div>
          </div>

          <div className="bar">
            <i className="bx bxl-bootstrap" style={{ color: "#00eeff" }}></i>
            <div className="info">
              <span>BOOTSTRAP</span>
            </div>
            <div className="progress-line bootstrap">
              <span></span>
            </div>
          </div>

          <div className="bar">
            <i className="bx bxl-mongodb" style={{ color: "#00eeff" }}></i>
            <div className="info">
              <span>MongoDB</span>
            </div>
            <div className="progress-line mongodb">
              <span></span>
            </div>
          </div>

          <div className="bar">
            <i className="bx bxl-django" style={{ color: "#00eeff" }}></i>
            <div className="info">
              <span>DJANGO</span>
            </div>
            <div className="progress-line django">
              <span></span>
            </div>
          </div>

          <div className="bar">
            <i className="fi fi-brands-mysql" style={{ color: "#00eeff" }}></i>
            <div className="info">
              <span>MY SQL</span>
            </div>
            <div className="progress-line my-sql">
              <span></span>
            </div>
          </div>
        </div>
      </div>

      <div className="skills-right">
        <h1 className="heading1">Professtional Skills</h1>
        <div className="radial-bars">
          <div className="radial-bar">
            <svg x="0px" y="0px" viewBox="0 0 200 200">
              <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
              <circle className="path path-1" cx="100" cy="100" r="80"></circle>
            </svg>
            <div className="percentage">90%</div>
            <div className="text">Creativity</div>
          </div>

          <div className="radial-bar">
            <svg x="0px" y="0px" viewBox="0 0 200 200">
              <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
              <circle className="path path-2" cx="100" cy="100" r="80"></circle>
            </svg>
            <div className="percentage">65%</div>
            <div className="text">Communication</div>
          </div>

          <div className="radial-bar">
            <svg x="0px" y="0px" viewBox="0 0 200 200">
              <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
              <circle className="path path-3" cx="100" cy="100" r="80"></circle>
            </svg>
            <div className="percentage">75%</div>
            <div className="text">Problem Solving</div>
          </div>

          <div className="radial-bar">
            <svg x="0px" y="0px" viewBox="0 0 200 200">
              <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
              <circle className="path path-4" cx="100" cy="100" r="80"></circle>
            </svg>
            <div className="percentage">85%</div>
            <div className="text">Teamwork</div>
          </div>
        </div>
      </div>
      </div>
    </section>

<section className="contact" id="contact">
  <h2 className="heading">Contact <span>Me!</span></h2>
  <form onSubmit={handleSubmit}>
    <div className="row mb-3">
      <div className="col-md-6 mb-3 mb-md-0">
        <input
          type="text"
          className="form-control"
          placeholder="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="col-md-6">
        <input
          type="email"
          className="form-control"
          placeholder="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
    </div>

    <div className="row mb-3">
      <div className="col-md-6 mb-3 mb-md-0">
        <input
          type="tel"
          className="form-control"
          placeholder="Mobile Number"
          name="number"
          value={formData.number}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6">
        <input
          type="text"
          className="form-control"
          placeholder="Email Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
      </div>
    </div>

    <div className="mb-3">
      <textarea
        className="form-control"
        placeholder="Your Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        rows="6"
      />
    </div>

    <div className="text-center">
      <button
        type="submit"
        className="btn btn-primary"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </div>
  </form>
</section>


      <footer className="footer">
        <div className="footer-text">
          <p>Copyright &copy; Pirachanna | All rights reserved.</p>
        </div>
        <div className="footer-iconTop">
          <a href="#home"><i className="bx bx-up-arrow-alt"></i></a>
        </div>
      </footer>
    </>
  );
};

export default Portfolio;
