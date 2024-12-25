const encryptionAlgorithm = () => {
    // return 'abcdefghijklmnopqrstuvwxyz1234567890 '
    return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 '
};

const decryptionAlgorithm = () => {
    // return 'qwertyuiopasdfghjklzxcvbnm0987654321 ';
    return 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0987654321 ';
}

export { encryptionAlgorithm, decryptionAlgorithm }
