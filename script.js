/* --- Ditt gamla CSS: --- */

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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}
.service-card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}
.service-card:hover,
.service-card:focus {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0,0,0,0.15);
}
.service-card h3 {
  margin-bottom: 0.5rem;
  color: #1e3c72;
}
.service-card p {
  color: #555;
  font-size: 1rem;
}
/* About */
.about-section {
  background: #e6f0ff;
  padding: 3rem 1rem;
  margin-top: 3rem;
  border-radius: 12px;
  color: #1e3c72;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.1rem;
  line-height: 1.8;
}
/* Kontakt */
.contact-section {
  margin-top: 3rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}
.contact-section h2 {
  color: #1e3c72;
  font-weight: 700;
  margin-bottom: 1rem;
}
.contact-section label {
  display: block;
  margin-top: 1rem;
  margin-bottom: 0.3rem;
  font-weight: 600;
}
.contact-section input[type="text"],
.contact-section input[type="email"],
.contact-section textarea {
  width: 100%;
  padding: 0.7rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
  resize: vertical;
}
.contact-section button {
  margin-top: 1.5rem;
  padding: 0.9rem 2rem;
  background: #1e3c72;
  color: white;
  border: none;
  border-radius: 30px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.contact-section button:hover,
.contact-section button:focus {
  background-color: #16315b;
}
.contact-info {
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: #666;
}
/* Footer */
footer {
  text-align: center;
  padding: 1rem;
  margin-top: 3rem;
  background: #1e3c72;
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
}

/* --- Offertfunktion CSS --- */

.quote-section {
  background: #f0f5ff;
  padding: 2rem 1rem;
  margin-top: 3rem;
  border-radius: 12px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  color: #1e3c72;
}
.quote-section h2 {
  font-weight: 700;
  margin-bottom: 1rem;
}
.quote-section form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.quote-section label {
  font-weight: 600;
}
.range-labels {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #555;
  margin-top: -10px;
  margin-bottom: 10px;
}
input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
  height: 6px;
  border-radius: 5px;
  background: #ddd;
  outline: none;
  cursor: pointer;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #1e3c72;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
input[type="range"]:focus::-webkit-slider-thumb,
input[type="range"]:hover::-webkit-slider-thumb {
  background-color: #16315b;
}
.radio-group {
  display: flex;
  gap: 2rem;
  margin-top: 0.3rem;
}
.radio-group label {
  font-weight: normal;
  cursor: pointer;
}
.price-output {
  margin-top: 1rem;
  font-size: 1.3rem;
  font-weight: 700;
  color: #16315b;
}

/* --- Responsive --- */
@media (max-width: 768px) {
  nav ul {
    position: fixed;
    top: 70px;
    right: -100%;
    background: #1e3c72;
    height: calc(100% - 70px);
    width: 220px;
    flex-direction: column;
    padding-top: 2rem;
    gap: 1.5rem;
    transition: right 0.3s ease;
    z-index: 1001;
  }
  nav ul.active {
    right: 0;
  }
  .hamburger {
    display: flex;
  }
}
