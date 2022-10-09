# shambot

An exercise in setting up a nodejs application the 'proper' way with AWS, Docker, and more.

## Infrastructure

TBD

## Local development

1. Install nodejs `16.17.0` (if running locally)

2. Install docker

3. Setup required environment variables:

| Env Var            | Description                                            |
|--------------------|--------------------------------------------------------|
| `SHAMBOT_TOKEN`    | Discord bot token                                      |
| `SHAMBOT_CLIENTID` | Discord application/clientid (they are the same thing) |
| `SHAMBOT_PG_USER`  | Postgres user                                          |
| `SHAMBOT_PG_PASS`  | Postgres password                                      |
| `SHAMBOT_PG_HOST`  | Postgres host (`localhost` when developing)            |

_Helpful string for IntelliJ environment configurations:_

`SHAMBOT_CLIENTID=123ABC;SHAMBOT_PG_PASS=123ABC;SHAMBOT_PG_USER=123ABC;SHAMBOT_TOKEN=123ABC;SHAMBOT_PG_HOST=localhost;`

4. Run `docker compose up` (use `--build` to ensure changes take effect)

## How to deploy

1. Push to master
2. It will automatically build the image, push it to AWS, and rerun the bot