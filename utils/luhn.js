function _digits_of(number) {
     for (const i in number) {
        return  parseInt(i)
    }
}


function _luhn_checksum(card_number) {
    // Accept only digits, dashes or spaces
      if (/[^0-9-\s]+/.test(value)) return false;
  
      // The Luhn Algorithm. It's so pretty.
      let nCheck = 0, bEven = false;
      value = value.replace(/\D/g, "");
  
      for (var n = value.length - 1; n >= 0; n--) {
          var cDigit = value.charAt(n),
                nDigit = parseInt(cDigit, 10);
  
          if (bEven && (nDigit *= 2) > 9) nDigit -= 9;
  
          nCheck += nDigit;
          bEven = !bEven;
      }
  
      return (nCheck % 10) == 0;
}
  
function is_luhn_valid(card_number) {
    return is_luhn_checksum(card_number) == 0
}
  

export default{ _digits_of, _luhn_checksum, is_luhn_valid };