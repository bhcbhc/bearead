/**
 * Created by ninghai on 2018/7/18.
 *
 */

export const test = "test";
export const numberParser = number => {
    let len, size;
    let strArray = number+ '';
    strArray= strArray.split('');
    len = strArray.length;
    if(len <=3) return number;
    size= Math.floor(len/3);
    for(let i=1; i<=size; i++) {
        strArray.splice(len-3*i, 0, ',');
    }
    strArray= strArray.join("");
    return strArray;
}