

create table "public"."cities" (
    "id" bigint primary key generated always as identity,
    "name" text,
    "population" bigint
);