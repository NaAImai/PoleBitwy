let wygrany = "Nikt"
let tura = false // false - Gracz 1 , true - Gracz 2
const poleStr = "* * * * * * * *\n* * * * * * * *\n* * * * * * * *\n* * * * * * * *"
//let templateStr = "- - - - - - - -\n- - - - - - - -\n- - - - - - - -\n- - - - - - - -\n- - - - - - - -\n- - - - - - - -\n- - - - - - - -\n- - - - - - - -"
const perzedzial = "\n-------------\n"
let daneJednostek = [cz = [], s = [], o = [], b = [], w = [], z = [], p = [], cz = [], s = [], o = [], b = [], w = [], z = [], p = []] // cz s o b w ż p
const jednostki = ['cz', 's', 'o', 'b', 'w', 'ż', 'p']
//const staty = [cz = [3, 1, 1], s = [1, 0.9, 0.75, 4, 0.7, 0.8, 0.9, 0.85], o = [1, 0.7, 0.65, 3, 0.9, 0.7, 0.45], b = [1, 1, 0.85], w = [2, 0, 0.7], z = [2, 0.8, 0.9, 3, 0.9, 0.8, 0.75], p = [3, 0.8, 0.95, 3, 0.9, 0.75, 0.7]]
// ARMOR PRZEBICIE SZANSA_NA_TRAFIENIE ZASIĘG_STRZAŁU SZANSE_POSZCZEGOLNYCH_STRZAŁÓW 
const staty = [
cz = {zbroja: 3, przebicie: 1, szansaNaTrafienie: 1, zasiegStrzalu: 3},
s = {zbroja: 1, przebicie: 0.9, szansaNaTrafienie: 0.75, zasiegStrzalu: 4, szanseStrzlow: [0.7, 0.8, 0.9, 0.85], walkaWZwarciu: 1},
o = {zbroja: 1, przebicie: 0.7, szansaNaTrafienie: 0.65, zasiegStrzalu: 3, szanseStrzlow: [0.9, 0.7, 0.45], walkaWZwarciu: 1},
b = {zbroja: 1, przebicie: 1, szansaNaTrafienie: 0.85, zasiegStrzalu: 3, walkaWZwarciu: 2},
w = {zbroja: 2, przebicie: 0, szansaNaTrafienie: 0.7, walkaWZwarciu: 3},
z = {zbroja: 2, przebicie: 0.8, szansaNaTrafienie: 0.9, zasiegStrzalu: 3, szanseStrzlow: [0.9, 0.8, 0.75], walkaWZwarciu: 3},
p = {zbroja: 3, przebicie: 0.8, szansaNaTrafienie: 0.95, zasiegStrzalu: 3, szanseStrzlow: [0.9, 0.75, 0.7], walkaWZwarciu: 2}
]
let tepm = [a = [], b = [], c = [], d = [], e = [], f = [], g = [], h = []]

let pole1 = [...poleStr]
let pole2 = [...poleStr]




Ustawianie()
daneJednostek.forEach((element, index) => {if(index == 2){element[0] = 4; element[1] = 4}else{element[2] = 0}})
while (wygrany == 'Nikt') {
    Tura()
    if(daneJednostek[3][0] == 8 && daneJednostek[3][2] == 1){
        wygrany = 'Gracz 1'
        break
    }
    else if(daneJednostek[10][0] == 8 && daneJednostek[10][2] == 1){
        wygrany = "Gracz 2"
        break
    }
    for (let i = 0; i < 8; i++) {
        if(i == 7)
        {
            wygrany = "Gracz 2"
            break
        }
        else if(daneJednostek[i][2] != 0)
            break   
    }
    for (let i = 7; i < 15; i++) {
        if(i == 14)
        {
            wygrany = "Gracz 1"
            break
        }
        else if(daneJednostek[i][2] != 0)
            break   
    }
    if(daneJednostek.filter((value) => {return value[2] != 0}).every((value) => {return value[0] == 8}))
    {
        zyjacy1 = 0
        zyjacy2 = 0
        for (let i = 0; i < 7; i++) {
            if(daneJednostek[i][2] != 0)
                zyjacy1++ 
        }
        for (let i = 7; i < 14; i++) {
            if(daneJednostek[i][2] != 0)
                zyjacy2++ 
        }
        if(zyjacy1 > zyjacy2)
            wygrany = "Gracz 1"
        else if(zyjacy1 < zyjacy2)
            wygrany = "Gracz 2"
        else
            wygrany = "Remis"
    }
}

