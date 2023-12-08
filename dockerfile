# Use a imagem oficial do Node.js como base
FROM node:latest

# Crie e defina o diretório de trabalho dentro do contêiner
WORKDIR  /home/app

# Copie os arquivos do projeto para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante dos arquivos do projeto para o diretório de trabalho
COPY . .

# Exponha a porta em que a aplicação estará em execução
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
