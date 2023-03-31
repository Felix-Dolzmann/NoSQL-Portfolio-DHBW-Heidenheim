# NoSQL-Portfolio-DHBW-Heidenheim
Dieses Projekt wurde im Rahmen der Vorlesung "Neue Datenbankkonzepte" an der Dualen Hochschule Baden-Württemberg erstellt.

# Anforderungen
- Node.js v12 oder höher
- MongoDB v6.0 oder höher

# Installation
Entpacken Sie die erhaltene Datei. 

Um den Server einzurichten, öffnen Sie die entpackte Datei und führen Sie den folgenden Befehl im Terminal aus: npm install

Um das Backend zu starten:
` cd Backend`
` npm install `
` npm start `

Um das frontend zu starten:
` cd frontend `
` npm install `
` ng serve `   

Dokumentationen
- https://www.mongodb.com/docs/manual/introduction/
- https://nodejs.org/en/docs/

# Was hier eigentlich geplant war: 
Ursprünglich war in diesem Projekt angedacht ein Forum anzulegen, dass genau die Vorteile eine Dokumenten Orientierten Datenbank ausnutzt.
Dafür sollte die Kommentar Funktion das unendliche Verschachteln von Kommentaren zulassen. Diese Funktion wurde im Frontend sowie in der Datenbank getestet,
und es ist zu dem entschluss gekommen, dass dies grundsätzlich möglich ist. Da ich mich für die Anbindung der DB ans Backend für TypeORM entschieden habe,
galt es nun diese verschachtelung darzustellen.
Ich habe folgende Ansätze probiert:
- TypeORM Tree
- TypeORM nested document mit mehreren ähnlichen Klassen
- TypeORM rekursion

Keine der Ansätze lieferte ein zufriedenstellendes Ergebniss. Aufgund von Zeitmangel meinerseits und Prüfungsdruck dem ich nicht mehr gerecht werden konnte. Ist dieser Code nun unvollständig in der umsetzung und kann nur teilweise ansätze des ursprünglich geplanten Projekts darstellen.
Das Frontend enthält mockup daten um eine vernestung  der Kommentare darzustellen.
Ich bitte um nachsicht. 