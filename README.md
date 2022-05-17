## Setup Local Server

1. Add `server/docker-compose.local.yml` file

Copy and paste the contents of `docker-compose.template.yml`.

2. Specify env-vars for `server/docker-compose.local.yml`

These mandatory env vars are for file storage and email notifications.

```
export AWS_STORAGE_BUCKET_NAME=xyz
export AWS_ACCESS_KEY_ID=xyz
export AWS_SECRET_ACCESS_KEY=xyz
export SEND_GRID_KEY=xyz
```

The file `server/docker-compose.local.yml` is in `.gitignore` so you can add sensitive env-vars.

3. Run Docker Compose

```
docker-compose -f docker-compose.local.yml up
docker-compose -f docker-compose.local.yml up
```

Server should be running on http://127.0.0.1:8000

Admin Creds: admin@example.com, password

## Setup Local Website

1. Add `website/.env.local` file

```
NEXT_PUBLIC_SERVER_HTTP_URL=http://127.0.0.1:8000
NEXT_PUBLIC_SERVER_WSS_URL=ws://127.0.0.1:8000
NEXT_PUBLIC_IS_SIGNUP_BLOCKED=false
```

The `website/.env.local` file is in `.gitignore`.

2. Install and Run

```
cd website
yarn # install components / apply .env
yarn run dev
```

Server should be running on http://localhost:3000
