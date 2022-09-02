# shambot

An exercise in setting up a nodejs application the 'proper' way with AWS, Docker, and more.

## Infrastructure

TBD

## Local development

1. Install docker

2. Setup required environment variables:

| Env Var            | Description                                            |
|--------------------|--------------------------------------------------------|
| `SHAMBOT_TOKEN`    | Discord bot token                                      |
| `SHAMBOT_CLIENTID` | Discord application/clientid (they are the same thing) |
| `SHAMBOT_PG_USER`  | Postgres user                                          |
| `SHAMBOT_PG_PASS`  | Postgres password                                      |

3. Run `docker compose up` (use `--build` to ensure changes take effect)