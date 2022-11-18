//creating class list for styles module
export const classLister = styleObject => (...classList) =>
    classList.reduce((list, myClass) => {
        let output = list;
        if (styleObject[myClass]) {
            if (list) output += ' ';
            output += styleObject[myClass];
        }
        return output;
    }, '');