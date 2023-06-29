
### openssl

```sh
f=book_0.json
pri=book_0_private.pem
pub=book_0_public.pem
enc=book_0.enc
openssl req -x509 -nodes -newkey rsa:2048 -keyout $pri -out $pub -subj '/'
openssl smime -encrypt -aes256 -in $f -binary -outform DEM -out $enc $pub
openssl smime -decrypt -in $enc -binary -inform DEM -inkey $pri
```
