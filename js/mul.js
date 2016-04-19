let gen = require('./gen.js')

module.exports = ( x,y ) => {
  let mul = {
    id:     gen.getUID(),
    inputs: [ x,y ],

    gen() {
      let inputs = gen.getInputs( this ),
          out

      if( isNaN( inputs[0] ) || isNaN( inputs[1] ) ) {
        gen.functionBody += `(${inputs[0]} * ${inputs[1]})`
      }else{
        gen.functionBody += parseFloat( inputs[0] ) * parseFloat( inputs[1] ) 
      }

      return out
    }
  }

  return mul
}
