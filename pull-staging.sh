# ~/projects/front
cd ~/projects/vladislav-simonenko.github.io

WORKING_DIR=dist
if [ -d "$WORKING_DIR" ]; then rm -vRf $WORKING_DIR; fi
rm -vrf /var/www/html/*
yarn
yarn build
cp -r "$WORKING_DIR"/* /var/www/html/

echo 'Development deploy finished'
