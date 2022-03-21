#npm run build-binaries

export URL="http://localhost:30002"

export HOST="localhost"
export TYPE="apps"

export RESOURCE="web_server-linux"
export FILE_PATH="builds/web_server-linux.zip"
node "/home/pierre/Documents/Mega/repos/resource_uploader/src/index.js"

read -p "Press [Enter] key to exit..."