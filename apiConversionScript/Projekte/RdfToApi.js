import { Rdf } from "./input.js";
//import fs from "fs";
import { writeFile, readFileSync } from "fs";

let rdf = Rdf[2].items; //select here which part of the projects page to convert: 0=laufend, 1=assoziiert, 2=abgeschlossen

let dateIdCounter = 0;

const api = rdf.map((item) => {
    dateIdCounter++;
    console.log(item.titel);
    return {
        title: item.titel,
        text: item.text,
        fulltext: item.fulltext,
        kontaktTitle: item.kontakt[0] ? item.kontakt[0].title : '',
        kontaktEmail: item.kontakt[0] ? item.kontakt[0].email : '',
        textInfos: item.infos.join(' \n '),
        pic: base64_encode(item.pictureref),
        pictureCaption: item.picturecaption,
        createDate: Date.now() + dateIdCounter,
    };
});


//load image as base64
function base64_encode(file) {
    // read binary data
    if (!file) return false;
    console.log(file);
    file.trim();
    if (file.startsWith('/')) file = file.substr(1);
    var bitmap = readFileSync('./' + file);
    // convert binary data to base64 encoded string
    return "data:image/jpeg;base64," + new Buffer(bitmap).toString('base64');
}


writeFile('output/api.json', JSON.stringify(api), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});