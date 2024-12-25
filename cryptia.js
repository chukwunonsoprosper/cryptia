import { encryptionAlgorithm, decryptionAlgorithm } from './core/engine.js'

const cryptia = () => {
  const t = encryptionAlgorithm(),
    r = decryptionAlgorithm()
  return {
    encrypt: function (e) {
      let n = ''
      //For performance purposes
      const len = e.length
      for (let c = 0; c < len; c++) {
        // Switch to using brackets notation '[]' instead of charAt()
        const o = t.indexOf(e[c])
        n += -1 !== o ? r[o] : e[c]
      }
      return n
    },
    decrypt: function (e) {
      let n = ''
      const len = e.length
      for (let c = 0; c < len; c++) {
        const o = r.indexOf(e[c])
        n += -1 !== o ? t[o] : t[c]
      }
      return n
    }
  }
}

export default cryptia