alert(wygrany)





function Ustawianie()
{
    for (let i = 0; i < 7; i++) {
        if(i == 0)
        {
            do
            {
                chg = prompt(`Podaj miejsce dla jednostki: ${jednostki[i]}\n` + pole1.toString().replaceAll(',',""))
                wektor = parseInt(chg)
                if(pole1[47 + wektor * 2 - 1] == '*' && pole1[47 + wektor * 2 + 1] == "*")
                {    
                    pole1[47 + wektor * 2 - 1] = "c"
                    pole1[47 + wektor * 2 + 1] = "z"
                }
                else wektor = 0
            }while (wektor <= 0 || wektor >= 8)   
            daneJednostek[i] = [1, wektor, 3]
        }
        else
        {
            do
            {
                chg = prompt(`Podaj miejsce dla jednostki: ${jednostki[i]}\n` + pole1.toString().replaceAll(',',""))
                wektor = parseInt(chg)
                if(pole1[47 + wektor * 2 - 1] == '*')
                {    
                    pole1[47 + wektor * 2 - 1] = jednostki[i] // stawianie żołnierzy na polu (* 2 - bo są spacje)
                }
                else wektor = 0
            }while (wektor <= 0 || wektor > 8)   
            daneJednostek[i] = [1, wektor, 1]
        }
        
    }

    // poleStr = pole2.toString().replaceAll(',',"")
    alert("Gracz2 teraz")

    for (let i = 0; i < 7; i++) {
        if(i == 0)
        {
            do
            {
                chg = prompt(`Podaj miejsce dla jednostki: ${jednostki[i]}\n` + pole2.toString().replaceAll(',',""))
                wektor = parseInt(chg)
                if(pole2[47 + wektor * 2 - 1] == '*' && pole2[47 + wektor * 2 + 1] == "*")
                {    
                    pole2[47 + wektor * 2 - 1] = "c"
                    pole2[47 + wektor * 2 + 1] = "z"
                }
                else wektor = 0
            }while (wektor <= 0 || wektor >= 8)   
            daneJednostek[i + 7] = [1, wektor, 3]
        }
        else
        {
            do
            {
                chg = prompt(`Podaj miejsce dla jednostki: ${jednostki[i]}\n` + pole2.toString().replaceAll(',',""))
                wektor = parseInt(chg)
                if(pole2[47 + wektor * 2 - 1] == '*')
                {    
                    pole2[47 + wektor * 2 - 1] = jednostki[i] // stawianie żołnierzy na polu (* 2 - bo są spacje)
                }
                else wektor = 0
            }while (wektor <= 0 || wektor > 8)   
            daneJednostek[i + 7] = [1, wektor, 1]
        }
    }       
    
}

function Reversacja(tab)
{
    let ret = []
    tab.forEach((element, index) => {
       switch (element) {
        case "z":
            ret[tab.length - 1 - index] = "c"
            break;
        case "c":
            ret[tab.length - 1 - index] = "z"
            break
        case "\\":
            ret[tab.length - 1 - index] = "n"
            break
        case "n":
            ret[tab.length - 1 - index] = "\\"
            break
        default:
            ret[tab.length - 1 - index] = element
            break;
       }
    });
    return ret
}

