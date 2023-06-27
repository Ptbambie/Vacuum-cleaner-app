Aspirateur Automatique
Ceci est une application Angular simple qui simule le mouvement d'un aspirateur automatique sur une grille. L'utilisateur peut spécifier les dimensions de la grille, la position initiale de l'aspirateur et les instructions de déplacement. L'application affiche ensuite la position finale de l'aspirateur après avoir exécuté les instructions.

Fonctionnalités
Paramètres de grille : L'utilisateur peut spécifier les dimensions de la grille sur laquelle l'aspirateur se déplace.
Position initiale : L'utilisateur peut spécifier la position initiale de l'aspirateur (coordonnées x, y) ainsi que son orientation (Nord, Est, Sud, Ouest).
Instructions de déplacement : L'utilisateur peut fournir une séquence d'instructions (D pour tourner à droite, G pour tourner à gauche, A pour avancer) pour déplacer l'aspirateur sur la grille.

Affichage de la position finale : L'application affiche la position finale de l'aspirateur après avoir exécuté les instructions.

Installation
Cloner le dépôt GitHub : git clone <URL_DU_REPO>
Accéder au répertoire du projet : cd vacuum-cleaner
Installer les dépendances : npm install

Utilisation
Lancer l'application : ng serve
Ouvrir un navigateur et accéder à l'URL suivante : http://localhost:4200

Remplir les champs de paramètres :
Dimension de la grille (x, y)
Position initiale de l'aspirateur (x, y, orientation)
Instructions de déplacement
Cliquez sur le bouton "Valider" pour exécuter les instructions.
La position finale de l'aspirateur sera affichée si les paramètres correspondent aux valeurs attendues.

Exemple
Dimension de la grille : x=10, y=10
Position initiale de l'aspirateur : x=5, y=5, orientation=Nord
Instructions de déplacement : DADADADAA
Résultat attendu : Position finale de l'aspirateur : x=5, y=6, orientation=Nord

Notes
L'application utilise Angular et Angular CLI. Assurez-vous d'avoir Angular CLI installé avant d'exécuter l'application.
Les paramètres de grille, la position initiale et les instructions de déplacement sont validés pour correspondre aux valeurs attendues. Si les paramètres ne correspondent pas, la position finale ne sera pas affichée.
N'hésitez pas à adapter ce modèle en fonction des spécificités de votre application et à ajouter toutes les informations supplémentaires pertinentes.