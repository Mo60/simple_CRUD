# simple_CRUD
this is simple CRUD application using Mongodb
# to get self signed certificate
```
> openssl genrsa -out key.pem
> openssl req -new -key key.pem -out csr.pem
> openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out cert.pem

```