function Odkrywanie()
{
    for(let i = 0; i < 8 ; i++)
        for (let j = 0; j < 8; j++) {
            tepm[i][j] = "-"
            
        }
    if(!tura)
        licznik = 0
    else
        licznik = 7
    let max = licznik + 7
    while(licznik < max)
    {
        if(daneJednostek[licznik][2] != 0)
            switch (licznik) {
                case 7:
                case 0:
                    y = daneJednostek[licznik][0] - 1; x = daneJednostek[licznik][1] - 1
                    for (let i = 0; i < 4; i++) 
                        for (let j = 0; j < i * 2 + 1; j++) {
                            if(y - i + j >= 0 && x - 3 + i >= 0 && y - i + j <= 7)
                                tepm[y - i + j][x - 3 + i] = "*"

                        }
                    for (let i = 0; i < 4; i++) 
                        for (let j = 0; j < 7 - 2 * i; j++) {
                            if(y - 3 + i + j >= 0 && x + 1 + i <= 7 && y - 3 + i + j <= 7)
                                tepm[y - 3 + i + j][x + 1 + i] = "*"

                        }
                    break;
                case 8:
                case 1:
                    y = daneJednostek[licznik][0] - 1; x = daneJednostek[licznik][1] - 1
                    for (let i = 0; i < 5; i++) 
                        for (let j = 0; j < i * 2 + 1; j++) {
                            if(y - i + j >= 0 && x - 4 + i >= 0 && y - i + j <= 7)
                                tepm[y - i + j][x - 4 + i] = "*"
                            
                        }
                    for (let i = 0; i < 4; i++) 
                        for (let j = 0; j < 7 - 2 * i; j++) {
                            if(y - 3 + i + j >= 0 && x + 1 + i <= 7 && y - 3 + i + j <= 7)
                                tepm[y - 3 + i + j][x + 1 + i] = "*"
                                
                        }

                    break;
                case 9:
                case 2:
                    if(daneJednostek[licznik][0] > 4)
                    {
                        for(let i = 4; i < 8; i++)
                            for(let j = 0; j < 8; j++)
                                tepm[i][j] = "*"
                    }

                    
                default:
                    y = daneJednostek[licznik][0] - 1; x = daneJednostek[licznik][1] - 1
                    for (let i = 0; i < 4; i++) 
                        for (let j = 0; j < i * 2 + 1; j++) {
                            if(y - i + j >= 0 && x - 3 + i >= 0 && y - i + j <= 7)
                                tepm[y - i + j][x - 3 + i] = "*"

                        }
                    for (let i = 0; i < 3; i++) 
                        for (let j = 0; j < 5 - 2 * i; j++) {
                            if(y - 2 + i + j >= 0 && x + 1 + i <= 7 && y - 2 + i + j <= 7)
                                tepm[y - 2 + i + j][x + 1 + i] = "*"

                        }

                    
                    break;
                    
            }
        licznik++ 
    }
}





function Wyswietlanie(poleJed, poleDwa) {
    Odkrywanie()
    poleDwa = Reversacja(poleDwa)

    for(let i = 0; i < 4; i++)
    {
        for(let j = 0; j < 8; j++)
        {
            if (tepm[i][j] == "-")
                poleJed[2 * j + (3 - i) * 16] = "-"  //0 0 0 1
        }
    }
    for(let i = 4; i < 8; i++)
        for(let j = 0; j < 8; j++) // 7 7 => 0 0 , 7 6 => 0 2 , 7 5 => 4
        {
            if (tepm[i][j] == "-")
                poleDwa[48 - (i - 4) * 16 + j * 2] = "-"
        }
    
    return prompt(poleDwa.toString().replaceAll(',',"") + perzedzial + poleJed.toString().replaceAll(',',""))
}





function Stawianie()
{
    pole1 = [...poleStr]
    pole2 = [...poleStr]
    daneJednostek.forEach((element, index) => {
        y = element[0] - 1
        x = element[1] - 1
        if(index < 7)
        {
            if(y <= 3)
            {
                if(element[2] != 0)
                {
                    if(index == 0)
                    {
                        pole1[x * 2 + 48 - 16 * y] = "c"
                        pole1[x * 2 + 48 - 16 * y + 2] = "z"
                    }
                    else
                    {
                        pole1[x * 2 + 48 - 16 * y] = jednostki[index]
                    }
                }
            }
            else
            {
                if(element[2] != 0)
                {
                    if(index == 0)
                    {
                        pole2[14 - x * 2 + 16 * (y - 4)] = "z"
                        pole2[ 14 - x * 2 + 16 * (y - 4) - 2] = "c"
                    }
                    else
                    {
                        pole2[14 - x * 2 + 16 * (y - 4)] = jednostki[index]
                    }
                }
            }
        }
        else
        {
            if(y <= 3)
            {    
                if(element[2] != 0)
                {
                    if(index - 7 == 0)
                    {
                        pole2[x * 2 + 48 - 16 * y] = "c"
                        pole2[x * 2 + 48 - 16 * y + 2] = "z"
                    }
                    else
                    {
                        pole2[x * 2 + 48 - 16 * y] = jednostki[index - 7]
                    }
                }
            }
            else    
                if(element[2] != 0)
                    {
                        if(index - 7 == 0)
                        {
                            pole1[14 - x * 2 + 16 * (y - 4)] = "z"
                            pole1[ 14 - x * 2 + 16 * (y - 4) - 2] = "c"
                        }
                        else
                        {
                            pole1[14 - x * 2 + 16 * (y - 4)] = jednostki[index - 7]
                        }
                    }
        }
    });
}





