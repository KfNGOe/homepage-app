import { aktuellesRdf } from "./input.js";
//import fs from "fs";
import { writeFile, readFileSync } from "fs";

let rdf = aktuellesRdf.results.bindings;

let dateIdCounter = 0;

const aktuellesApi = rdf.map((item) => {
    dateIdCounter++;
    return {
        title: item.title.value,
        date: new Date(item.date.value).toISOString().split('T')[0],
        text: filterText(item.text.value),
        image: base64_encode("./content/images/" + item.pic.value),
        createDate: Date.now() + dateIdCounter,
        moreLink: item.s.value
    };
});

function filterText(text) {
    text = text.replaceAll('[:]', '');
    text = text.replaceAll('<img src=\"wp-content/themes/kofnego/images/extlink_1.gif\" alt=\"Externer Link\" />', '');
    text = text.replaceAll('<!--more-->', '');
    text = text.replaceAll('[:de]', '');
    text = text.replaceAll('<h2>', '');
    text = text.replaceAll('</h2>', '');
    return text;
}

//load image as base64
function base64_encode(file) {
    // read binary data
    console.log(file);
    file.trim();
    if (file == "./content/images/") {
        return "";
    }
    var bitmap = readFileSync(file);
    // convert binary data to base64 encoded string
    return "data:image/jpeg;base64," + new Buffer(bitmap).toString('base64');
}


//write aktuellesApi to file
writeFile('aktuellesApi.json', JSON.stringify(aktuellesApi), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});