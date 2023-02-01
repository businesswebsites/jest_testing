const PDFMerger = require('pdf-merger-js');
const fs = require("fs");
const {PDFDocument} = require("pdf-lib");

// var merger = new PDFMerger();

// (async () => { 
//     merger.add(PDFDocument.load(fs.readFileSync('./pdf1.pdf')));  //merge all pages. parameter is the path to file and filename.
//     merger.add(PDFDocument.load(fs.readFileSync('./pdf2.pdf'))); // merge only page 2

//   await merger.save('Kostenaufstellung.pdf'); //save under given name and reset the internal document
// })();
run();
async function run(){
    const cover = await PDFDocument.load(fs.readFileSync(".pdf"));
    const cover2 = await PDFDocument.load(fs.readFileSync(".pdf"));

    const doc = await PDFDocument.create();

    const contentPages1 = await doc.copyPages(cover, cover.getPageIndices());
    for(const page of contentPages1){
        doc.addPage(page);
    }

    const contentPages2 = await doc.copyPages(cover2, cover2.getPageIndices());
    for(const page of contentPages2){
        doc.addPage(page);
    }


    fs.writeFileSync(".pdf", await doc.save());
}