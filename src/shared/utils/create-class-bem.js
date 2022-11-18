export const createBEM = (blockName, elementName, ...props) => {
    const element = elementName ? `__${elementName}` : '';
    const modification = props.map(item => `_${item}`).join('');
    return `${blockName}${element}${modification}`;
}