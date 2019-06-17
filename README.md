# biasflix
A Netflix of cognitive biases. There is only the TV Show *Barnumer Things* about Barnum Effect. Project for the module Communication in DUT Info.
Made with Twine Snowman. Interface inspired by Netflix and its interactive mode.

## Notice (à lire !!)

Si vous avez un fond noir lorsque vous testez depuis Twine, c'est normal. Il faut sauvegarder votre fichier ici, dans le dossier `watch/` pour afficher les images. Je vais voir s'il y a une solution pour qu'elles s'affichent sur Twine.

### Fichier Twine

Il se trouve dans `watch/barnima.html`. Importez-le pour le modifier. 

### Syntaxe

J'ai utilisé comme format de l'histoire [Snowman](https://twinery.org/wiki/snowman:start), qui apporte un format léger et ouverts aux customisations HTML/CSS.
Quelques informations à savoir lorsque vous créez un `Passage` (= "page")...

#### En général

Snowman supporte la bibliothèque [Underscore.js](https://underscorejs.org/), pour l'utiliser :

```html
<!-- Afficher le contenu d'une variable -->
<%=var%>

<!-- Bloc de code --> 
<%
...
%>
```

#### Sélection des choix

Englobez les choix (**qui doivent être mis à la suite dans une ligne**) dans une `<div class="choice-selector">` :

```html
<div class="choice-selection">
[[Choix 1]] [[Choix 2]]
</div>
```

#### Barres de saisie et listes

```html
<!-- Textbox -->
<input type="text" placeholder="Votre nom" onchange="playerName=this.value">
```

```html
<!-- Dropdown list -->
<select onchange="sign=this.value">
    <option value="Bélier">Bélier</option>
    <option value="Taureau">Taureau</option>
    <!-- ... -->
</select>
```

Pour récupérer la valeur de la variable :

```javascript
Nom du joueur : <%= playerName %>
```

Je n'ai pas implémenté de système de vérification lorsque l'input n'est pas vide (sinon une erreur est générée car la variable n'a pas été initialisée). **Pensez à l'initialiser** :

```javascript
<% playerName = "Gilles" %>
```

#### Background video

Pour personnaliser le fond de la page, ajoutez cette ligne dans le passage que vous désirez (au début de préférence).
```javascript
<% window.bgVideo = "background.mp4"; %>
```
Les types de fichiers supportés sont les vidéos `.mp4` et les images, pensez à préciser le format.
Le fichier en question doit être enregistré dans le dossier `img/background/`.

Tant que la valeur de `window.bgVideo` n'a pas été changée, le fond restera le même.

Si vous voulez le fond noir par défaut, il suffit de mettre la valeur de `window.bgVideo` à `null` ou `''` (chaîne vide).

#### Texte positionné en bas (comme des sous-titres)

Pas encore implémenté, mais vous pouvez déjà mettre la balise correspondante :

```html
[
Mon texte ... 
bla bla...
]{.subtitles}
```

Qui sera transformée en `<div class="subtitles">`.
