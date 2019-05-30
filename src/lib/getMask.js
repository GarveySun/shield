module.exports = function(num){

  num = parseInt(num) || 0

  if(num < 0)num = 0

  let mask = ''

  while(mask.length < num){
    mask+='*'
  }

  return mask
}
