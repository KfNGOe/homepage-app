import { Rdf } from "./input.js";
//import fs from "fs";
import { writeFile, readFileSync } from "fs";

let rdf = Rdf;

let dateIdCounter = 0;

const api = rdf.map((item) => {
    dateIdCounter++;
    return {
        volNr: item.volNr.value,
        name: item.name ? item.name.value : '',
        mainTitle: item.mainTitle.value,
        date: item.date ? item.date.value : '',
        member: item.member.value,
        doi: item.doi.value,
        pdf: item.pdf.value,
        pic: base64_encode(item.pic.value),
        textCit: item.cit.value,
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
    var bitmap = readFileSync('./content/images/' + file);
    // convert binary data to base64 encoded string
    return "data:image/jpeg;base64," + new Buffer(bitmap).toString('base64');
}


writeFile('output/api.json', JSON.stringify(api), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});