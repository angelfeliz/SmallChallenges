export const sortDescent = (propertyForSort) => {
  console.log('waht goo inside ', this);
return  this.sort((a,b) => {
           return b[propertyForSort] - a[propertyForSort]
         })
}
