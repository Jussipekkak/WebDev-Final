# WebDev-Final

Siivouspelvelun web-sivusto, jossa on varauskalenteri ja yhteydenottolomake. Backend on Express/MongoDB-palvelu, joka tallentaa varaukset ja lähettää Mailtrapin kautta ilmoituksia.

Esittely video: https://youtu.be/2Hh4z-gHG6I

## Sisältö ja rakenne
- `frontend/`: Vite + React -sovellus 
- `backend/`: Express API, MongoDB-yhteys, Mailtrap-sähköposti-ilmoitukset.
- `Dockerfile`: Rakentaa frontendin ja käynnistää backendin samassa kontissa.

## Vaatimukset
- Node.js >= 18 ja npm
- MongoDB-tietokanta
- Mailtrap-tunnukset (tai muu SMTP)

## Käyttöönotto paikallisesti
1) Asenna riippuvuudet:
```bash
cd frontend && npm install
cd ../backend && npm install

2) Aseta ympäristömuuttujat
# backend/.env
PORT=8080
MONGODB_URI=mongodb+srv://<user>:<pass>@<cluster>/<db>
MAILTRAP_USER=<user>
MAILTRAP_PASS=<pass>

3) Käynnistä palvelu
Käynnistä Docker

docker build -t webdev-final .
docker run -p 8080:8080 webdev-final

TAI

cd backend
npm start

cd frontend
npm run dev

