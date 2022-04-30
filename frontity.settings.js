const settings = {
  "name": "bibliotheque",
  "state": {
    "frontity": {
      "url": "http://localhost/bibliotheque",
      "title": "Bibliothèque en ligne",
      "description": "Une plateforme pour les passionnés de lecture"
    }
  },
  "packages": [
    {
      "name": "bibli-theme",
      "state": {
        "frontity": {
          "hover": false,
      },
        "theme": {
          "menu": [
            [
              "Acceuil",
              "/"
            ],
            [
              "Livres",
              "/livres/"
            ],
            [
              "DVD",
              "/dvds/"
            ],
            [
              "CD",
              "/cds/"
            ],
            [
              "Contact",
              "/forms/"
            ],
          ]
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "http://localhost/bibliotheque/wp-json",
          "postTypes": [
            {
              type: 'livre',
              endpoint: 'livre',
              archive: "/livres"
            },
            {
              type: 'cd',
              endpoint: 'cd',
              archive: "/cds"
            },
            {
              type: 'dvd',
              endpoint: 'dvd',
              archive: "/dvds"
            },
            {
              type: 'actualites',
              endpoint: 'actualites',
              archive: "/actualites"
            },
            {
              type: 'form',
              endpoint: 'form',
              archive: "/forms"
            },
          ],
          "taxonomies" : [
            {
              taxonomy : "genre",
              endpoint: "genre",
              postTypeEndpoint: 'livre',
              params : {
                per_page: 5,
                _embed : true
              }
            },
            {
              taxonomy : "style",
              endpoint: "style",
              postTypeEndpoint: 'cd',
              params : {
                per_page: 5,
                _embed : true
              }
            },
            {
              taxonomy : "categorie",
              endpoint: "categorie",
              postTypeEndpoint: 'dvd',
              params : {
                per_page: 5,
                _embed : true
              }
            }
          ]
        },
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@aamodtgroup/frontity-contact-form-7",
  ]
};

export default settings;

