# USC Scheduler
Usc scheduler is a scheduler that aims to make creating semestral scheduling easier. It plans to offer features for customizing the schedule like its bg banner, color pallete, and many more things. Currently it will only support being run in the browser but will probably be ported to Android and IOS if I am willing to.

## Tools
- NextJS (Framework)
- NodeJS (Server)
- Supabase & Local Postgres DB
- Prisma ORM
- NextAuth (Route Auth)
- NextThemes (I dont want to go crazy)
- more to add (as time passes)

## To-do
- API POST route that accepts a file, returns an json with schedules
- Website

## Commands (for dev)
Docker
`docker run --name usc-scheduler -p 5432:5432 -e POSTGRES_PASSWORD=1234 -d postgres`

Generate Key
`openssl rand -base64 32`