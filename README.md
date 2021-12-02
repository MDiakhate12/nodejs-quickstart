# Deploy Simple NodeJS app to Google Cloud RUN

## With container registry
```bash
docker build -t gcr.io/[PROJECT_ID]/[CONTAINER_NAME] .
docker push
gcloud run deploy [SERVICE_NAME] --image gcr.io/[PROJECT_ID]/[CONTAINER_NAME]
```

## With artifact registry
```bash
gcloud auth configure-docker [REGION]-docker.pkg.dev
docker build -t [SOURCE_IMAGE] [REGION]-docker.pkg.dev/[PROJECT_ID]/[REPOSITORY]/[IMAGE] .
docker push
gcloud run deploy [SERVICE_NAME] --image [REGION]-docker.pkg.dev/[PROJECT_ID]/[REPOSITORY]/[IMAGE]
```
