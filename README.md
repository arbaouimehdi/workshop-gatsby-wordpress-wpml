# Gatsby Wordpress (ACF and WPML Plugins)

## Install Wordpress by Using Docker

- `docker-compose up -d` to install wordpress
- `sudo docker exec -it gatsby_wordpress /bin/bash` to access to the wordpress source files on "/var/www/html"
- `chmod a+rw /var/www/html/wp-content/themes /var/www/html/wp-content/plugins ` to temporarily allow full permissions(rwx) for the folder `themes` folder and `plugins`
- Access to the WordPress Dashboard and install these plugins:
  - [ACF Pro](https://www.advancedcustomfields.com/pro/) or [ACF](https://wordpress.org/plugins/advanced-custom-fields/) to add custom fields to posts and pages.
  - [ACF to REST API](https://github.com/airesvsg/acf-to-rest-api) to expose **Advanced Custom Fields** endpoints in the **Wordpress REST API**
  - [WPML Multilingual CMS](https://wpml.org/) multilingual Plugin **(not FREE)**
  - Install [WPML-REST-API](https://github.com/shawnhooper/wpml-rest-api) which adds the current locale and available translations to all post types translated with WPML.
- Install [JSON Viewer](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh) chrome extension for formating and highlighting the preview of JSON files.

