#!/usr/bin/env bash
# Push only if it's not a pull request
if [ -z "$TRAVIS_PULL_REQUEST" ] || [ "$TRAVIS_PULL_REQUEST" == "false" ]; then
  # Push only if we're testing the master branch
  if [ "$TRAVIS_BRANCH" == "master" ]; then
    
    if [ ! -d "$HOME/google-cloud-sdk/bin" ]; then rm -rf $HOME/google-cloud-sdk; export CLOUDSDK_CORE_DISABLE_PROMPTS=1; curl https://sdk.cloud.google.com | bash; fi
    source /home/travis/google-cloud-sdk/path.bash.inc
    gcloud --quiet version
    gcloud --quiet components update
    gcloud --quiet components beta update
    gcloud --quiet components update kubectl

    echo ${GCLOUD_SERVICE_KEY} | base64 --decode -i > ${HOME}/gcloud-service-key.json
    gcloud auth activate-service-account --key-file ${HOME}/gcloud-service-key.json

    gcloud --quiet config set project $GCLOUD_PROJECT_NAME
    gcloud --quiet config set container/cluster $GCLOUD_CLUSTER_NAME
    gcloud --quiet config set compute/zone ${GCLOUD_COMPUTE_ZONE}
    gcloud --quiet container clusters get-credentials $GCLOUD_CLUSTER_NAME

    kubectl config view
    kubectl config current-context

    kubectl set image deployment/frontend-deployment frontend-container=${DOCKER_HUB_IMAGE_NAME}:${TRAVIS_COMMIT} --record=true
  else
    echo "Skipping deploy because branch is not 'master'"
  fi
else
  echo "Skipping deploy because it's a pull request"
fi