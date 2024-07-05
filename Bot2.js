const fs = require('fs');
const prompt = require('prompt-sync')();

// Função para imprimir o banner
function printBanner() {
    console.clear();
    console.log(`
===================================
      Combolist Processor
===================================⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠾⠷⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡜⠭⠬⣥⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⡘⡒⠐⡐⡒⢣⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣰⡓⡭⠀⡄⠬⢭⣇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢠⣿⣿⢿⠿⠿⢿⡿⣾⣆⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢠⣿⣿⡽⠤⠐⠒⢞⣤⣪⠝⡄⠀⠀⠀⠀
⠀⠀⠀⢀⣿⠟⢁⣀⣤⣤⣶⣦⣤⣩⣷⣾⡄⠀⠀⠀
⠀⠀⢀⣚⣥⡶⢏⢿⣧⣘⣿⢿⡿⠟⣿⣿⡳⡀⠀⠀
⠀⠀⢎⡪⠏⠳⠎⠪⠃⠤⠾⠛⠑⢐⡻⣿⣭⡲⡀⠀
⠀⣜⢿⣑⠠⢀⣀⠐⣒⠒⠒⢒⣼⣯⡿⢉⣰⣙⢧⠀
⡼⣛⣲⡯⠉⣅⠐⡒⡚⢛⡗⡚⣓⢩⡍⠅⠗⢾⣶⣧

\x1b[31mBy zBLACKHAT V1\x1b[0m
===================================⠀
`);
}

// Função principal
function processCombolist() {
    printBanner(); // Imprime o banner inicial

    // Solicita ao usuário que selecione um arquivo de combolist
    const combosec = prompt('Select a combolist to use: ');
    let combolistPath = combosec.replace(/"/g, ''); // Remove as aspas duplas do caminho do arquivo
    console.log(`Selected combolist: ${combolistPath}`);

    // Lê o conteúdo do arquivo de combolist
    let combolist = fs.readFileSync(combolistPath, 'utf8').split('\n').map(x => x.trim());

    // Processa cada linha da combolist com um atraso de 250ms entre cada iteração
    for (let i = 0; i < combolist.length; i++) {
        setTimeout(() => {
            let combo = combolist[i];
            let comboname = combo.split('@')[1].split(':')[0].trim();
            fs.appendFileSync(`./${comboname}.txt`, `${combo}\n`); // Salva a combinação em um arquivo de texto com base no nome do usuário

            printBanner(); // Limpa o console e imprime o banner atualizado
            console.log(`[${i + 1}/${combolist.length}] ${combo}`); // Exibe o progresso atual
        }, 250 * i); // Atraso progressivo para cada iteração
    }
}

// Chamada da função principal para iniciar o processamento da combolist
processCombolist();
