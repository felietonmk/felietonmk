
/*
Tipue Search 6.0
Copyright (c) 2017 Tipue
Tipue Search is released under the MIT License
http://www.tipue.com/search
*/


/*
Stop words
Stop words list from http://www.ranks.nl/stopwords
*/


var tipuesearch_stop_words = ["ach", "aj", "albo", "bardzo", "bez", "bo", "być", "ci", "cię", "ciebie", "co", "czy", "daleko", "dla", "dlaczego", "dlatego", "do", "dobrze", "dokąd", "dość", "dużo", "dwa", "dwaj", "dwie", "dwoje", "dziś", "dzisiaj", "gdyby", "gdzie", "go", "ich", "ile", "im", "inny", "ja", "ją", "jak", "jakby", "jaki", "je", "jeden", "jedna", "jedno", "jego", "jej", "jemu", "jeśli", "jest", "jestem", "jeżeli", "jużkażdy", "kiedy", "kierunku", "kto", "ku", "lub", "ma", "mają", "mam", "mi", "mną", "mnie", "moi", "mój", "moja", "moje", "może", "mu", "my", "na", "nam", "nami", "nas", "nasi", "nasz", "nasza", "nasze", "natychmiast", "nią", "nic", "nich", "nie", "niego", "niej", "niemu", "nigdy", "nim", "nimi", "niż", "obok", "od", "około", "on", "ona", "one", "oni", "ono", "owszem", "po", "pod", "ponieważ", "przed", "przedtem", "są", "sam", "sama", "się", "skąd", "tak", "taki", "tam", "ten", "to", "tobą", "tobie", "tu", "tutaj", "twoi", "twój", "twoja", "twoje", "ty", "wam", "wami", "was", "wasi", "wasz", "wasza", "wasze", "we", "więc", "wszystko", "wtedy", "wy", "żaden", "zawsze", "że"];


// Word replace

var tipuesearch_replace = {'words': []};


// Weighting

var tipuesearch_weight = {'weight': []};


// Illogical stemming

var tipuesearch_stem = {'words': [ ]};


// Related searches

var tipuesearch_related = {'searches': []};


// Internal strings

var tipuesearch_string_1 = 'Brak tytułu';
var tipuesearch_string_2 = 'Wyświetlanie wyników dla';
var tipuesearch_string_3 = 'Zamiast tego wyszukaj';
var tipuesearch_string_4 = '1 wynik';
var tipuesearch_string_5 = 'wyników';
var tipuesearch_string_6 = 'Cofnij';
var tipuesearch_string_7 = 'Więcej';
var tipuesearch_string_8 = 'Niczego nie znaleziono.';
var tipuesearch_string_9 = 'Słowa występujące pospolicie są w dużej mierze ignorowane.';
var tipuesearch_string_10 = 'Szukana fraza jest za krótka';
var tipuesearch_string_11 = 'Wymagany jest co najmniej jeden znak.';
var tipuesearch_string_12 = 'Wymagane są co najmniej';
var tipuesearch_string_13 = 'znaki.';
var tipuesearch_string_14 = 'sekund';
var tipuesearch_string_15 = 'Fraza związana z';


// Internals


// Timer for showTime

var startTimer = new Date().getTime();

