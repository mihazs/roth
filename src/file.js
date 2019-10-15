import fs from "fs";

export function read(path){    
    return fs.readFileSync(path, 'utf8');
}
export function write(path, content){
    console.log(path);
    fs.writeFileSync(path, content, "utf-8");
}