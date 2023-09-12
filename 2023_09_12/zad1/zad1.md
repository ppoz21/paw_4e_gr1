# Zadanie 1

Napisz funkcję `f1` w Javascript. Funkcja `f1` ma przyjąć 2 argumenty liczbowe.
Funkcja `f1` ma zostać wywołana z innej funkcji (`f2`), która będzie wywoływana co minutę.
Funkcja `f2` zapytuje użytkownika o:
1. Podanie roku urodzenia
1. Wskazanie ulubionej liczny

Funkcja `f2` waliduje poprawność utworzonych liczb (rok większy od 1920 i mniejszy od 2023, ulubiona liczba z 
wykluczeniem 69, 420, 2137).
Funkcja powinna zwrócić błąd w postaci alertu w przypadku wprowadzenia wartości nie liczbowej i ponownie 
poprosić o wprowadzenie argumentu, który otrzymał błędne dane.

Funkcja `f1` po otrzymaniu liczb od funkcji `f2` utworzy element HTML i wstawi do niego tekst: 
> Ulubioną liczbą osoby urodzonej w <rok> roku jest <ulubiona liczba>
