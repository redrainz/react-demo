FROM nginx:latest

WORKDIR /usr/share/nginx/html


RUN rm -rf /usr/share/nginx/html/

COPY build/. /usr/share/nginx/html/

EXPOSE 80

CMD /bin/sh -c 'nginx -g "daemon off;"'