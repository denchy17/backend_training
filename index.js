import fs from 'node:fs';
import path from 'node:path';

function getSum(dirPath, names) {
    const list = [];
    let sum = 0;
    
    fs.readdir(dirPath, (err, files) => {
        try {
            files.forEach(file => {
                if(path.extname(file) === '.txt') {
                    list.push({ name: path.parse(file).name, value: Number(fs.readFileSync(file,'utf8')) });
                }
            });
            list.forEach(item => {
                if(names.includes(item.name)) {
                    sum += item.value;
                }
            });
            console.log(sum);
        }
        catch(err) {
            console.error(err);
        }
    });
}

getSum('./', ['a', 'b']);
