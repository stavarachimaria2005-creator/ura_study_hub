
# News Analyser Web Application

## Descriere Proiect
O aplicație web Full-Stack concepută pentru analiza inteligentă a articolelor de știri utilizând Google Gemini AI. Aplicația permite utilizatorilor să trimită URL-uri ale articolelor, extrăgând automat subiectele cheie, analizând sentimentul și comparând perspectivele între diferite surse media.

###  Problema și Soluția (Milestone 1)
* **Problema:** Supraîncărcarea informațională și dificultatea de a identifica părtinirea (bias-ul) în știri. Studenții pierd mult timp încercând să sintetizeze informații din surse multiple.
* **Soluția:** Automatizarea procesului de sinteză și analiză critică folosind LLM (Large Language Models), oferind o viziune obiectivă asupra evenimentelor curente.
* **Public Țintă:** 20+ studenți (Grup de test URA) care au nevoie de sinteze rapide pentru proiecte academice.

---

##  Arhitectura Sistemului
Aplicația urmează o arhitectură de tip Client-Server-Database, integrând un serviciu extern de AI.



---

##  Caracteristici (Features)
* **Autentificare Utilizator:** Sistem securizat de Signup/Login bazat pe JWT (JSON Web Tokens).
* **Managementul Proiectelor:** Crearea și salvarea istoricului de analize.
* **Analiză AI (Google Gemini):** * Extracția subiectelor principale.
    * Analiza sentimentului (Pozitiv/Negativ/Neutru).
    * Compararea perspectivelor între surse.
* **Web Scraping:** Extracția automată a textului din URL-uri folosind Axios și Cheerio.

---

## Tech Stack
* **Backend:** Node.js, Express.js
* **Database:** MongoDB & Mongoose
* **AI:** Google Generative AI (Gemini SDK)
* **Frontend:** React 19, React Router, Axios
* **Securitate:** JWT, Bcrypt

---

##  Instalare și Configurare

### 1. Clonarea Repository-ului
```bash
git clone <repository-url>
cd 25-26IEWebAppsNewsAnalyser

2. Configurare Backend
cd backend
npm install

Creați un fișier .env în folderul backend:
MONGO_URI=mongodb://localhost:27017/news-analyser
JWT_SECRET=cheia_ta_secreta_aici
GEMINI_API_KEY=cheia_ta_gemini_aici
PORT=5001

3. Configurare Frontend
cd ../client
npm install
npm start

 Structura Proiectului
├── backend/
│   ├── controllers/      # Logica cererilor
│   ├── middleware/       # Verificare JWT
│   ├── models/           # Scheme MongoDB (User, Project)
│   ├── services/         # Integrare Gemini AI
│   └── server.js         # Entry point backend
├── client/
│   ├── src/
│   │   ├── pages/        # Dashboard, Login, Signup
│   │   └── api.js        # Configurare apeluri Axios
└── README.md

 Plan de Monitorizare (Milestone 3)
Aplicația va utiliza un modul intern de Analytics pentru a monitoriza activitatea celor 20 de utilizatori unici necesari pentru validarea proiectului.



**Vrei să te ajut să generezi și fișierul `.env.example` pe care să-l pui pe GitHub, ca să știe colegii (utilizatorii) ce trebuie să completeze când instalează aplicația?**
