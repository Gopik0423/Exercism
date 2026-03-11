export class DiffieHellman {
  constructor(p, g) {
    if (p <= 0 || g <= 0 || g >= p) {
      throw new Error('Invalid input');
    }

    this.p = p;
    this.g = g;
  }

  // Static method to generate private key
  static getPrivateKey(p) {
    return Math.floor(Math.random() * (p - 2)) + 2;
  }

  // Public key: g^privateKey mod p
  getPublicKey(privateKey) {
    if (privateKey <= 1 || privateKey >= this.p) {
      throw new Error('Invalid private key');
    }

    return this.modPow(this.g, privateKey, this.p);
  }

  // Shared secret: theirPublicKey^myPrivateKey mod p
  getSecret(theirPublicKey, myPrivateKey) {
    if (theirPublicKey <= 1 || theirPublicKey >= this.p) {
      throw new Error('Invalid public key');
    }

    return this.modPow(theirPublicKey, myPrivateKey, this.p);
  }

  // Efficient modular exponentiation
  modPow(base, exponent, mod) {
    let result = 1;
    base = base % mod;

    while (exponent > 0) {
      if (exponent % 2 === 1) {
        result = (result * base) % mod;
      }

      exponent = Math.floor(exponent / 2);
      base = (base * base) % mod;
    }

    return result;
  }
}