function Tura()
{
    Stawianie()
    console.log(tepm)
    atak = ruch = true
    if(tura)
    {
        while(atak || ruch)
        {    
            do 
            {
                chg = Wyswietlanie(pole2, pole1)
                if(chg == "s")
                {
                    atak = ruch = false
                    break
                }
            } while (chg[0] != "r" && chg[0] != 'a');
            if (chg == "s") {
                break
            } else {
                if(chg[0] == 'r' && ruch)
                {
                    if(jednostki.includes(chg[1]) || chg[1] + chg[2] == "cz")
                        {
                            if(Ruch(chg[1] == "c" && chg[2] == "z" ? "cz" : chg[1]))
                            {
                                ruch = false
                                Stawianie()    
                            }
                        }
                }
                else if (chg[0] == 'r' && !ruch)
                {
                    alert("Ruch został już wykonany")
                }
                else if(chg[0] == 'a' && atak)
                {
                    if((jednostki.includes(chg[1]) && (jednostki.includes(chg[2]) || chg[2] + chg[3] == "cz")))
                        {
                            if(Atak(chg[1], chg[2] + chg[3] == "cz" ? "cz" : chg[2]))
                            {
                                atak = false
                                Stawianie()
                            }
                        }
                        else if ((chg[1] + chg[2] == 'cz' && (jednostki.includes(chg[3]) || chg[3] + chg[4] == "cz")))
                        {
                            if(Atak("cz", chg[3] + chg[4] == "cz" ? "cz" : chg[3]))
                            {
                                atak = false
                                Stawianie()
                            }
                        }
                        else alert("Błędny input")
                }
                else if(chg[0] == "a" && !atak)
                {
                    alert("Atak został już wykonany")
                }
                else alert("Coś nie tak")
            }
        }
        alert("Koniec tury")
        tura = false

    }
    else
    {
        while(atak || ruch)
            {    
                do 
                {
                    chg = Wyswietlanie(pole1, pole2)
                    if(chg == "s")
                    {
                        atak = ruch = false
                        break
                    }
                } while (chg[0] != "r" && chg[0] != 'a');
                if (chg == "s") {
                    break
                } else {
                    if(chg[0] == 'r' && ruch)
                    {
                        if(jednostki.includes(chg[1]) || chg[1] + chg[2] == "cz")
                        {
                            if(Ruch(chg[1] == "c" && chg[2] == "z" ? "cz" : chg[1]))
                            {
                                ruch = false
                                Stawianie()    
                            }
                        }
                    }
                    else if (chg[0] == 'r' && !ruch)
                    {
                        alert("Ruch został już wykonany")
                    }
                    else if(chg[0] == 'a' && atak)
                    {
                        if((jednostki.includes(chg[1]) && (jednostki.includes(chg[2]) || chg[2] + chg[3] == "cz")))
                        {
                            if(Atak(chg[1], chg[2] + chg[3] == "cz" ? "cz" : chg[2]))
                            {
                                atak = false
                                Stawianie()
                            }    
                        }
                        else if ((chg[1] + chg[2] == 'cz' && (jednostki.includes(chg[3]) || chg[3] + chg[4] == "cz")))
                        {
                            if(Atak("cz", chg[3] + chg[4] == "cz" ? "cz" : chg[3]))
                            {
                                atak = false
                                Stawianie()
                            }
                        }
                        else alert("Błędny input")
                    }
                    else if(chg[0] == 'a' && !atak)
                        alert("Atak został już wykonany")
                    else alert("Coś nie tak")
                }
            }
            alert("Koniec tury")
            tura = true

    }    
}





