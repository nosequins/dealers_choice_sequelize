if(charName.groupId === 2 ){
    document.querySelector('.details').appendChild('<li>parent: ${charName.parentId}</li>')
}else{
    document.querySelector('.details').appendChild('<li>child: ${charName.child} </li>')
}