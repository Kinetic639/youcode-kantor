

![mobile view](https://github.com/Kinetic639/youcode-kantor/blob/main/img/miniatures/website.png?raw=true)
# Projekt Kantor Youcode
Live Demo
[https://kinetic639.github.io/youcode-kantor/](https://kinetic639.github.io/youcode-kantor/)

Projekt stworzony w ramach bootcampu Youcode - Front end od podstaw

&nbsp;  

---  

&nbsp;  

#### W projekcie starałem się zaprezentować praktyczną znajomość poniższych zagadnień związanych z:

##### HTML :  
- Importowanie zewnętrznych ikon/fontów (fontawesome, google fonts)
- Semantyczne tagi HTML
- Formularze 


##### CSS:
- Box-model
- Kaskadowość CSS
- Selektory CSS
- Preprocesor CSS - SCSS
- Nazewnictwo klas - metodologia BEM
- Flexbox i CSS Grid
- Animacje i łynne przejścia
- Responsive Web Design 

##### Javascript:
- Obsługiwanie formularzy
- Wysyłanie zapytań do **API** i renderowanie konkretnych elementów HTML na podstawie otrzymanej odpowiedzi 
- wykorzystanie elementu `<Template>` do dynamicznego renderowania poszczególnych elementów `<li>` wewnątrz list oraz `<option>` wewnątrz `<select>`. 

&nbsp;  

---   

&nbsp;
### Użyte technologie:

<img src="https://cdn0.iconfinder.com/data/icons/HTML5/256/HTML_Logo.png" width="50" height="50"><img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png" width="50" height="50"><img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/288_Sass_logo-256.png" width="50" height="50"><img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/187_Js_logo_logos-256.png" width="50" height="50">

&nbsp;

---   

&nbsp;

### Ciekawe funkcje:
- Zaciąganie z [API Narodowego Banku Polskiego](http://api.nbp.pl/) aktualnych kursów walut obcych
&nbsp;

- Dla każdej zaciągniętej waluty za pomocą elementów `<template>` tworzone są:
-- element `<option>` wewnątrz każdego z pól `<select>` 
-- element `<li>` zawierający pozycję na tablicy kursów poniżej kalkulatora

&nbsp;

- Wybranie danej opcji w jednym elemencie `<select>` usuwa tą opcję wewnątrz drugiej listy:

![remove selected option](https://github.com/Kinetic639/youcode-kantor/blob/main/img/miniatures/remove_selected.gif?raw=true)

- Aby wybrać interesującą nas walutę możemy wybrać ją z listy formularza, lub bezpośrednio klikając w intersującą nas walutę na tablicy kursów:

![remove selected option](https://github.com/Kinetic639/youcode-kantor/blob/main/img/miniatures/selection.gif?raw=true)
&nbsp;

