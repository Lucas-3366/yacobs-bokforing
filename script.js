/* Reset och grund */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #222;
}

body {
  background: #f9f9f9;
  line-height: 1.6;
  font-size: 16px;
}

/* Container maxbredd och centrerat */
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

/* HEADER */
header {
  background-color: #003366; /* Mörkblå */
  color: #fff;
  padding: 20px 0;
  box-shadow: 0 3px 6px rgba(0,0,0,0.1);
}

header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header h1 {
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 2px;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 25px;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

nav ul li a:hover,
nav ul li a:focus {
  color: #ffcc00; /* Gul highlight */
}

/* HERO SEKTION */
.hero {
  background: linear-gradient(135deg, #005599 0%, #003366 100%);
  color: #fff;
  padding: 80px 0 100px;
  text-align: center;
  position: relative;
}

.hero-content {
  max-width: 700px;
  margin: 0 auto;
}

.hero h2 {
  font-size: 2.8rem;
  margin-bottom: 20px;
  font-weight: 700;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 40px;
  font-weight: 500;
  line-height: 1.4;
}

.hero img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.25);
}

/* VÅRA TJÄNSTER */
.tjanster {
  background-color: #fff;
  padding: 60px 0;
  text-align: center;
}

.tjanster h2 {
  font-size: 2.4rem;
  margin-bottom: 40px;
  color: #003366;
  font-weight: 700;
}

.tjanster ul {
  list-style: none;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
}

.tjanster ul li {
  background-color: #e6f0ff;
  color: #003366;
  padding: 18px 30px;
  border-radius: 40px;
  font-weight: 600;
  font-size: 1.1rem;
  box-shadow: 0 3px 6px rgba(0,0,0,0.1);
  flex: 1 1 130px;
  max-width: 180px;
}

/* OFFERT */
.offert {
  background-color: #f0f7ff;
  padding: 60px 20px;
  text-align: center;
}

.offert h2 {
  font-size: 2.4rem;
  margin-bottom: 30px;
  color: #003366;
  font-weight: 700;
}

.offert form {
  max-width: 480px;
  margin: 0 auto;
  background: #fff;
  padding: 30px 40px;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0,0,0,0.1);
  text-align: left;
}

.offert label {
  display: block;
  font-weight: 600;
  margin-bottom: 8px;
  color: #003366;
}

.offert select {
  width: 100%;
  padding: 10px 12px;
  font-size: 1rem;
  border-radius: 6px;
  border: 2px solid #ccc;
  margin-bottom: 25px;
  transition: border-color 0.3s ease;
}

.offert select:focus {
  border-color: #005599;
  outline: none;
}

.offert p {
  font-size: 1.2rem;
  font-weight: 700;
  color: #003366;
  margin-top: 10px;
  text-align: center;
}

/* KONTAKT */
.kontakt {
  background-color: #fff;
  padding: 60px 20px;
  text-align: center;
}

.kontakt h2 {
  font-size: 2.4rem;
  margin-bottom: 40px;
  color: #003366;
  font-weight: 700;
}

.kontakt form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}

.kontakt label {
  display: block;
  font-weight: 600;
  margin-bottom: 8px;
  color: #003366;
}

.kontakt input,
.kontakt textarea {
  width: 100%;
  padding: 12px 14px;
  margin-bottom: 25px;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  font-family: inherit;
}

.kontakt input:focus,
.kontakt textarea:focus {
  border-color: #005599;
  outline: none;
}

.kontakt button {
  background-color: #003366;
  color: #fff;
  font-size: 1.1rem;
  padding: 14px 30px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  font-weight: 700;
  width: 100%;
  max-width: 180px;
  transition: background-color 0.3s ease;
}

.kontakt button:hover,
.kontakt button:focus {
  background-color: #005599;
}

/* RESPONSIVT */
@media (max-width: 768px) {
  header .container {
    flex-direction: column;
    gap: 15px;
  }

  nav ul {
    flex-direction: column;
    gap: 15px;
  }

  .tjanster ul {
    flex-direction: column;
  }

  .hero h2 {
    font-size: 2rem;
  }

  .hero p {
    font-size: 1rem;
  }

  .offert form,
  .kontakt form {
    padding: 20px;
  }
}
