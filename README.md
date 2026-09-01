<div align="center">

# GameVault

**Boutique en ligne de jeux vidéo — catalogue, recherche et panier d'achat**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)

</div>

---

## 2. Présentation du projet

GameVault est une boutique en ligne de jeux vidéo qui permet aux utilisateurs de parcourir un catalogue, de filtrer par catégorie, de rechercher un jeu par titre et de gérer un panier d'achat persistant.

Il s'adresse aux joueurs souhaitant explorer et acheter des jeux vidéo dans une interface simple et rapide.

Son objectif principal est d'offrir une expérience de navigation et d'achat fluide, avec un panier qui conserve son contenu même après fermeture du navigateur.

---

## 3. Problématique

**Le problème identifié** est de proposer une expérience d'achat de jeux vidéo claire et réactive côté client, sans backend, tout en conservant le panier de l'utilisateur entre les sessions.

**La solution proposée** repose sur une architecture JavaScript modulaire (ES Modules) qui sépare l'affichage du catalogue, la recherche, le filtrage par catégorie et la gestion du panier, avec persistance des données via le `localStorage`.

---

## 4. Fonctionnalités principales

- Afficher un catalogue de jeux sous forme de cartes (image, titre, prix, catégorie).
- Rechercher un jeu par titre en temps réel.
- Filtrer les jeux par catégorie (Action, RPG, FPS, Indie, Strategy...).
- Ajouter un jeu au panier avec gestion des quantités.
- Modifier la quantité ou supprimer un article directement depuis le panier.
- Calculer automatiquement le nombre d'articles et le prix total.
- Conserver le panier entre les sessions grâce au `localStorage`.
- Valider une commande (réinitialisation du panier).

---

## 5. Technologies utilisées

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![JavaScript ES Modules](https://img.shields.io/badge/JavaScript_ES_Modules-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwindcss&logoColor=white)
![localStorage](https://img.shields.io/badge/Web_Storage_API-4285F4?style=flat-square&logo=googlechrome&logoColor=white)

</div>

| Technologie | Utilisation dans le projet |
|-------------|----------------------------|
| **HTML5** | Structure des pages (catalogue et panier) |
| **JavaScript (ES Modules)** | Logique métier : catalogue, recherche, filtres, panier |
| **Tailwind CSS** | Stylisation de l'interface utilisateur |
| **Web Storage API (`localStorage`)** | Persistance du panier côté client |

---

## 6. Installation et lancement

### 6.1 Prérequis

Pour utiliser ce projet, vous devez disposer de :

- Node.js et npm
- Un navigateur web moderne
- Un serveur local (ex: extension "Live Server" ou équivalent)

---

### 6.2 Cloner le dépôt

```bash
git clone https://github.com/AITABBOUyoussef/GameVault.git
```

---

### 6.3 Ouvrir le dossier

```bash
cd GameVault
```

---

### 6.4 Installer les dépendances

```bash
npm install
```

---

### 6.5 Générer le CSS (Tailwind)

```bash
npx tailwindcss -i ./src/input.css -o ./css/output.css --watch
```

---

### 6.6 Lancer le projet

Ouvrir le fichier `index.html` via un serveur local (ex: Live Server), puis accéder à :

```
http://localhost:5500
```

---

## 7. Structure du projet

| Fichier | Rôle |
|---------|------|
| `index.html` | Page du catalogue de jeux |
| `Panier.html` | Page du panier d'achat |
| `data.js` | Données du catalogue (liste des jeux) |
| `main.js` | Point d'entrée : affichage du catalogue |
| `search.js` | Logique de recherche en temps réel |
| `category.js` | Logique de filtrage par catégorie |
| `ajouter-Panier.js` | Ajout d'un jeu au panier |
| `cart-data.js` | Lecture/écriture du panier dans le `localStorage` |
| `cart-ui.js` | Affichage dynamique du contenu du panier |
| `cart.js` | Actions sur le panier (quantité, suppression, commande) |

---

## 8. Contribution personnelle

Ma contribution a porté sur le développement complet du frontend en JavaScript vanilla (ES Modules), notamment la logique de gestion du panier (ajout, mise à jour des quantités, suppression) et sa synchronisation avec le `localStorage`.

J'ai également conçu le système de recherche et de filtrage par catégorie ainsi que l'intégration de l'interface avec Tailwind CSS.

---

## 9. Difficultés rencontrées

### Difficulté 1

#### Problème rencontré

Garder le panier synchronisé entre plusieurs fichiers JavaScript indépendants (ajout, affichage, modification) sans backend, tout en évitant les incohérences de données.

#### Solution

J'ai centralisé toute la lecture et l'écriture du panier dans un seul module (`cart-data.js`) exposant `getPanier()` et `savePanier()`, utilisé par tous les autres modules (`ajouter-Panier.js`, `cart.js`, `cart-ui.js`). Chaque action relit l'état à jour depuis le `localStorage` avant de le modifier.

#### Ce que j'ai appris

J'ai appris à structurer une application JavaScript en modules ES6 avec une source de vérité unique pour l'état partagé, et à gérer la persistance des données côté client.

---

## 10. Améliorations possibles

Dans une prochaine version, je pourrais :

- ajouter une page de détail pour chaque jeu ;
- mettre en place un vrai backend avec base de données pour les commandes ;
- ajouter un système d'authentification et d'historique de commandes ;
- améliorer la recherche avec un tri par prix et par note.

### Conclusion

Ces améliorations permettraient de transformer GameVault en une véritable plateforme e-commerce complète et évolutive.

---

## 11. Liens du projet

- [Live Demo ](https://game-vault-26mtj5b2x-youssef-3992.vercel.app/)
- [Maquette Figma](https://www.figma.com/design/Hox9pJlsJoLJ26Ha1dNxZe/Untitled?node-id=0-1&t=dktXV87lIO6bxV7w-0)
- [Tableau Trello](https://trello.com/b/wbcyius2/gamevault)
- [Dépôt GitHub](https://github.com/AITABBOUyoussef/GameVault)
- [Moodboard Canva](https://www.canva.com/design/DAHF0L2MeJQ/7qChHNbTB7e4eHyvR3qS4g/edit)

<div align="center">

---

Made by **Youssef Ait Abbou**

</div>
