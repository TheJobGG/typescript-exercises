const chars: Record<string, string> = {
  "G": "C",
  "C": "G",
  "T": "A",
  "A": "U",
}


export function toRna(dna: string): string {
  const splittedDNA = dna.split('')
  const RNAValues = Object.keys(chars).map(key => key);
  
  for (let i = 0; i < splittedDNA.length; i++) {
    const dnaChar = splittedDNA[i];
    if (!RNAValues.some(RNAValue => RNAValue === dnaChar)) throw new Error('Invalid input DNA.');
    
  }

  const result = dna.replace(/[GCTA]/g, m => chars[m]);
  return result
}

