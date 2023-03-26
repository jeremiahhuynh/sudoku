function getRow(grid, rInd){
    return grid[rInd];
}
function getColumn(grid, cInd){
    let column = [];
    for(let i = 0; i < 9; i++){
        column.push(sudoGrid[i][cInd]);
    }
    return column;
}
function getSection(grid, x, y){
    let section = [];
    for (let i = x; i < x + 3; i++) {
      for (let j = y; j < y + 3; j++) {
        section.push(grid[i][j]);
      }
    }
    return section;
}

function includes1to9(subsection) {
    if (subsection.length !== 9) {
        return false;
      }
      const digits = new Set();
      for (let i = 0; i < 9; i++) {
        const digit = subsection[i];
        if (digit < 1 || digit > 9 || digits.has(digit)) {
          return false;
        }
        digits.add(digit);
      }
      return true;
    }
