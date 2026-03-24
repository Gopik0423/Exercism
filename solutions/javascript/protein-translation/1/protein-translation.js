export const translate = (rna = "") => {
  if (typeof rna !== "string") {
    throw new Error("Invalid codon");
  }

  const codonMap = {
    AUG: "Methionine",
    UUU: "Phenylalanine",
    UUC: "Phenylalanine",
    UUA: "Leucine",
    UUG: "Leucine",
    UCU: "Serine",
    UCC: "Serine",
    UCA: "Serine",
    UCG: "Serine",
    UAU: "Tyrosine",
    UAC: "Tyrosine",
    UGU: "Cysteine",
    UGC: "Cysteine",
    UGG: "Tryptophan",
    UAA: "STOP",
    UAG: "STOP",
    UGA: "STOP"
  };

  const proteins = [];

  for (let i = 0; i < rna.length; i += 3) {
    const codon = rna.slice(i, i + 3);

    if (codon.length !== 3 || !codonMap[codon]) {
      throw new Error("Invalid codon");
    }

    if (codonMap[codon] === "STOP") break;

    proteins.push(codonMap[codon]);
  }

  return proteins;
};
