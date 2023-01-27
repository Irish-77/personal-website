export const blog_AI_History:string = `

## 1 Einleitung

> *„Even if I become the number one, there is an entity that cannot be defeated.“* <br /><br />~ Lee Sedol, ehemaliger Go-Weltmeister

Mit diesem Satz verkündete Lee Sedol, einer der besten Go-Spieler, 2019 das Ende seiner Profikarriere, da es nach ihm keinen Sinn mehr ergab, ein Spiel weiter zu spielen, wenn der Sieger bereits im Vorhinein feststeht.
Sedol bezieht sich mit dieser Aussage auf AlphaGo, einer Artificial Intelligence (AI).
Drei Jahre zuvor war sich allerdings nicht nur Sedol, sondern der Großteil von ambitionierten Go-Spielern sicher, dass in einem Duell zwischen Maschine und Mensch, der Mensch der Maschine voraus sein werde.
Dieses Überheblichkeitsgefühl wurde kurze Zeit später durch den Sieg von der AI AlphaGo widerlegt. [^1]

### 1.1 Zielsetzung
Diese Arbeit beschäftigt sich mit der historischen Entwicklung von AI in Brettspielen.
Dabei wird die technische Umsetzung der jeweiligen AI-Programme auf einem High-Level-Niveau beschrieben und die Auswirkung der AI auf die Gesellschaft erläutert. 

### 1.2 Warum Brettspiele?
Nun stellt sich natürlich die Frage, warum Brettspiele für die Entwicklung von AI so interessant sind und sich von anderen Use-Cases abheben.
Die Gesellschaft ist und war schon immer daran interessiert, die Superlative in jedem Bereich zu identifizieren, weshalb Wettkämpfe bzw. Sportevents einen große Stellenwert tragen.
Neben der Neugierde, die schnellste Personen zu definieren, besteht auch großes Interesse daran, die Schlausten und besten Strategen zu identifizieren.
Dafür eignen sich besonders Brettspiele, da diese typischerweise ein gewisses Vermögen an abstrakten und strategischen Denken voraussetzen.[^2]
Mit Zunahme von AI als Teil unserer Gesellschaft, steigt auch die Assoziation von AI als potentielle Gefahr bzw. Konkurrenz für den Menschen im Hinblick auf berufliche Perspektiven.[^3]
Das gesellschaftliche Interesse an Mensch-Maschinen-Wettkämpfen ist dementsprechend mit der Frage verbunden, ob eine AI mittlerweile intelligenter als der Mensch ist.



## 2 Historische Entwicklung von AI in Brettspielen
Zu Beginn dieses Kapitels wird zunächst die Auswahl der in dieser Arbeit vorgestellten Brettspiele erläutert.
Anschließend werden für diese Brettspiele neben einer kurzen Spielbeschreibung, die Relevanz des Spiels auf die Entwicklung AI sowie die technische Umsetzung betrachtet.
Falls die Entwicklung einer AI für das jeweilige Brettspiele eine gesellschaftliche Auswirkung hatte, wird darauf eingegangen.

Brettspiele lassen sich anhand mehrere Kategorien unterteilen.
Für die Entwicklung einer AI, die Brettspiele spielen kann, sind zwei Kategorien entscheidend.
Ein Spiel kann eine perfekte bzw. vollkommene Information besitzen.
Diese Eigenschaft, die aus der mathematischen Spieltheorie stammt, beschreibt, dass jedem Spieler zu jedem beliebigen Zeitpunkt das vorangegangene Spielgeschehen/-historie inklusive der zuvor getroffenen Entscheidungen des Opponenten bekannt ist.[^4]
Das andere Unterscheidungskriterium ist der Einfluss der Zufallskomponente. Spiele mit imperfekten/unvollständingen Informationen werden auch Bayes-Spiele genannt.

| | perfekte Informationen | imperfekte Informationen |
| --------------------- | ---------- | ------------- |
| mit Zufall                  | Mensch ärgere Dich nicht     | Poker  |
| ohne Zufall | Mühle, Schach, Go        | - |

Tabelle 2.1: Beispiele von Gesellschaftsspielen für die zwei relevanten Unterscheidungsmerkmalen

Diese Arbeit vernachlässigt Brettspiele, die eine Zufallskomponente besitzen, da hier nicht der bessere Spieler gewinnt, sondern derjenige, der am meisten "Glück" hat.
Außerdem beschränkt sich die Arbeit auf Spiele mit einer perfekten Information.


### 2.1 Dame
Dame ist ein Brettspiel, dessen Kernkonzept im 12 Jahrhundert entstanden ist. Bei Dame spielen zwei Spieler gegeneinander auf einem Spielfeld mit 8x8 oder 10x10 Felder.
Zu Beginn haben alle Figuren die selben Fähigkeiten und können sich ausschließlich auf den dunklen Felder bewegen.
Erreicht eine Figur die gegnerische Linie, wird diese Figur zur Dame und erhält weitere Fähigkeiten.
Ein Spieler gewinnt, wenn alle Figuren des Gegners geschlagen wurden oder bewegungsunfähig sind.
Für Dame gibt es verschiedene Varianten mit unterschiedlichen Ausprägungen auf Figuren oder auf bestimmte Züge.[^5]
Das erste Dame-Programm wurde von Arthur L. Samuel 1952 in Assembly entwickelt.
Das Programm nutzte zur Bestimmung des besten Zugs eine Alpha-Beta-Suche, einer optimierten Version des Minmax-Verfahrens.[^6]
1962 konnte das Programm gegen den ehemaligen Damen-Profi Robert Nealey gewinnen, musste sich allerdings vier Jahre später gegen zwei Spieler, die beide um die Weltmeisterschaft spielten, geschlagen geben.[^7]
In den späten 1970er wurde das Programm PAASLOW von der Universität Duke entwickelt. Dieses konnte das Programm von Samuel besiegen, war aber professionellen Spielern ebenso unterlegen.
1989 begann die Universität von Alberta mit der Entwicklung von Chinook. 
In der ersten Austragung des *World Man-Machine Championships* verlor Chinook mit 2-4 gegen Marion Tinsley, der zu seiner Zeit zu den besten Dame-Spielern zählte.
1994 standen Chinook und Tinsley erneut im Finale, wobei dieses Mal Chinook das Spiel gewann, da sich Tinsley aus gesundheitlichen Gründen zurückziehen musste.
Im Gegensatz zu Samuels Programm besaß Chinook keine AI-Komponente und funktionierte lediglich über fest-programmierte Algorithmen.
1999 entwickelte David B. Fogel und dessen Team das Programm Blondie24. Blondie24 basiert im Kern auf einem Minimax-Algorithmus des Damespielbaums.
Im Gegensatz zu seinen Vorgängern basiert die Bewertungsfunktion auf einem Convolutional Neural Network.
Für das Parametertraining wurde ein evolutionärer Algorithmus verwendet.
Zusätzlich wurde das Programm nur mit den Grundregeln von Dame ausgestattet.[^8]

Das Berechnen aller möglichen Spielzüge ist sehr aufwendig, weshalb grundsätzlich der Einsatz einer AI Sinn ergibt.
Allerdings wurde Dame 2007 schwach gelöst, wodurch eine AI zum Gewinnen obsolet geworden ist.
Schwach gelöst bedeutet, dass ein Algorithmus in jedem Spiel mindestens ein Unentschieden schafft.[^9]
Mit der Zeit hat der gesellschaftliche Stellenwert von Dame abgenommen, was sich anhan einer abnehmbaren Anzahl von Profispielern feststellen lässt.[^10]


### 2.2 Schach
Schach ist ebenso wie Dame ein strategisches Schachspiel und wird auch auf einem schwarz-weiß-gemusterten Spielbrett mit 8x8 Feldern gespielt.
Im Gegensatz zu Dame, haben die Figuren bereits zu Spielbeginn verschiedene Fähigkeiten, wodurch das Spielgeschehen entsprechend komplexer und vielfältiger wird.
Ziel von Schach ist es, den gegnerischen König schachmatt zu setzen. 
In der Entwicklung eines Programms, das den Menschen besiegt, gab es viele Ansätze, die entweder rein algorithmischer Natur sind oder die eine zusätzliche eine Lernkomponente besitzen. 
Die Entwicklung des ersten Schachautomats begann 1910 und wurde von Leonardo Torres Quevedo geleitet.
Dabei spielte der Automat das Endspiel, also mit einem Turm und König gegen einen menschengesteuerten König.[^11]
1948 veröffentlichen Alan Turing und David Champernowne mit Turochamp einen der ersten Schach-Algorithmen.
Dieser berechnet den bestmöglichen Zug, indem dieser alle möglichen legalen Züge berechnet und alle Antwortzüge, die der Gegner wiederum spielen kann.
Dabei werden Züge, wie z.B. das Schlagen von Figuren mit entsprechenden Spielwert oder das Schachsetzen des Königs, berücksichtigt.
Mittels des Minmax-Algorithmus werden den Zügen Punkte vergeben. Chapernowne sowie Turing bewerten den Algorithmus als Low-Level-Grundlage für Entscheidungen im Schach.[^12]
Ein Jahr später veröffentlichte Claude Shannon seine Arbeit "Programming a Computer for Playing Chess".
Diese stellte wesentliche Grundlagen und Ideen vor, die für einen Schachcomputer benötigt werden.
Die Grundlagen seiner Arbeit wurden später in der Entwicklung von Schachcomputern wiederverwendet.[^13]
Der erste vollfunktionsfähige Schachcomputer wurde 1958 von Alex Bernstein gemeinsam mit  Michael de V. Roberts, Timothy Arbuckle und Martin Belsky für IBM entwickelt und heißt "The Bernstein Chess Programm".[^14]
Der Computer war in der Lage, einen unerfahrenen Schachspieler zu besiegen.[^15]
Der International Master David Levy wettete 1970 mit Informatikern, dass innerhalb der nächsten vier Jahre kein Schachprogramm existiere, das ihn schlagen könne.
Neben dem eigentlichen Inhalt dieser Wette, sorgte diese zudem medial für Aufmerksamkeit und machte Computerschach in der Gesellschaft präsent.
Die nächsten Spiele gegen verschiedene Schachcomputer, Chess 4.7 und Cray Blitz, gewann Levy.[^16]
Der Schachcomputer Deep Thought, welcher 1988 den North American Computer Chess Championship und ein Jahr später den World Computer Chess Championship gewann, war das erste Programm, das einen Grand Master besiegen konnte (Ben Larsen). 
Auch David Levy musste sich gegen Deep Thought mit 4:0 geschlagen geben.
1989 gewann allerdings der damals amtierende Schachweltmeister, Garry Kasparov, gegen Deep Thought.[^17]
Kurze Zeit später erschien Deep Blue, der Schachcomputer von IBM.
Dieser verlor zunächst das Gesamtspiel gegen Kasparov, die erste Partie des Matches jedoch konnte der Computer für sich entscheiden und so war Deep Blue der erste Schachcomputer, der eine Partie gegen einen amitierenden Weltmeister gewinnen konnte.
Ein Jahr später kam es zu einem Rematch zwischen Kasparow und Deep Blue.
Dieses Mal gewann Deep Blue was zum einen menschlicher Fehler von Kasparov zuzurechnen war und zum anderen daran lag, dass der Computer enorm aufgerüstet wurde und so in der Lage war, bis zu 200 Millionen Stellungen pro Sekunde zu berechnen.
Dieser Sieg wurde als Meilenstein für die AI-Entwicklung wahrgenommen, obwohl es sich streng genommen nicht um ein lernendes System handelt.[^18]

Mit der Zeit nahm der Fokus auf einen reinen Schachcomputer ab, stattdessen konzentrierte man sich auf Schachprogramme, wie z.B. Deep Junior, Deep Fritz, Hiarcs, die alle auf einem Grand-Master-Niveau spielten, aber nie eine große Dominanzphase erreichten.
Zwischen 2007 und 2010 konnte das Programm Rybka vier Mal hintereinander die World Computer Chess Championship gewinnen und galt in diesem Zeitraum als das beste Schachprogramm.[^19]
Weiter erwähnenswerte Schachprogramme sind Stockfish, Komodo, Fat Fritz 2 und AlphaZero. AlphaZero ist die von DeepMind entwickelte Schach-AI. Im Gegensatz zu anderen Schach-AIs verwendet AlphaZero keinen Suchbaum, sondern erlernt selbst das Spiel mittels verstärkten Lernen.
Dabei spielt die AI gegen sich selbst und ist lediglich mit den Spielregeln und Siegbedingungen ausgestattet.
Der Trainingsprozess dauert dabei nur wenige Stunden an.[^20] 
Fat Fritz 2 ist eine Weiterentwicklung von Deep Fritz, das ausschließlich aus einem neuronalen Netz besteht und somit keine AlphaBeta-Suche mehr verwendet.[^21]
Komodo, das ebenso wie Fat Fritz 2.0 ein kommerzielles Schachprogramm ist, gilt mit Stockfish als das beste Schachprogramm.[^22]
Stockfish ist hingegen ein Open-Source-Projekt, das unter der GNU General Public License geführt wird.
Es funktioniert in der 14. Version mittels eines NNUE (Efficiently Updatable Neural Network (Akronym wurde umgedreht)).
Das NNUE wird als Bewertungsfunktion für die AlphaBeta-Suche eingesetzt und wurde so optimiert, dass es gut auf CPUs läuft.
Dadurch, dass das komplette Programm auf der CPU ausgeführt wird, werden längere Transferzeiten vermieden.[^23]




## Quellen

[^1]: career_end.
[^2]: chess_skills.
[^3]: ai_fear.
[^4]: board_games_info
[^5]: dame_rules
[^6]: dame_1
[^7]: dame_2
[^8]: dame_3
[^9]: dame_5
[^10]: dame_4 IST SO RICHTIG
[^11]: torres
[^12]: turochamp
[^13]: Shannon
[^14]: bernstein
[^15]: bernstein2
[^16]: levysbet
[^17]: deepthought
[^18]: history_deepblue
[^19]: rybka
[^20]: alphazero
[^21]: ff2
[^22]: komodo
[^23]: nnue

## 
`;