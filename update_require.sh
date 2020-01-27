git config --global user.name "iphe-updater"
git clone --depth=1 --branch=master https://github.com/Arkanic/iphe
cd clientside-require
git clone --depth=1 --branch=master https://github.com/uladkasach/clientside-require
git add .
git commit -m "Update to match ${TRAVIS_TAG}"
git push https://Arkanic:${GH_PUSH_TOKEN}@github.com/Arkanic/iphe