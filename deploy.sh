echo "Building app..."
npm run build

echo "Deploying..."
scp -r build/* root@95.217.2.63:var/www/gkchris.space/

echo "Done!"