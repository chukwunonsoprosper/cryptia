import { Algorithm, decryptionAlgorithm } from './core/engine.js'
export const cryptia = () => {
  const t = Algorithm(),
    r = decryptionAlgorithm()
  return {
    encrypt: function (e) {
      let n = ''
      for (let c = 0; c < e.length; c++) {
        let o = t.indexOf(e.charAt(c))
        n += -1 !== o ? r.charAt(o) : e.charAt(c)
      }
      return n
    },
    decrypt: function (e) {
      let n = ''
      for (let c = 0; c < e.length; c++) {
        let o = r.indexOf(e.charAt(c))
        n += -1 !== o ? t.charAt(o) : t.charAt(c)
      }
      return n
    }
  }
}
