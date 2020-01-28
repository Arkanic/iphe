git config --global user.name "iphe-updater"
git submodule add https://github.com/uladkasach/clientside-require clientside-require
git add .
git commit -m "Update to match ${TRAVIS_TAG}"
git push https://Arkanic:${GH_PUSH_TOKEN}@github.com/Arkanic/iphe