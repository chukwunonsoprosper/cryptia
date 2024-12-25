import { encryptionAlgorithm, decryptionAlgorithm } from '../core/engine.js'

const cryptia = () => {
  const algorithm = encryptionAlgorithm()
  const shuffledAlgorithm = decryptionAlgorithm()
  return {
    encrypt: function (text) {
      let encrypted = ''
      const len = text.length
      for (let i = 0; i < len; i++) {
        const index = algorithm.indexOf(text[i])
        if (index !== -1) {
          encrypted += shuffledAlgorithm[index]
        } else {
          encrypted += text[i]
        }
      }
      return encrypted
    },

    decrypt: function (text) {
      let decrypted = ''
      const len = text.length
      for (let i = 0; i < len; i++) {
        const index = shuffledAlgorithm.indexOf(text[i])
        if (index !== -1) {
          decrypted += algorithm[index]
        } else {
          decrypted += algorithm[i]
        }
      }
      return decrypted
    }
  }
}

export default cryptia