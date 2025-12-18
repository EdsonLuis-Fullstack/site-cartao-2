# Use a versão oficial do Node.js
FROM node:20.13.1

# Diretório de trabalho dentro do container
WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar todas as dependências (prod + dev) para permitir build do Next.js
RUN npm install

# Copiar todo o código da aplicação
COPY . .

# Build da aplicação
RUN npm run build

# Expor a porta padrão do Next.js
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]