# Käytetään virallista Node.js-kuvaa
FROM node:20

# Määritellään työskentelyhakemisto
WORKDIR /app

# Kopioidaan package.json ja package-lock.json frontendistä ja backendistä
COPY backend/package*.json ./backend/
COPY frontend/package*.json ./frontend/

# Asennetaan riippuvuudet frontendille ja backendille
RUN cd frontend && npm install
RUN cd backend && npm install

# Kopioidaan koko projekti (frontend ja backend)
COPY . .

# Rakennetaan frontend
RUN cd frontend && npm run build

# Määritellään portti, johon palvelin kuuntelee
EXPOSE 8080

# Käynnistetään backendin palvelin
CMD ["node", "backend/server.js"]
