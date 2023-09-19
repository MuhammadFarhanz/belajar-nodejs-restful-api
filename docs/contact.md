# Contact API Spec

## Create Contact API

Endpoint: POST /api/contacts

Headers:

- Authorization : token

Request Body:

```json
{
  "first_name": "Muhammad",
  "last_name": "Farhan",
  "email": "farhan@gmail.com",
  "phone": "0948347752"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "first_name": "Muhammad",
    "last_name": "Farhan",
    "email": "farhan@gmail.com",
    "phone": "0948347752"
  }
}
```

Response Body Error :

```json
{
  "error": "Email is not valid format"
}
```

## Update Contact API

Endpoint: PUT /api/contacts:id

Headers:

- Authorization : token

Request Body:

```json
{
  "first_name": "Muhammad",
  "last_name": "Farhan",
  "email": "farhan@gmail.com",
  "phone": "0948347752"
}
```

Response Body Success :

```json
{
  "data": {
    "first_name": "Muhammad",
    "last_name": "Farhan",
    "email": "farhan@gmail.com",
    "phone": "0948347752"
  }
}
```

Response Body Error :

```json
{
  "error": "Email is not valid format"
}
```

## Search Contact API

Endpoint: GET /api/contacts

Headers:

- Authorization : token

Query params:

- name : Search by first_name or last_name, using like, optional
- email : Search by email, using like, optional
- phone : Search by phone using like, optional
- page : number of page, default 1
- size : size per page, default 10

Response Body Success :

```json
{
  "data": [
    {
      "id": 1,
      "first_name": "Muhammad",
      "last_name": "Farhan",
      "email": "farhan@gmail.com",
      "phone": "0948347752"
    },
    {
      "id": 2,
      "first_name": "Muhammad",
      "last_name": "Farhan",
      "email": "farhan@gmail.com",
      "phone": "0948347752"
    }
  ],
  "paging": {
    "page": 1,
    "total_page": 3,
    "total_item": 30
  }
}
```

Response Body Error :

```json
{
  "error": "Contact not valid"
}
```

## Remove Contact API

Endpoint: DELETE /api/contacts:id

Headers:

- Authorization : token

Response Body Success :

```json
{
  "data": "OK"
}
```

Response Body Error :

```json
{
  "error": "Contact is not found"
}
```
