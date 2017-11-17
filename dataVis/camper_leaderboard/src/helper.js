export const sortDescent = (objToSort, propertyForSort, callback) => {
    let sortObj = objToSort.sort((a,b) => {
                         return b[propertyForSort] - a[propertyForSort]
                    });
  callback(sortObj);
}
