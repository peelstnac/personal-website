create table accounts (
    id int not null primary key,
    username varchar(25) not null,
    password text not null,
    role text
);