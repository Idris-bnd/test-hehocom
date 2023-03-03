## EXERCICE 1

### Décris moi étape par étape cette fonction, les Valeurs des variables également par étape, Nomme moi ce type de fonction et ses avantages

La fonction accepte trois paramètres optionnels qui sont initialisé comme ca de base:
-$iteration : int de valeur 10
-$resultat : array vide
-$nb : int de valeur 0

La fonction commence par copier le tableau $resultat dans une variable $final.

Ensuite, elle teste si $iteration est supérieur à zéro et si $nb est égal à 0 ou 1. Si c'est le cas, elle ajoute $nb à $resultat.

Sinon elle calcule la somme des deux derniers nombres de $resultat pour ajouter $nb.

(dans ce cas là, $nb est égal à 0, donc la fonction ajoute $nb à $resultat)

La fonction décrémente $iteration, incrémente $nb, et rappelle la fonction récursivement avec les nouveaux paramètres $iteration, $resultat et $nb.

La fonction se rappelle elle-même jusqu'à ce que $iteration atteigne 0.
  
À ce moment-là, elle retourne le tableau complet des nombres

-----------------

Type de fonction: C'est une fonction récursive.
définition google pour appuyer mes propos:
Une fonction est dite récursive si, à l'intérieur de son corps, elle s'appelle elle-même avec une valeur de paramètre différent (sinon elle boucle).

Cette fonction représente la suite de Fibonacci : suite mathématique dans laquelle chaque nombre est la somme des deux qui précèdent.

-----------------

Ses avantages: Je dirais que c'est comme un while, on l'appel une fois puis elle 
fais tout toute seule tant que le résultat est pas celui voulu.