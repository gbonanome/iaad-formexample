# Connettere una pagina HTML ad un DB
Un piccolo esempio di pagina HTML con connessione ad un DB utilizzando un semplice webserver PHP e del Javascript.

## Istruzioni

### 1. Dove mettere i file
Scaricate i file all'interno della cartella pubblica del vostro webserver. Se usate MAMP potete raggiungerla dalle preferenze dell'applicazione cliccando su _Web Server_ quindi su _Document Root_. Per XAMPP dovrete avvire il webserver, quindi andare su _Volumes_ e cliccare su _Mount_, quindi cliccare su _Explore_ e aprire la cartella _htdocs_

### 2. Caricate il DB d'esempio
Aprite phpMyAdmin e quindi importate il file Hogwarts.sql, verrà creato un nuovo database chiamato "Hogwarts" con tutte le tabelle necessarie a far funzionare l'esempio.

### 3. Create il file con le informazioni di connessione
Nella stessa cartella dove avete i file dell'esempio, create un nuovo file chiamato `auth.php` duplicando il file `auth.example.php` e modificando le informazioni di connessione se necessario.

### 4. Aprite il sito
Assicuratevi di aver avviato XAMPP o MAMP, quindi collegatevi al file client.html dal vostro browser.
Potreste dover digitare un indirizzo del tipo 
`http://localhost/iaad-formexample/client.html`
dove "iaad-formexample" è il nome della cartella che contiene tutti i vostri file

## Credits
Creato da Giulio Bonanome e Giuseppe Menegoz per i corsi Web Development e Basi di Dati del corso di laurea in Digital Communiction Design presso IAAD Bologna, A.A. 2019-2020.