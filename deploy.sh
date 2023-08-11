echo "Building app..."
npm run build

echo "Deploying..."
scp -r build/* gkchris:/var/www/gkchris.space/

echo "Done!