# User API Spec

## Register User API

Endpoint : POST /api/users

Request Body :

```json
{
  "username": "farhan",
  "password": "secret",
  "name": "Muhammad Farhan"
}
```

Response Body Success :

```json
{
  "data": {
    "username": "farhan",
    "name": "Muhammad Farhan"
  }
}
```

Response Body Error :

```json
{
  "errors": "Username already Registered"
}
```

## Login User API

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username": "farhan",
  "password": "secret"
}
```

Response Body Success :

```json
{
  "data": {
    "token": "unique-token"
  }
}
```

Response Body Error :

```json
{
  "errors": "Username or password wrong"
}
```

## Update User API

Endpoinst : PATCH /api/users/current

Headers :

- Authorization : token

Request Body:

```json
{
  "name": "Muhammad Farhan Lagi", // optional
  "password": "new password" //optional
}
```

Response Body Success :

```json
{
  "username": "Farhan",
  "name": "Muhamad Farhan Lagi"
}
```

Response Body Error :

```json
{
  "errors": "max name length 100"
}
```

## Get User API

Endpoint : GET /api/users/current

Headers :

-Authorization : token

Response Body Success:

```json
{
  "data": {
    "username": "Farhan",
    "name": "Muhamad Farhan"
  }
}
```

Response Body Error :

```json
{
  "errors": "Unauthorized"
}
```

## Logout User API

Endpoint : DELETE /api/users/logout

Headers :

-Authorization : token

Response Body Success :

```json
{
  "data": "OK"
}
```

Response Body Error :

```json
{
  "data": "Unauthorized"
}
```