function Ruch(jednostka) {
    if(tura)
    {
        daneJednostki = daneJednostek[jednostki.indexOf(jednostka) + 7]
        if(daneJednostki[2] != 0 && daneJednostki[0] != 8)
        {
            if(ktosPrzedeMna(jednostki.indexOf(jednostka) + 7) == -1)
            {
                daneJednostek[jednostki.indexOf(jednostka) + 7][0] += 1 
                return true
            }
            else if((daneJednostki[0] == 4 && jednostka != "cz") || jednostki[ktosPrzedeMna(jednostki.indexOf(jednostka) + 7)] == "cz") 
            {
                alert("Nie możesz przemieścić tej jednostki")
                return false
            }
            else if (jednostka == "cz")
            {
                daneJednostek[ktosPrzedeMna(jednostki.indexOf(jednostka) + 7)][0] -= 1
                daneJednostki[0] += 1
                return true
            }
            else
            {
                if(Math.random() <= staty[jednostki.indexOf(jednostka)].walkaWZwarciu + 2 / staty[jednostki.indexOf(jednostka)].walkaWZwarciu + 2 + staty[ktosPrzedeMna(jednostki.indexOf(jednostka) + 7)].walkaWZwarciu)
                {
                    daneJednostek[ktosPrzedeMna(jednostki.indexOf(jednostka) + 7)][2] = 0
                    daneJednostek[jednostki.indexOf(jednostka) + 7][0] += 1
                    alert("Twoja jednostka wygrała starcie!")
                }
                else
                {
                    daneJednostek[jednostki.indexOf(jednostka) + 7][0] = 0
                    alert("Twoja jednostka przegrała starcie")
                }
                return true
            }
            
        }
        else if(daneJednostki[2] == 0)
        {
            alert("Jednostka już nie żyje")
            return false
        }
        else
        {
            alert("Jednostka nie może się już dalej przemieścić")
            return false
        }
    }
    else
    {
        daneJednostki = daneJednostek[jednostki.indexOf(jednostka)]
        if(daneJednostki[2] != 0 && daneJednostki[0] != 8)
        {
            if(ktosPrzedeMna(jednostki.indexOf(jednostka)) == -1)
            {
                daneJednostek[jednostki.indexOf(jednostka)][0] += 1 
                return true
            }
            else if((daneJednostki[0] == 4 && jednostka != "cz") || jednostki[ktosPrzedeMna(jednostki.indexOf(jednostka)) - 7] == "cz") 
            {
                alert("Nie możesz przemieścić tej jednostki")
                return false
            }
            else if (jednostka == "cz")
            {
                daneJednostek[ktosPrzedeMna(jednostki.indexOf(jednostka))][0] -= 1
                daneJednostki[0] += 1
                return true
            }
            else
            {
                if(Math.random() <= staty[jednostki.indexOf(jednostka)].walkaWZwarciu + 2 / staty[jednostki.indexOf(jednostka)].walkaWZwarciu + 2 + staty[ktosPrzedeMna(jednostki.indexOf(jednostka)) - 7].walkaWZwarciu)
                {
                    daneJednostek[ktosPrzedeMna(jednostki.indexOf(jednostka))][2] = 0
                    daneJednostek[jednostki.indexOf(jednostka)][0] += 1
                    alert("Twoja jednostka wygrała starcie!")
                }
                else
                {
                    daneJednostek[jednostki.indexOf(jednostka)][0] = 0
                    alert("Twoja jednostka przegrała starcie")
                }
                return true
            }
            
        }
        else if(daneJednostki[2] == 0)
        {
            alert("Jednostka już nie żyje")
            return false
        }
        else
        {
            alert("Jednostka nie może się już dalej przemieścić")
            return false
        }

    }

}

