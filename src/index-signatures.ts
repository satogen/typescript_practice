export {};

interface Profile {
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}
let profile: Profile = { underTwenty: false };

// How to write index signatures
//{ [ index : typeFor Index]: typeforvalue }
profile.name = 'Ham';
profile.age = 43;
profile.nationality = 'Japan';
