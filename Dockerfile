FROM nginx:alpine

# Configura o Nginx para ouvir na porta 8080 (padrão do Cloud Run)
RUN sed -i 's/listen       80;/listen       8080;/g' /etc/nginx/conf.d/default.conf

COPY . /usr/share/nginx/html

# Expõe a porta 8080
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
