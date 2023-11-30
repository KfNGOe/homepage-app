import { Rdf } from "./input.js";
//import fs from "fs";
import { writeFile, readFileSync } from "fs";

let rdf = Rdf.items;

let dateIdCounter = 0;

const api = rdf.map((item) => {
    dateIdCounter++;
    return {
        name: item.person,
        position: item.taetigkeit,
        www: item.www,
        orcId: item.orcid,
        viafId: item.viafid,
        textBio: item.text,
        pic: base64_encode(item.pictureref),
        createDate: Date.now() + dateIdCounter,
    };
});


//load image as base64
function base64_encode(file) {
    // read binary data
    if (!file) return false;
    console.log(file);
    file.trim();
    var bitmap = readFileSync('./' + file);
    // convert binary data to base64 encoded string
    return "data:image/jpeg;base64," + new Buffer(bitmap).toString('base64');
}


writeFile('api.json', JSON.stringify(api), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});