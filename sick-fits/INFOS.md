Infos Patrick Marthus
=====================

## Projet web dynamique

1. Pourquoi React ?

    * **Le contenu est référençable**

      C’est LA fonctionnalité qui fait la différence par rapport aux autres frameworks. Grâce à l’utilisation d’un serveur Node, le code va pouvoir être généré côté client ET côté serveur (un peu comme du PHP donc… tout en gardant les avantages du Javascript !) à la différence des autres frameworks JS traditionnels (Backbone.js, AngularJS, Ember.js, etc.) qui de manière native exécutent le code seulement côté client (dans le navigateur). Jusqu’à présent il était obligatoire de faire passer un bot (service gratuit ou payant) pour qu’il crée des fichiers HTML référençables.

    * **ReactJS est très rapide**

      ReactJS crée son propre DOM virtuel où sont rattachés vos composants. Cette approche vous donne énormément de flexibilité et des performances exceptionnelles, car ReactJS calcule quel changement dans le DOM a besoin d’être fait, et change juste LA PARTIE qui a besoin d’être mise à jour. De cette façon, ReactJS évite des opérations coûteuses dans le DOM.

    * **Les composants sont le futur du développement web**

      ReactJS à pris le concept de Shadow DOM et du framework PolymerJS et l’a poussé à un niveau supérieur. React.js n’utilise pas Shadow DOM – à la place il vous donne l’habilité de créer vos propre composant que vous pourrez réutiliser plus tard, combiner, et/ou inclure dans le cœur de votre contenu. Cette fonctionnalité à elle seule est un gage de productivité de par la facilité à définir et manipuler vos propres composants.

    * **La communauté**

      ReactJS a séduit rapidement la communauté des développeurs JS. Et c’est sans parler de React Native qui de son côté permet de publier des applications natives iPhone et Android prochainement en écrivant du JavaScript. Cela permet d’économiser des temps de développement considérables.

    * **L’intelligibilité**

      ReactJS produit du code « propre » (simple à lire), sa lecture permet de déterminer immédiatement quelles sont les fonctionnalités de votre application. Ce qui est essentiel pour la maintenance et l’expansion de votre projet dans le temps.

    * **Le Javascript plus simple à écrire**

      ReactJS utilise une syntaxe spéciale appelé JSX, qui permet de mixer l’HTML et le Javascript. Ce n’est pas obligatoire – vous pouvez toujours écrire votre app ReactJS en Javascript natif – mais nous vous suggérons très fortement d’essayer cette nouvelle syntaxe car elle vous permet d’écrire vos composants très facilement. Être capable de mettre une touche de HTML dans vos fonctions de rendu sans avoir à concaténer vos chaines, c’est fantastique ! Et après quelque temps cela devient très naturel.

2. Infos utiles

    * Connexion:

      * Admin:
          * Login: dubois.matthieu@live.be
          * Password: dogs

      * Utilisateur:
          * Login: patrickmarthus@best.be
          * Password: patrick

      * Reset mot de pass:
          * Le reset de mot de pass envoi l'email directement dans ma boite email mailtrap. (Qui est lié à mon compte github)
          * Si tu veux tester cette fonctionnalité, j'ai ajouté un console log du token (dans la console backend) au moment ou tu demande un reset avec l'email, il te suffira après d'ajouter le token manuellement à la fin de l'url si dessous, ce qui te permettra de changer de mot de pass.
            Url : http://localhost:7777/reset?resetToken=ICILETOKEN

    * Permissions:

      * en te rendant sur la page /permissions, (si tu es log avec le compte admin), tu pourras voir un petit menu avec les différentes permissions possibles, elles peuvent-être assignées directement au check de la box ou après avoir cliqué sur Update.

3. Commit

    * Ne regarde pas trop au commits car j'ai vraiment fait nimp avec bcp de message de commit universel, avec des add . et des add -A sur beaucoups de fichiers. Manque de patience et d'imagination.

4. Test unitaires

    * Les tests sont effecutés avec Jest. J'ai vraiment appréciés découvrir cette partie du développement qui, je pense, est essentiel  sur de gros projet.

5. La Stack technique

    * React :

      React est basé sur virtual-dom : un composant React ne crée pas de HTML mais une représentation sous forme d’objets et de nœuds de ce à quoi le HTML final doit ressembler. Virtual-dom va prendre en compte cette représentation, la comparer au DOM réel et en déduire les opérations minimales à exécuter pour que le DOM réel soit conforme au virtuel. C’est grâce à cet outil que React peut partir du principe qu’il est plus simple de “remplacer” toute l’interface quand elle doit être modifiée plutôt que de modifier au fur et à mesure le DOM comme jQuery ou AngularJS pouvaient le faire.

    * Apollo Client :

      Apollo Client est un client GraphQL qui gère les données et l’état dans une application(Autre exemple Redux). Entre autres avantages, il permet un style de programmation déclaratif permettant aux développeurs de définir des requêtes dans le cadre de composants d'interface utilisateur. le client gère tous les détails difficiles des résultats de la requête liés à l'interface utilisateur, en gérant la cohérence, la mise en cache, etc.

    * Prisma :

      Prisma élimine le besoin d'écrire manuellement les opérations CRUD. On se concentre sur les fonctionnalités plutôt que de faire un travail répétitif.
      Dans ce projet j'utilise le serveur de demo proposé par prisma où est inclus la base de données.

    * GraphQL Yoga :

      Serveur GraphQL complet, axé sur une configuration facile, des performances et une expérience exceptionnelle des développeurs

    * Heroku :

      Heroku est une PaaS (plateforme en tant que service) permettant de déployer des applications sur le Cloud. A la façon dont un hébergeur web propose d’héberger un site web sur ses propres serveurs, cette solution vous permet de déployer votre application sur le Cloud pour permettre aux internautes de l’utiliser.

    * Jest :

      Jest est utilisé par Facebook pour tester tout le code JavaScript, y compris les applications React. L'une des philosophies de Jest est de fournir une expérience intégrée "configuration zéro". Nous avons constaté que lorsque les ingénieurs disposent d'outils prêts à l'emploi, ils finissent par écrire davantage de tests, ce qui aboutit à des bases de code plus stables et plus saines.

    * Mailtrap :

      Mailtrap simule le travail d'un vrai serveur SMTP. Il isole l’e-mailing intermédiaire de la production et élimine toute possibilité qu'un email de test termine sa course dans la boîte mail d’un client


6. Liens utiles

    * Le site : https://sickfits-nextt-prod.herokuapp.com/ (lent au premier chargement, j'ai l'impression que les serveurs sont en veille si il n'y a pas eu de visiteur depuis un certain temps)
    * React : https://reactjs.org/
    * Apollo :  https://www.apollographql.com/
    * Prisma : https://www.prisma.io/
    * GraphQL Yoga : https://github.com/prisma/graphql-yoga
    * Heroku : https://www.heroku.com/
    * Jest : https://jestjs.io/
    * Mailtrap : https://mailtrap.io


