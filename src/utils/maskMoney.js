
  function maskMoney (value) {
    
    let res = value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g)

    return res
  }

  module.exports = maskMoney