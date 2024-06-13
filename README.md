## users `/users`

user:
userName: string,   uniquely identifies the user
firstName: string, first name of the user
lastName: string,  last name of the user
email: string,     email of the user
passHash: string,  hashed password of the user
role: string,      role of the user (root, admin, technitian, manager, user)
department: string, department of the user
position: string,  position of the user
phone: string,     phone number of the user

### POST /create
create a new user
requires authentication and admin/root role

{
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: string
    phone: string
    department: string,
    position: string,
}

### DELETE /delete/:id
delete a user
requires authentication and admin/root role

### PUT /update/:id
update a user
requires authentication and admin/root role

{
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: string
    phone: string
    department: string,
    position: string,
}

### GET /:id
get a user by id
requires authentication and admin/root role

### GET /login
login a user
{
    email: string,
    password: string
}
response
{
    token: string
}


