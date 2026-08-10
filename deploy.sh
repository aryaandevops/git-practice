#!/bin/bash

sudo -i

apt update

apt install apache2 git -y

cd /tmp

git clone https://github.com/aryaandevops/Portfolio.git

rm -rf /var/www/html/*

mv Portfolio/* /var/www/html/

systemctl restart apache2

echo "Website deployed successfully!"
