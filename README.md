# Vite + React + Redux + RTK Query

Test front-end :

- Mini application permettant de voir le classement sur le site chess.com pour différentes cadences de jeu.
- L'objectif du test est de compléter le début de projet.
- Le but est d'évaluer votre niveau pour savoir votre niveau de départ, merci de limiter au maximum l'utilisation de l'IA.

## Démarrage

```bash
npm install
npm run dev
```

### CONSIGNES

---

1. Audit et restructuration de l’architecture

- Analyser l’architecture actuelle du projet.
- Restructurer le code si nécessaire pour respecter les bonnes pratiques (modularité, séparation des responsabilités, etc.). &nbsp;&nbsp;

---

2. Connexion du Carrousel au reducer

- Connecter le composant <Carrousel/> au reducer timeControls.
- Contrôler les boutons ">" et "<".

---

3. Affichage conditionnel des cadences

- Limiter l’affichage dans les composants <Carrousel/> et <List/> aux seules cadences présentes dans le reducer timeControls.
- N'afficher qu'une seule cadence à la fois (pas de vue globale avec toutes les cadences).

---

4. Sélecteur de vue

- Ajouter un moyen de sélectionner soit le <Carrousel/> et soit la <List/>.

---

5. Affichage de la moyenne du top 10

- Calculer et afficher la moyenne des scores du top 10 des joueurs pour la cadence actuellement sélectionnée.

---

6. Mise en forme UX/UI

- Améliorer la présentation de la page pour une expérience utilisateur et une interface cohérente et agréable.

---

7. Proposition de fonctionnalité (sans développement)

- Proposer une nouvelle fonctionnalité pertinente pour le projet, sans la développer.

---

Faire des commits réguliers et relativement explicites permettant de comprendre la logique de votre développement.
