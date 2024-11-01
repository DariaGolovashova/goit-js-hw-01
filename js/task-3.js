function getElementWidth(content, padding, border) { 
    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding);
    const bordergWidth = parseFloat(border);
    const borderBox = contentWidth + 2 * paddingWidth + 2 * bordergWidth;

    return borderBox;


return 
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200