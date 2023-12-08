
import crypto from 'crypto';

export function Encrypt(data, key) {
    if (key.length !== 32) {
        throw new Error('Invalid key length. Key should be 32 bytes (256 bits).');
      }
      
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
    let encrypted = cipher.update(JSON.stringify(data));
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return `${iv.toString('hex')}:${encrypted.toString('hex')}`;
  }


  export function Decrypt(text, key) {
    if (key.length !== 32) {
      throw new Error('Invalid key length. Key should be 32 bytes (256 bits).');
    }
    
    const parts = text.split(':');
    const iv = Buffer.from(parts[0], 'hex');
    const encryptedText = Buffer.from(parts[1], 'hex');
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return JSON.parse(decrypted.toString());
  }


  export const DecryptAutomated = (Data) => {
    try {
      const encryptionKey = 'fahrurrozi25012006Rozistore25126'
      const response = Decrypt(Data , encryptionKey)
      return response
    } catch (error) {
      console.error('Error: unable to decrypt data', error);
      return null
    }

  }

  export const EncryptAutomated = (Data) => {
    try {
      const encryptionKey = 'fahrurrozi25012006Rozistore25126'
      const response = Encrypt(Data , encryptionKey)
      return response
    } catch (error) {
      console.error('Error: unable to decrypt data', error);
      return null
    }

  }