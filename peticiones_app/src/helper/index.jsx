//export const isItemExist=(id,arr)=> {
 //   console.log({id,arr})
  // return  arr.some((item)=> item.id ===id)
//}
export const defineInputType = (string) => {
    switch (string) {
        case 'precio':
            return "number"
        
        default:
            return "text"
    }
}