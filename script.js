/* Grundinställningar */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
  background-color: #f9fafc;
  color: #333;
  line-height: 1.6;
}

/* Container */
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

/* Header */
header {
  position: sticky;
  top: 0;
  background: #1e3c72;
  color: white;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
.logo {
  font-weight: 700;
  font-size: 1.8rem;
}
nav ul {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}
nav ul li a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}
nav ul li a:hover,
nav ul li a:focus {
  color: #ffd600;
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;
}
.hamburger span {
  width: 25px;
  height: 3px;
  background: white;
  border-radius: 2px;
}

/* Hero */
#hero {
  background: url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80') no-repeat center center/cover;
  height: 70vh;
  display: flex;
  align-items: center;
  text-align: center;
  color: white;
  position: relative;
}
#hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(30, 60, 114, 0.75);
  z-index: 0;
}
.hero-container {
  position: relative;
  z-index: 1;
  max-width: 700px;
  margin: 0 auto;
}
#hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}
#hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}
.btn-primary {
  background-color: #ffd600;
  color: #1e3c72;
  padding: 0.85rem 3rem;
  border-radius: 30px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: inline-block;
}
.btn-primary:hover,
.btn-primary:focus {
  background-color: #e6c200;
}

/* Services */
.services-section {
  text-align: center;
  margin-top: 3rem;
}
.services-section h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #1e3c72;
  font-weight: 700;
}
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(260px,1fr));
  gap: 2rem;
}
.service-card {
  background: white;
  padding: 1.8rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: default;
}
.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.15);
}
.service-card h3 {
  margin-bottom: 0.8rem;
  color: #1e3c72;
  font-weight: 700;
}

/* About */
.about-section {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 12px;
  margin: 4rem 0;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}
.about-section h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
  color: #1e3c72;
  font-weight: 700;
}
.about-section p {
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.8;
  text-align: center; /* Här är den tillagda raden för att centrera texten */
}

/* Contact */
.contact-section {
  margin-bottom: 4rem;
}
.contact-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #1e3c72;
  font-weight: 700;
}
#contact-form {
  max-width: 600px;
  margin: 0 auto 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
#contact-form label {
  font-weight: 600;
}
#contact-form input,
#contact-form textarea {
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  resize: vertical;
  transition: border-color 0.3s ease;
}
#contact-form input:focus,
#contact-form textarea:focus {
  border-color: #1e3c72;
  outline: none;
}
#contact-form button {
  background-color: #1e3c72;
  color: white;
  padding: 0.85rem 2rem;
  border: none;
  border-radius: 30px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
#contact-form button:hover,
#contact-form button:focus {
  background-color: #16335b;
}
#form-message {
  text-align: center;
  color: #d93025;
  font-weight: 600;
  margin-top: 0.5rem;
}
.contact-info {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
}

/* Footer */
footer {
  background-color: #e2e8f0;
  text-align: center;
  padding: 1.5rem 1rem;
  font-size: 0.9rem;
  color: #555;
}

/* Responsiv hamburger */
@media (max-width: 768px) {
  nav ul {
    position: fixed;
    top: 70px;
    right: -100%;
    height: calc(100vh - 70px);
    background-color: #1e3c72;
    flex-direction: column;
    width: 250px;
    padding-top: 2rem;
    gap: 2rem;
    transition: right 0.3s ease;
  }
  nav ul.active {
    right: 0;
  }
  nav ul li a {
    font-size: 1.2rem;
    padding: 0 1.5rem;
    display: block;
  }
  .hamburger {
    display: flex;
  }
}

