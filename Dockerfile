FROM node:8-alpine as builder
COPY . .
RUN  npm install
RUN  npm run build

FROM nginx:alpine
## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder dist /usr/share/nginx/html
EXPOSE 80