function Atak(jednostka, cel) //przebudowa całego ataku
{
    
    if(jednostki.includes(jednostka) && jednostki.includes(cel))
    { 
    if (tura) {
        if(daneJednostek[jednostki.indexOf(cel)][2] != 0 && daneJednostek[jednostki.indexOf(jednostka) + 7][2] != 0)
            {
                x = jednostki.indexOf(jednostka) + 7
                y = jednostki.indexOf(cel)
                x1 = daneJednostek[x][1]
                x2 = 9 - daneJednostek[y][1]
                y1 = daneJednostek[x][0]
                y2 = 9 - daneJednostek[y][0]
                if(cel == "cz" && x2 > x1)
                    x2 -= 1
                if(jednostka != "cz" && jednostka != "w" && jednostka != "b")
                {
                    if(Math.abs(x2 - x1) + Math.abs(y2 - y1) <= staty[x - 7].zasiegStrzalu)
                    {
                        if(Math.random() <= staty[x - 7].szanseStrzlow[Math.abs(x2 - x1) + Math.abs(y2 - y1)] * staty[y].szansaNaTrafienie)
                        {
                            if((4 - staty[y].zbroja) * 0.3 * staty[x - 7].szansaNaTrafienie >= Math.random())
                            {
                                daneJednostek[y][2] -= 1
                                return true
                            }
                            else
                            {
                                alert("Trafiono, ale nie przebito pancerza")
                                return true
                            }
                        }
                        else
                        {
                            alert("Nie trafiono")
                            return true
                        }

                    }
                    else
                    {
                        alert("Poza zasięgiem")
                        return false
                    }
                }
                else if(jednostka == "cz" || jednostka == "b")
                {
                    if(jednostka == "cz")
                    {
                        if(x1 >= x2)
                        {
                            if(Math.abs(x2 - x1) + Math.abs(y2 - y1) <= staty[x - 7].zasiegStrzalu && Math.abs(x2 - x1) + Math.abs(y2 - y1) != 1)
                            {   if(daneJednostek[y][2] == 1)
                                    daneJednostek[y][2] = 0
                                else
                                    daneJednostek[y][2] -= 2
                                return true
                            }
                        }
                        else
                        {
                            if(Math.abs(x2 - x1 - 1) + Math.abs(y2 - y1) <= staty[x - 7].zasiegStrzalu && Math.abs(x2 - x1 - 1) + Math.abs(y2 - y1) != 1)
                            {    if(daneJednostek[y][2] == 1)
                                    daneJednostek[y][2] = 0
                                else
                                    daneJednostek[y][2] -= 2
                                return true
                            }
                        }
                        alert("Poza zasięgiem")
                        return false
                    }
                    else
                    {
                        if(Math.abs(x2 - x1) + Math.abs(y2 - y1) <= staty[x - 7].zasiegStrzalu && Math.abs(x2 - x1) + Math.abs(y2 - y1) != 1)
                        {
                            if(daneJednostek[y][2] == 1)
                                daneJednostek[y][2] = 0
                            else
                                daneJednostek[y][2] -= 2
                            return true
                        }    
                        else if (Math.abs(x2 - x1) + Math.abs(y2 - y1) == 1)
                        {
                            if(daneJednostek[y][2] == 1)
                                daneJednostek[y][2] = 0
                            else
                                daneJednostek[y][2] -= 2
                            if(Math.random() >= 0.5)
                                daneJednostek[x][2] -= 1
                            return true
                        }
                        alert("Poza zasięgiem")
                        return false

                    }
                    
                }
                else
                {
                    alert("Wysadzaczem się nie strzela!")
                    return false
                }
                
            }
    }
    else
    {
        if(daneJednostek[jednostki.indexOf(cel) + 7][2] != 0 && daneJednostek[jednostki.indexOf(jednostka)][2] != 0)
        {
            x = jednostki.indexOf(jednostka)
            y = jednostki.indexOf(cel) + 7
            x1 = daneJednostek[x][1]
            x2 = 9 - daneJednostek[y][1]
            y1 = daneJednostek[x][0]
            y2 = 9 - daneJednostek[y][0]
            if(cel == "cz" && x2 > x1)
                x2 -= 1
            if(jednostka != "cz" && jednostka != "w" && jednostka != "b")
            {
                if(Math.abs(x2 - x1) + Math.abs(y2 - y1) <= staty[x].zasiegStrzalu)
                {
                    if(Math.random() <= staty[x].szanseStrzlow[Math.abs(x2 - x1) + Math.abs(y2 - y1)] * staty[y - 7].szansaNaTrafienie)
                    {
                        if((4 - staty[y - 7].zbroja) * 0.3 * staty[x].przebicie >= Math.random())
                        {
                            daneJednostek[y][2] -= 1
                            return true
                        }
                        else
                        {
                            alert("Trafiono, ale nie przebito pancerza")
                            return true
                        }
                    }
                    else
                    {
                        alert("Nie trafiono")
                        return true
                    }

                }
                else
                {
                    alert("Poza zasięgiem")
                    return false
                }
            }
            else if(jednostka == "cz" || jednostka == "b")
            {
                if(jednostka == "cz")
                {
                    if(x1 >= x2)
                    {    if(Math.abs(x2 - x1) + Math.abs(y2 - y1) <= staty[x].zasiegStrzalu && Math.abs(x2 - x1) + Math.abs(y2 - y1) != 1)
                            {if(daneJednostek[y][2] == 1)
                                daneJednostek[y][2] = 0
                            else
                                daneJednostek[y][2] -= 2
                            return true
                            }
                    }
                    else
                    {
                        if(Math.abs(x2 - x1 - 1) + Math.abs(y2 - y1) <= staty[x].zasiegStrzalu && Math.abs(x2 - x1 - 1) + Math.abs(y2 - y1) != 1)
                        {    if(daneJednostek[y][2] == 1)
                                daneJednostek[y][2] -= 1
                            else
                                daneJednostek[y][2] -= 2
                            return true
                        }
                    }
                    alert("Poza zasięgiem!")
                    return false

                }
                else
                {
                    if(Math.abs(x2 - x1) + Math.abs(y2 - y1) <= staty[x].zasiegStrzalu && Math.abs(x2 - x1) + Math.abs(y2 - y1) != 1)
                    {
                        if(daneJednostek[y][2] == 1)
                            daneJednostek[y][2] -= 1
                        else
                            daneJednostek[y][2] -= 2
                        return true
                    }    
                    else if(Math.abs(x2 - x1) + Math.abs(y2 - y1) == 1)
                    {
                        if(daneJednostek[y][2] == 1)
                            daneJednostek[y][2] -= 1
                        else
                            daneJednostek[y][2] -= 2
                        if(Math.random() >= 0.5)
                            daneJednostek[x][2] = 0
                        return true
                    }
                    alert("Poza zasięgiem!")
                    return false
                }
            }
            alert("Wysadzaczem się nie strzela!")
            return false
        }
    }
    }
    else alert("Źle wprowadzone dane!")
    return false
}

