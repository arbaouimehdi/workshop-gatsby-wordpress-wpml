# Gatsby Wordpress (ACF and WPML Plugins)

## Install Wordpress by Using Docker

- `docker-compose up -d` to install wordpress
- `sudo docker exec -it gatsby_wordpress /bin/bash` to access to the wordpress source files on "/var/www/html"
- `chmod a+rw /var/www/html/wp-content/themes` to temporarily allow full permission for the folder `themes` folder  
