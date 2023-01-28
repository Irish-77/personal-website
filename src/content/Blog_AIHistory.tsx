export const blog_AI_History:string = `

# Künstliche Intelligenz in Brettspielen

> „Even if I become the number one, there is an entity that cannot be defeated.“ <br /><br />~ Lee Sedol, ehemaliger Go-Weltmeister

## 1 Einleitung

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

<div class="table-description"> 
Tabelle 1: Beispiele von Gesellschaftsspielen für die zwei relevanten Unterscheidungsmerkmalen
</div>

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

| Platz | Name | Elo-Rating |
| --------------------- | ---------- | ------------- |
| 1 | Stockfish 14.1 64-bit 8CPU     | 3742  |
| 2 | Dragon by Komodo 2.6 64-bit 8CPU        | 3721 |
| 3 | Fat Fritz 2 (in SF) 64-bit 8CPU        | 3719 |

<div class="table-description"> 
Tabelle 2:
Überblick der drei besten Schachprogrammen (Stand: 19.02.2022).
Stockfish 14 hat einen Elo von 3742.
Im Gegensatz dazu hat der amtierende Schachweltmeister Magnus Carlsen in seiner besten Zeit ein Elo-Rating von "nur" 2882 Punkten.[^24] [^25]
</div>


### 2.3 Go

Go ist ein klassisches Brettspiel und kommt ursprünglich aus China. 
Bei Go spielen zwei Spieler abwechselnd ihre Steine in weiß bzw. in schwarz auf einem 19x19 großen Brett.
Das Ziel ist es, die Steine des Gegners einzukreisen, um mehr Spielfeldfläche als der Gegner zu erobern.
Wer mehr als die Hälfte des Bretts eingenommen hat, gewinnt das Spiel.
Obwohl Go wegen der einfacheren Regeln leichter zu spielen ist, ist die Spielkomplexität um einiges höher. 
Während man beim Schach einen professionellen Schachspieler ohne irgendeine Lernkomponente, also nur mit Brute-Forcing besiegen kann, ist dies bei Go wegen der enormen Komplexität nicht möglich.[^26]
In Go gibt es $2.08168199382 \\cdot 10^{170}$ legale Positionen.[^27]
Im Vergleich dazu: Es gibt schätzungsweise "nur" $10^{80}$ Atome in dem uns bisher bekannten Universum.[^28]
Die Anzahl aller legalen Zugkombinationen lässt sich nicht genau berechnen. Bei einer Partie zwischen 200 und 361 Zügen kann es in etwa $10^{700}$ mögliche Partien geben.[^27]
Bis 2015 gab es keine guten Go-AIs bzw. -Programme, die mit einem Weltmeister auf einem 19x19 Spielfeld mithalten konnten.
Viele Forscher sind davon ausgegangen, dass es lange dauern würde, bis eine Maschine den Mensch besiegen könnte.[^29]
Im Oktober 2015 konnte das von DeepMind entwickelte AlphaGo erstmals gegen den mehrfachen Europameister, Fan Hui (2. Dan), gewinnen.
Als Grundlage nutzte AlphaGo die Kombination bestehend aus einem Policy Network, das verschiedene Positionen berechnet, einem Value Network, dass diese Positionen bewertet und einer Monte-Carlo-Baumsuche, das die Varianten weiterführt.
Ein Jahr später spielte AlphaGo gegen Lee Sedol (9. Dan), der zu dieser Zeit als der beste Spieler der Welt galt.
Dieses Spiel wurde weltweit übertragen und hatte mehr als 100 Millionen Live-Zuschauer.[^30]
Viele Menschen hofften auf einen Sieg von Sedol. In der offiziellen Filmdokumentation von DeepMind wurde berichtet, dass der Druck auf Sedol enorm war, da im Gegensatz zu traditionellen Mensch-vs.-Mensch-Duellen er nicht alleine für sich spielte, sondern dieses Mal stellvertretend für die gesamte Menschheit.[^31]
Obwohl sich Sedol sehr sicher war, gegen AlphaGo zu gewinnen, verlor er anschließend deutlich mit 4:1.
Besonders bemerkenswert war der Spielzug 37 in der zweiten Partie. Dieser Zug sah im ersten Moment untypisch aus und die Kommentatoren vermuteten einen Logikfehler bei AlphaGo.
Erst später zeigten sich die Vorteile dieses Zugs, was ein Beweis dafür war, dass AlphaGo nicht nur in der Lage war, seine Züge basierend auf bisherigen Partien zu reproduzieren, sondern auch, dass es Go verstand, eigene kreative Wege zu finden.[^32]
Im Anschluss an die Niederlage versuchte Sedol, die Go-Gemeinde zu beruhigen, indem er die Niederlage auf seine Fehler beschränkte. Allerdings konnte AlphaGo 2017 auch gegen den Weltmeister nach Sedol, Ke Jie, deutlich mit 3:0 gewinnen.[^33]
Mit diesen beiden Niederlagen war es bewiesen, dass Computer uns Menschen in Brettspielen und den dafür notwendigen Fähigkeiten überlegen sind.[^31]
Der Sieg von AlphaGo wurde gesellschaftlich bzw. medial unterschiedlich wahrgenommen. Auf der einen Seite haben sich die Menschen bereits daran gewöhnt, dass eine AI überlegen ist (Deep Blue vs Kasparow), aber auf der anderen Seite haben doch viele gehofft, es werde noch dauern, bis eine Maschine dem Menschen überlegen sei.[^29]

Aus AlphaGo und dessen Grundarchitektur bzw. -prinzip entstand später AlphaGo Zero und AlphaZero, zwei abgeänderte Versionen, die in der Lage sind, sich innerhalb weniger Stunden andere Brettspiele auf einem professionellen Niveau selbst beizubringen.


## Fazit

Zusammenfassend lässt sich sagen, dass Brettspiele für die Entwicklung von AI ein treibender Faktor waren, da sie neben neuen Techniken auch führende Pioniere in dem Feld von künstlicher Intelligenz hervorbrachten.
Allerdings haben nicht nur Brettspiele eine Auswirkung auf den Fortschritt von AI sondern auch vice versa.
Mit immer stärker werdenden AIs stellt sich langfristig eine Frage nach der gesellschaftlichen Relevanz von den Brettspielen hinsichtlich Wettbewerben und Amateursport.
Ergäbe es auf Dauer gesehen im Profibereich überhaupt Sinn, zwei Menschen gegeneinander antreten zu lassen, obwohl bekannt ist, dass es eine Maschine gibt, die dem Menschen weit überlegen ist.
Lee Sedol hat für sich entschieden, nicht mehr an Spielen auf Wettkampfniveau teilzunehmen.
Allerdings bleibt unklar, ob Sedol damit nur eine Ausnahme war. Schließlich hat Schach während der COVID-19-Pandemie sowohl im  Amateur- als auch im professionellen Bereich an Bedeutung gewonnen.[^34]
Für das Forschungsgebiet innerhalb der künstlichen Intelligenz wird die Bedeutung von Brettspielen abnehmen.
Zwar gibt es immer noch Maschine-vs.-Maschine-Wettbewerbe, in dem Teams weiterhin versuchen, eine "bessere" AI zu kreieren, allerdings wurde mit dem Sieg von AlphaGo in dem komplexesten Brettspiel Go der Sättigungspunkt bzw. der eigentliche Meilenstein erreicht.
Ein Großteil der Investitionen wird vermutlich in andere Problemstellungen fließen.

<div class="footnotes">

[^1]: Go game master quits saying machines “cannot be defeated.” (2019, November 27). The Guardian. https://www.theguardian.com/world/2019/nov/27/go-game-master-quits-saying-machines-cannot-be-defeated
[^2]: Zapf, H. (n.d.). DER BILDUNGSWERT DES SCHACH - EINE VERGLEICHENDE UNTERSUCHUNG. Deutscher Schachbund. Retrieved February 20, 2022, from https://www.schachbund.de/bildungswert-des-schach.html
[^3]: Groß, S., & Martin-Jung, H. (2021, December 13). Wenn Kollege KI als Konkurrent gesehen wird. Süddeutsche Zeitung. https://www.sueddeutsche.de/wirtschaft/ki-ai-arbeitswelt-1.5486017
[^4]: Levin, J. (2002). Games of Incomplete Information. https://web.stanford.edu/~jdlevin/Econ%20203/Bayesian.pdf
[^5]: WCDF. (n.d.). Rules of Draughts (Checkers) . World Checkers Draughts Federation. Retrieved February 20, 2022, from https://www.wcdf.net/rules/rules_of_checkers_english.pdf
[^6]: Sammut, C., & Webb, G. I. (Eds.). (2010). Samuel’s Checkers Player. In Encyclopedia of Machine Learning (pp. 881–881). Springer US. https://doi.org/10.1007/978-0-387-30164-8_740
[^7]: The IBM 700 Series. (n.d.). IBM. Retrieved February 20, 2022, from https://www.ibm.com/ibm/history/ibm100/us/en/icons/ibm700series/impacts/
[^8]: Madrigal, A. C. (2017, July 19). How Checkers Was Solved. The Atlantic. https://www.theatlantic.com/technology/archive/2017/07/marion-tinsley-checkers/534111/
[^9]: Spiegel. (2007, July 20). Dame-Brettspiel ist gelöst. Spiegel. https://www.spiegel.de/wissenschaft/mensch/kuenstliche-intelligenz-dame-brettspiel-ist-geloest-a-495493.html
[^10]: Schaeffer, J., Björnsson, Y., Kishimoto, A., Müller, M., Lake, R., Lu, P., & Sutphen, S. (2007). Checkers Is Solved. Science, 317, 1518–1522. https://doi.org/10.1126/science.1144079
[^11]: Bruderer, H. (2020). Artificial intelligence began in 1912 with the world’s first chess automaton built by Torres Quevedo. Communications of the ACM.
[^12]: Kasparov, G., & Friedel, F. (2018). Reconstructing Turing’s “paper machine.” 40, 105–112.
[^13]: Shannon
[^14]: Bernstein, Alex, & de V. Roberts, M. (1958). Computer v. Chess-Player. Scientific American, 198, 96–107.
[^15]: Alex Bernstein & Colleagues Program an IBM 704 Computer to Defeat an Inexperienced Human Opponent. (n.d.). History of Information. Retrieved February 20, 2022, from https://www.historyofinformation.com/detail.php?id=5508
[^16]: Levy’s Bet. (n.d.). Computer History Museum. Retrieved February 20, 2022, from https://www.computerhistory.org/chess/levys-bet/
[^17]: Berliner, H. J. (1989). Deep Thought Wins Fredkin Intermediate Prize. AI Magazine, 10(2), 89. https://doi.org/10.1609/aimag.v10i2.753
[^18]: Higgins, C. (2017, July 29). A Brief History of Deep Blue, IBM’s Chess Computer. Mental Floss. https://www.mentalfloss.com/article/503178/brief-history-deep-blue-ibms-chess-computer
[^19]: Rybka. (n.d.). Chess.com. Retrieved February 20, 2022, from https://www.chess.com/terms/rybka-chess-engine
[^20]: AlphaZero. (n.d.). Chess.com. Retrieved February 20, 2022, from https://www.chess.com/terms/alphazero-chess-engine
[^21]: Benny, T. (2021, July 22). FAT FRITZ 2 – DIE FETTEN JAHRE SIND VORBEI. https://schach.computer/fat-fritz-2-die-fetten-jahre-sind-vorbei/
[^22]: AlphaZero. (n.d.). Chess.com. Retrieved February 20, 2022, from https://www.chess.com/terms/komodo-chess-engine
[^23]: Saumik. (2021, January 24). A Brief Guide to Stockfish NNUE. https://saumikn.com/blog/a-brief-guide-to-stockfish-nnue/
[^24]: CCRL Blitz. (2022, February 19). http://ccrl.chessdom.com/ccrl/404/
[^25]: Magnus Carlsen. (n.d.). International Chess Federation. Retrieved February 20, 2022, from https://ratings.fide.com/profile/1503014
[^26]: Hamann, C.-M. (2019). Einführung in das Programmieren in LISP: Mit einem Anhang LISP-Dialekte für Personal Computer. De Gruyter. https://doi.org/doi:10.1515/9783110852202
[^27]: Tromp, J. (n.d.). Number of legal Go positions. Retrieved February 20, 2022, from https://tromp.github.io/go/legal.html
[^28]: Villanueva, J. C. (2009, July 30). How Many Atoms Are There in the Universe? https://www.universetoday.com/36302/atoms-in-the-universe/
[^29]: Cho, A. (2016, January 27). “Huge leap forward”: Computer that mimics human brain beats professional at game of Go. https://www.science.org/content/article/huge-leap-forward-computer-mimics-human-brain-beats-professional-game-go
[^30]: Silver, A. (2016, March 13). AlphaGo vs Lee Sedol: history in the making. https://en.chessbase.com/post/alphago-vs-lee-sedol-history-in-the-making
[^31]: Kohs, G. (Ed.). (2020). AlphaGo - The Movie | Full award-winning documentary. DeepMind. https://www.youtube.com/watch?v=WXuK6gekU1Y
[^32]: Wunderlich-Pfeiffer, F. (2016, March 10). Einer der weltbesten Go-Spieler verliert wieder gegen die KI. Golem. https://www.golem.de/news/alphago-klare-niederlage-auch-im-zweiten-spiel-1603-119683.html
[^33]: Mozur, P. (2017, May 23). Google’s AlphaGo Defeats Chinese Go Master in Win for A.I. New York Times. https://www.nytimes.com/2017/05/23/business/google-deepmind-alphago-go-champion-defeat.html
[^34]: Neuer Boom: Viele entdecken in Corona-Zeiten das Schach. (2021, February 2). Zeit. https://www.zeit.de/news/2021-02/02/neuer-boom-viele-entdecken-in-corona-zeiten-das-schach

</div>

## 
`;