function ktosPrzedeMna(indeksJednostki) {
    x1 = daneJednostek[indeksJednostki][1]
    y1 = daneJednostek[indeksJednostki][0]
    
    tabi = []
    if(indeksJednostki > 6)
    {
        koniec = 7
        poczatek = 0
    }
    else
    {
        koniec = 14
        poczatek = 7
    }
    for (let i = poczatek; i < koniec; i++) {
        x2 = 9 - daneJednostek[i][1]
        y2 = daneJednostek[i][0]
        if(indeksJednostki == 7 || indeksJednostki == 0)
        {
            if(i == 0 || i == 7)
            {
                if((x2 == x1 || x2 == x1 + 1) && y2 == 8 - y1)
                    return i
                if((x2 + 1 == x1 || x2 + 1 == x1 + 1) && y2 == 8 - y1)
                    return i
            }
            if((x2 == x1 || x2 == x1 + 1) && y2 == 8 - y1)
                return i
        }
        else
        {
            if(i == 0 || i == 7)
            {
                if(x2 == x1 && y2 == 8 - y1)
                    return i
                if(x2 + 1 == x1 && y2 == 8 - y1)
                    return i
            }
            if(x2 == x1 && y2 == 8 - y1)
            return i
        }
    }
    return - 1
}


/*
 Rzeczy do zrobienia: czołg i jego przepychanie
*/