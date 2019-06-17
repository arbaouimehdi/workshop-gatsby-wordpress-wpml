# Gatsby Wordpress (ACF and WPML Plugins)

## Install Wordpress by Using Docker

- `docker-compose up -d` to install wordpress
- `sudo docker exec -it gatsby_wordpress /bin/bash` to access to the wordpress source files on "/var/www/html"
- `chmod a+rw /var/www/html/wp-content/themes /var/www/html/wp-content/plugins ` to temporarily allow full permissions(rwx) for the folder `themes` folder and `plugins`
- Access to the WordPress Dashboard from [http://localhost:8000](http://localhost:8000) and install these plugins:
  - [ACF Pro](https://www.advancedcustomfields.com/pro/) or [ACF](https://wordpress.org/plugins/advanced-custom-fields/) to add custom fields to posts and pages.
  - [ACF to REST API](https://github.com/airesvsg/acf-to-rest-api) to expose **Advanced Custom Fields** endpoints in the **Wordpress REST API**
  - [WPML Multilingual CMS](https://wpml.org/) multilingual Plugin **(not FREE)**
  - Install [WPML-REST-API](https://github.com/shawnhooper/wpml-rest-api) which adds the current locale and available translations to all post types translated with WPML.
- Install [JSON Viewer](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh) chrome extension for formating and highlighting the preview of JSON files.

## Create a new Gatsby Project
- Install [gatsby-cli](https://www.gatsbyjs.org/docs/gatsby-cli/) if it's not installed in your Machine 
- Start `gatby new gatsby-wordpress` to create a new gatsby project.
- From the `gatsby-wordpress` folder run the command `gatsby develop --host=0.0.0.0 --port=8888` this command include different port `8888`, because we already set up wordpress to use the `8000`.
- Access to the Gatsby website from [http://localhost:8888](http://localhost:8888)

## Setup Gatby for Wordpress

- Install Gatsby Source wordpress `npm install --save gatsby-source-wordpress`
- Update `gatsby-config.js` with the new `gatsby-source-wordpress` [Config](https://gist.github.com/freemh/09df4426b7e6c74172921f786b39ffa9)
- Change `baseUrl: gatsbyjsexamplewordpress.wordpress.com` to `baseUrl: localhost:8000` to connect Gatsby to the WordPress Blog.
- Stop `gatsby develop` if it's already running, and run `gatsby develop --host=0.0.0.0 --port=8888` again to fetch all the posts, pages, media, acf fields...
- If as an example you want to access to the endopoints of the list of the posts, follow this URL [http://localhost:8000/wp-json/wp/v2/posts](http://localhost:8000/wp-json/wp/v2/posts)