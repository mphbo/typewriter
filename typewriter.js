const sentence = 'hello there from lighthouse labs';

const typewriter = (str) => {


  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      process.stdout.write(sentence[i]);
     }, 50 * i); 
  };

   setTimeout(() => {
     console.log('\n');
   }, 50 * sentence.length);
};

typewriter(sentence);
