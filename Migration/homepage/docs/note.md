# note

## update homepage kngoe

### step 1: update content homepage kngoe

<br>

#### page home

Mitglieder hardcoded: 
/Migration/homepage/src/projects/dhppapp/src/app/home/home.component.ts

<br>

#### page aktuelles

data:
json Datei einfügen (variable aktuellesRDF):
/Migration/homepage/src/projects/dhppapp/src/app/aktuelles/aktuelles.component.ts

img: /Migration/homepage/src/projects/dhppapp/src/assets/images

<br>

#### page kommission

<br>

##### page Mitglieder

data: json Datei einfügen (variable personenRDF):
/Migration/homepage/src/projects/dhppapp/src/app/kommission/mitglieder/mitglieder.component.ts

img: /Migration/homepage/src/projects/dhppapp/src/assets/images

<br>

##### page Geschichte

data: hardcoded 
/Migration/homepage/src/projects/dhppapp/src/app/kommission/geschichte/geschichte.component.html

<br>

#### page projekte

data (variable projektinformationen): 
/Migration/homepage/src/projects/dhppapp/src/app/projekte/projekte.component.ts

img: /Migration/homepage/src/projects/dhppapp/src/assets/images/projekte

<br>

#### page veroeffentlichungen

##### page uebersicht:

data: /Migration/homepage/src/projects/dhppapp/src/app/kommission/uebersicht/uebersicht.component.html

##### page suche:

data: workRDF
/Migration/homepage/src/projects/dhppapp/src/app/veroeffentlichungen/suche/suche.component.ts

thumbnails: /Migration/homepage/src/projects/dhppapp/src/assets/images/

pdf: ftp server: /pdf

<br>

### zugangsdaten ftp server: 

Host: www.oesterreichische-geschichte.at oder 91.250.97.47

Benutzer: oegrh

Kennwort: 7mA25bj@

<br>

### workflow

vs -> homepage/src -> build-> npm run webpack:build

wenn build ok -> /build/resources/main/static -> ftp client /root kopieren