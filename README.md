# Introduction

This is a memo so that I can remember every basic command I would surely need in the future since my brain has no storage and seems to be working only with RAM... :)

# Symfony

  - composer create-project symfony/skeleton my-project
  - composer require --dev maker profiler
  - composer require validator asset orm orm-fixtures admin form twig annotations security
  - (php) bin/console doctrine:database:create
  - (php) bin/console make:migration
  - (php) bin/console d:<zero-width-space>m:m
  - (php) bin/console make:form (FormName)
  - (php) bin/console make:controller
  - (php) bin/console make:entity
  - (php) bin/console make:fixtures:load
  - (php) bin/console security:encode-password the-password
  - (php) bin/console make:user
  - (php) bin/console make:entity User_Entity (to update the entity)
  - (php) bin/console make:auth (to call 'LoginAuthenticator')
  - (php) bin/console make:admin:dashboard (to create a backoffice)
  - (php) bin/console make:admin:crud
  
  # Vue.JS
  
  - vue create my-project
