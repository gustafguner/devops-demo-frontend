#!/usr/bin/env bash
# Push only if it's not a pull request
if [ -z "$TRAVIS_PULL_REQUEST" ] || [ "$TRAVIS_PULL_REQUEST" == "false" ]; then
  # Push only if we're testing the master branch
  if [ "$TRAVIS_BRANCH" == "master" ]; then

    # This is needed to login on docker and push the image on docker hub
    # Change it accordingly to your docker repo
    echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin 

    # Build and push
    docker build -t $IMAGE_NAME .
    echo "Pushing $IMAGE_NAME:latest"
    docker tag $IMAGE_NAME:latest $DOCKER_HUB_IMAGE_NAME:${TRAVIS_COMMIT}
    docker push $DOCKER_HUB_IMAGE_NAME:${TRAVIS_COMMIT}
    echo "Pushed $IMAGE_NAME:${TRAVIS_COMMIT}"
  else
    echo "Skipping deploy because branch is not 'master'"
  fi
else
  echo "Skipping deploy because it's a pull request"
fi