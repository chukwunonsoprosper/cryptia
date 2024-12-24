export const cryptia = () => {
    const algorithm = 'abcdefghijklmnopqrstuvwxyz1234567890';
    const shuffledAlgorithm = 'qwertyuiopasdfghjklzxcvbnm0987654321';
    return {
        encrypt: function (text) {
            let encrypted = '';
            for(let i = 0; i < text.length; i++) {
                let index = algorithm.indexOf(text.charAt(i));
                if(index !== -1) {
                    encrypted += shuffledAlgorithm.charAt(index);
                } else {
                    encrypted += text.charAt(i);
                }
            }
            return encrypted
        },

        decrypt: function (text) {
            let decrypted = '';
            for(let i = 0; i < text.length; i++) {
                let index = shuffledAlgorithm.indexOf(text.charAt(i));
                if(index !== -1) {
                    decrypted += algorithm.charAt(index)
                } else {
                    decrypted += algorithm.charAt(i)
                }
            }
            return decrypted;
        }
    }
}