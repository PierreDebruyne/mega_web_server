mkdir tmp

mkdir tmp/linux
cp apps/linux/* tmp/linux/
cp binaries/web_server-linux tmp/linux
chmod +x tmp/linux/*

rm -rf builds
mkdir builds
zip -j builds/web_server-linux.zip tmp/linux/*

