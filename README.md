# Symfony

Les commandes indispensables :

  - composer create-project symfony/skeleton mon-project
  - composer require --dev maker profiler
  - composer require validator orm orm-fixtures admin form twig annotations security
  - (php) bin/console doctrine:database:create
  - (php) bin/console make:migration
  - (php) bin/console d:<zero-width-space>m:m
  - (php) bin/console make:form (NomForm)
  - (php) bin/console make:controller
  - (php) bin/console make:entity
  - (php) bin/console make:fixtures:load
  - (php) bin/console security:encode-password le-mot-de-passe
  - (php) bin/console make:user
  - (php) bin/console make:entity Entite_Utilisateur (pour modifier l'entité)
  - (php) bin/console make:auth (à appeler LoginAuthenticator)
  - (php) bin/console make:admin:dashboard (backoffice)
  - (php) bin/console make:admin:crud
