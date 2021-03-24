const sql = require("mssql");
const fs = require("fs");
const config = require("../database/config");
let path = '/Users/arocha/Documents/projetos_nodes/app-arquivo_to_database/arquivos/';

async function insertDataInDatabase() {
    try {
        const filesPath = await readDir();
        let dataToInsert = [];

        filesPath.forEach(filePath => {
            const dataFile = readFile(filePath);
            dataToInsert.push(dataFile);
        });
    }
    catch (err) {
        console.log(err);
    }
}

function readDir() {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data.map(fileName => path + fileName));
        });
    });
}

async function readFile(filePath) {
    fs.readFile(filePath, (err, data) => {
        if (err) throw err;
        return data.toString();
    });
}

function insertData() {

}

async function teste() {
    try {
        const data = await readFile();
    }
    catch (err) {
        console.error(err);
    };
}

insertDataInDatabase();