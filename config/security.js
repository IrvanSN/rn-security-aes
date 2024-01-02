import crypto from "react-native-quick-crypto";

export const AESEncrypt = (algorithm, password, plainText) =>
  new Promise((resolve, reject) => {
    crypto.scrypt(password, "salt", 24, (err, key) => {
      if (err) return reject(err);
      const iv = Buffer.alloc(16, 0);
      const cipher = crypto.createCipheriv(algorithm, key, iv);

      let encrypted = "";
      cipher.setEncoding("hex");

      cipher.on("data", (chunk) => (encrypted += chunk));
      cipher.on("end", () => resolve(encrypted));

      cipher.write(plainText);
      cipher.end();
    });
  });

export const AESDecrypt = (algorithm, password, cipher) =>
  new Promise((resolve, reject) => {
    const key = crypto.scryptSync(password, "salt", 24);
    const iv = Buffer.alloc(16, 0);

    const decipher = crypto.createDecipheriv(algorithm, key, iv);

    let decrypted = "";
    let chunk;
    decipher.on("readable", () => {
      while (null !== (chunk = decipher.read())) {
        decrypted += chunk.toString("utf8");
      }
    });
    decipher.on("end", () => {
      resolve(decrypted);
    });

    decipher.write(cipher, "hex");
    decipher.end();
  });
